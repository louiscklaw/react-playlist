import React from 'react';
import Notification from 'src/components/PROGRESS_VALIDATION/Notification';
import Progress_Bar from 'src/components/PROGRESS_VALIDATION/Progress_Bar';
import Progress_Steps from 'src/components/PROGRESS_VALIDATION/Progress_Steps';
import Skeleton from 'src/components/PROGRESS_VALIDATION/Skeleton';
import Snackbar from 'src/components/PROGRESS_VALIDATION/Snackbar';
import Spinner from 'src/components/PROGRESS_VALIDATION/Spinner';
import Toast from 'src/components/PROGRESS_VALIDATION/Toast';

export default function HelloworldProgressValidation() {
  return (
    <>
      <Notification />
      <Progress_Bar />
      <Progress_Steps />
      <Skeleton />
      <Snackbar />
      <Spinner />
      <Toast />
    </>
  );
}
