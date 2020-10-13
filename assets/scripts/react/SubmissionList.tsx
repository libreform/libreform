import React, { Fragment, useState } from 'react'
import { request } from '../lib/create-request'

import { VariableSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import {
  ApiError,
  // ApiResponse,
  Submission,
} from '../types'

import log from '../lib/log'
import ensureNum from '../lib/ensure-num'
import globalData from '../lib/global-data'

import SubmissionRow, { DetailedSubmission } from './Submission'
import Modal from 'react-modal'
import confirmDelete from '../lib/confirm-delete'

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

    const response = null
    // const response = await request(
    //   `/submissions?form=${formId}&page=${page}`,
    //   {},
    //   ApiResponseKind.GetSubmissions
    // )

    // function isGetSubmissionsApiResponse(
    //   x: ApiResponse
    // ): x is GetSubmissionsApiResponse {
    //   return x.kind === ApiResponseKind.GetSubmissions
    // }

    if (false) {
      // if (isGetSubmissionsApiResponse(response)) {
      // const { ok, headers, data, kind } = response
      // const totalPages = headers.get('X-WP-Totalpages') || 1
      // const currentPage = ensureNum(page + 1)
      // if ('error' in data) {
      //   log.error(data.error)
      //   setState((s) => ({
      //     submissions: [],
      //     page: 0,
      //     moreAvailable: false,
      //     isLoading: false,
      //   }))
      // } else if (!ok) {
      //   log.error('Request to get form submissions failed')
      //   setState((s) => ({
      //     submissions: [],
      //     page: 0,
      //     moreAvailable: false,
      //     isLoading: false,
      //   }))
      // } else {
      //   setState((s) => ({
      //     submissions: [...s.submissions, ...data],
      //     page: currentPage,
      //     moreAvailable: currentPage < ensureNum(totalPages, true),
      //     isLoading: false,
      //   }))
      // }
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

      if (!submission) {
        log.error('No submission found for index', index, submissions)

        return null
      }

      content = (
        <SubmissionRow
          submission={submission}
          examine={openModal}
          checked={selectedIds.has(submission.uuid)}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      )
    }

    return <div style={style}>{content}</div>
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
        contentLabel={globalData.i18n.formSubmission}
        className="wplf-submissionModal"
        overlayClassName="wplf-submissionModal__overlay"
      >
        <div className="wplf-submissionModal__wrapper">
          {modalSubmission ? (
            <Fragment>
              <DetailedSubmission submission={modalSubmission} />

              <div className="wplf-submissionModal__buttons">
                <button
                  className="button wplf-delete"
                  type="button"
                  onClick={() => confirmDelete(modalSubmission)}
                >
                  {globalData.i18n.delete}
                </button>

                <button onClick={closeModal} className="button wplf-close">
                  {globalData.i18n.close}
                </button>
              </div>
            </Fragment>
          ) : null}
        </div>
      </Modal>
    </Fragment>
  )
}
