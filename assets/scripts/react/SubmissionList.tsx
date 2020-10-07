import React, { Fragment, useState } from 'react'
import createApiClient from '../lib/api-client'

import { VariableSizeList as List } from 'react-window'
import { Submission } from '../../../dist/types'
import InfiniteLoader from 'react-window-infinite-loader'
import {
  ApiError,
  ApiResponse,
  ApiResponseKind,
  GetSubmissionsApiResponse,
} from '../types'

const { request } = createApiClient()

import log from '../lib/log'
import ensureNum from '../lib/ensure-num'
import globalData from '../lib/global-data'

import RenderedSubmission, { SubmissionModal } from './Submission'
import Modal from 'react-modal'

Modal.setAppElement('.wplf-submissionList')

interface SubmissionListState {
  submissions: Submission[]
  moreAvailable: boolean
  isLoading: boolean
  page: number
}

export default function SubmissionList({
  formId,
}: {
  formId: number | string
}) {
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(
    () => new Set()
  )
  const [
    { submissions, moreAvailable, isLoading, page },
    setState,
  ] = React.useState<SubmissionListState>({
    submissions: [],
    moreAvailable: true,
    isLoading: false,
    page: 0,
  })
  const [{ open, submission: modalSubmission }, setModal] = React.useState<{
    open: boolean
    submission: Submission | null
  }>({
    open: false,
    submission: null,
  })

  // Refs are a handy way of storing data that persists between re-renders:
  const lastClickRef = React.useRef<string | undefined>(undefined)
  const lastShiftRef = React.useRef<boolean>(false)

  /**
   * Invert selection on click, while allowing shift click to select multiple submissions at once
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.dataset.key as string // we've made sure that each element has this
    const newSelectedIds = new Set(selectedIds)
    const newState = e.target.checked
    const idsToChange = []
    const lastId = lastClickRef.current

    if (!lastShiftRef.current) {
      idsToChange.push(id)
    } else if (lastId && lastId !== id) {
      let flag: boolean = false

      for (var item of submissions) {
        let newFlag: boolean = flag
        // const stringId = item.ID.toString()

        if (item.uuid === id || item.uuid === lastId) {
          newFlag = !flag
        }

        if (flag) {
          idsToChange.push(item.uuid)
        }

        flag = newFlag
      }
    }

    idsToChange.forEach((id: any) => {
      if (!newState) {
        newSelectedIds.delete(id)
      } else {
        newSelectedIds.add(id)
      }
    })

    lastClickRef.current = id
    setSelectedIds(newSelectedIds)
  }

  /**
   * Convert e.shiftKey to a boolean and save it into the ref
   */
  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    lastShiftRef.current = !!e.shiftKey
  }

  const loadMore = async () => {
    if (isLoading) {
      return
    }

    setState((s) => ({
      ...s,
      isLoading: true,
    }))

    const response = await request(
      `/submissions?form=${formId}&page=${page}`,
      {},
      ApiResponseKind.GetSubmissions
    )

    function isGetSubmissionsApiResponse(
      x: ApiResponse
    ): x is GetSubmissionsApiResponse {
      return x.kind === ApiResponseKind.GetSubmissions
    }

    if (isGetSubmissionsApiResponse(response)) {
      const { ok, headers, data, kind } = response
      //
      // if (!ok) {
      // log.error('Request to get submissions failed')
      // return
      // }

      const totalPages = headers.get('X-WP-Totalpages') || 1
      const currentPage = ensureNum(page + 1)

      if ('error' in data) {
        log.error(data.error)

        setState((s) => ({
          submissions: [],
          page: 0,
          moreAvailable: false,
          isLoading: false,
        }))
      } else if (!ok) {
        log.error('Request to get form submissions failed')

        setState((s) => ({
          submissions: [],
          page: 0,
          moreAvailable: false,
          isLoading: false,
        }))
      } else {
        setState((s) => ({
          submissions: [...s.submissions, ...data],
          page: currentPage,
          moreAvailable: currentPage < ensureNum(totalPages, true),
          isLoading: false,
        }))
      }
    } else {
      // If this runs, there's a mistake in the code. There shouldn't be, since it's TS.
      log.error('Something is wrong with loadMore', response)

      setState((s) => ({
        ...s,
        isLoading: false,
      }))
    }
  }

  const getSubmissionSize = (itemIndex: number) => {
    // const submission = submissions[itemIndex];
    return 50
  }

  const openModal = (submission: Submission) => {
    setModal({
      open: true,
      submission,
    })
  }

  const closeModal = () => {
    setModal((d) => ({
      open: false,
      submission: null,
    }))
  }

  // If there are more submissions to be loaded then add an extra row to hold a loading indicator.
  const itemCount = moreAvailable ? submissions.length + 1 : submissions.length
  const loadMoreItems = isLoading ? async () => {} : loadMore

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index: number) =>
    !moreAvailable || index < submissions.length

  const Item = ({ index, style }: { index: number; style: any }) => {
    let content
    if (!isItemLoaded(index)) {
      content = globalData.i18n.loading
    } else {
      const submission = submissions[index]
      const { entries, meta, referrer, uuid, ID } = submission

      console.log(submission)

      content = (
        <div className="wplf-submissionList__submission">
          <label className="wplf-submissionList__submission__select">
            <input
              data-key={submissions[index].uuid}
              type="checkbox"
              checked={selectedIds.has(submissions[index].uuid)}
              onChange={handleChange}
              onClick={handleClick}
            />
          </label>

          <div className="wplf-submissionList__submission__data">
            <RenderedSubmission submission={submission} examine={openModal} />
          </div>
        </div>
      )
    }

    return <div style={style}>{content}</div>
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <Fragment>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            className="List"
            height={itemCount > 0 ? 400 : 0}
            itemCount={itemCount}
            itemSize={getSubmissionSize}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={'100%'}
          >
            {Item}
          </List>
        )}
      </InfiniteLoader>

      {!submissions.length ? <p>{globalData.i18n.noSubmissionsYet}</p> : null}

      <Modal
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>

        <SubmissionModal submission={modalSubmission} />
      </Modal>
    </Fragment>
  )
}
