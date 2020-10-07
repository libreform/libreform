/// <reference types="react" />
import { Submission } from '../types';
export default function Submission({ submission, examine, }: {
    submission: Submission;
    examine: (sub: Submission) => void;
}): JSX.Element;
export declare function SubmissionModal({ submission, }: {
    submission: Submission | null;
}): JSX.Element | null;
