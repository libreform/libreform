import React from 'react'
import { Submission } from '../types'
import ensureNum, { isNum } from '../lib/ensure-num'
import globalData from '../lib/global-data'
import confirmDelete from '../lib/confirm-delete'

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

export default function SubmissionRow({
  submission,
  examine,
  checked,
  formId,
  handleChange,
  handleClick,
}: {
  submission: Submission
  examine: (sub: Submission) => void
  checked: boolean
  formId: number | string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}) {
  const { ID, uuid, entries, formFields, title, createdAt } = submission

  return (
    <div className="wplf-submissionList__submission">
      <label className="wplf-submissionList__submission__select">
        <input
          data-key={submission.uuid}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          onClick={handleClick}
        />
      </label>

      <div>
        <strong>Title</strong>

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
          {title}
        </a>
      </div>

      <div>
        <strong>Time</strong>

        <time dateTime={createdAt}>{new Date(createdAt).toLocaleString()}</time>
      </div>

      <div>
        <button
          className="button button-small"
          type="button"
          onClick={() => {
            // This expects that all rows are passed the selected row uuids. That
            // consumes a lot of memory. Better to use a separate control for bulk delete.
            // confirmBulkDelete(formId, selectedUuids)
            confirmDelete(formId, submission)
          }}
        >
          {globalData.i18n.delete}
        </button>
      </div>
    </div>
  )
}

export function DetailedSubmission({
  submission,
}: {
  submission: Submission | null
}) {
  if (!submission) {
    return null
  }

  const {
    ID,
    uuid,
    createdAt,
    modifiedAt,
    entries,
    formFields,
    title,
    referrer,
    historyId,
    meta,
  } = submission

  const otherColumns = {
    ID,
    UUID: uuid,
    historyId,
    createdAt,
    modifiedAt,
    ...meta,
    // meta,
  }

  return (
    <article className="wplf-formSubmission" data-uuid={uuid}>
      <h2>{title}</h2>

      <h3>Entries</h3>
      <table>
        <tbody>
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

                if (!value || !value.length) {
                  value = globalData.i18n.emptyField
                }

                break
              }
            }

            return (
              <tr key={name}>
                <th>
                  {name}
                  {required ? '*' : null}
                </th>

                <td
                  style={{
                    whiteSpace: type === 'textarea' ? 'pre' : undefined,
                  }}
                >
                  {value}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <h3>Referrer</h3>

      <table>
        <tbody>
          {Object.entries(referrer).map(([k, v]) => {
            return (
              <tr key={k}>
                <th>{k}</th>

                <td>{v}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <h3>Meta</h3>

      <table>
        <tbody>
          {Object.entries(otherColumns).map(([k, v]) => {
            return (
              <tr key={k}>
                <th>{k}</th>

                <td>{v}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </article>
  )
}
