import React, { Fragment, useState } from 'react'
import { Submission } from '../types'
import ensureNum, { isNum } from '../lib/ensure-num'
import globalData from '../lib/global-data'

function UploadLink({ href, text }: { href: string; text: string }) {
  if (isNum(href)) {
    // Attachments are stored as numbers. Their URLs are enumerable.
    const id = ensureNum(href)

    href = globalData.adminUrl + `upload.php?item=${id}`
    text = globalData.i18n.attachment + ` ${id}`
  }

  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  )
}

export default function Submission({
  submission,
  examine,
}: {
  submission: Submission
  examine: (sub: Submission) => void
}) {
  const { ID, uuid, entries, formFields } = submission

  return (
    <a
      href={
        (window.location.search ? `${window.location.search}&` : '?') +
        `&submissionUuid=${uuid}`
      }
      onClick={(e: React.MouseEvent) => {
        e.preventDefault()
        examine(submission)
      }}
    >
      Submission {ID}
    </a>
  )
}

export function SubmissionModal({
  submission,
}: {
  submission: Submission | null
}) {
  if (!submission) {
    return null
  }

  const { ID, uuid, entries, formFields } = submission

  return (
    <article className="wplf-formSubmission" data-uuid={uuid}>
      {Object.entries(entries).map(([name, value]) => {
        const formField = formFields[name]

        if (!formField) {
          return
        }

        const { type, required, multiple } = formField

        switch (type) {
          case 'file': {
            if (multiple) {
              const files = value.split(', ')

              value = files.map((file: string) => (
                <UploadLink key={file} href={file} text={file} />
              ))

              value = <div>{value}</div>
            } else {
              const file = value

              value = <UploadLink key={file} text={file} href={file} />
            }

            break
          }

          default: {
            if (multiple) {
              // ???
            }

            break
          }
        }

        return (
          <div key={name}>
            <strong>{name}</strong>

            {value}
          </div>
        )
      })}
    </article>
  )
}
