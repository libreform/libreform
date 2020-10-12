import React from 'react';
import { Submission } from '../types';
export default function SubmissionRow({ submission, examine, checked, handleChange, handleClick, }: {
    submission: Submission;
    examine: (sub: Submission) => void;
    checked: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}): JSX.Element;
export declare function DetailedSubmission({ submission, }: {
    submission: Submission | null;
}): JSX.Element | null;
