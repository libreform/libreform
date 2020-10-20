import { Submission } from 'types'

import { instance as api } from '../classes/wplf-api'
import ensureNum from './ensure-num'
import log from './log'
import globalData from './global-data'

/**
 * Display a native confirm prompt, and delete the provided submission if confirmed.
 */
async function confirmDelete(formId: number | string, submission: Submission) {
  if (confirm(globalData.i18n.deleteSubmissionsPrompt)) {
    const request = await api.deleteSubmissions(ensureNum(formId), [
      submission.uuid,
    ])

    if (!request.ok) {
      log.error('Request to delete failed', request)
    } else if ('error' in request.data) {
      log.error(request.data.error, request)
    } else {
      log.notice(`Deleted submission ${submission.uuid}`)
    }
  }
}

export default confirmDelete
