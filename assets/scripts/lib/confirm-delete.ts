import { Submission } from 'types'

const confirmDelete = (submission: Submission) => {
  if (confirm('Nuke submission?')) {
    alert('would nuke submission but it is not implemented yet')
  }
}

export default confirmDelete
