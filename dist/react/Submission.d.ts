import React from 'react';
import { Submission } from '../types';
export default function SubmissionRow({ submission, examine, checked, formId, handleChange, handleClick, selectedUuids, }: {
    submission: Submission;
    examine: (sub: Submission) => void;
    checked: boolean;
    formId: number | string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    selectedUuids: Set<string>;
}): JSX.Element;
export declare function DetailedSubmission({ submission, }: {
    submission: Submission | null;
}): JSX.Element | null;
