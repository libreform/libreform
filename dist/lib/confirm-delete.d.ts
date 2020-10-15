import { Submission } from 'types';
/**
 * Display a native confirm prompt, and delete the provided submission if confirmed.
 */
declare function confirmDelete(formId: number | string, submission: Submission): Promise<void>;
export default confirmDelete;
