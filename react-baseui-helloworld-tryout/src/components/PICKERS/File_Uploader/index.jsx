import * as React from 'react';
import { FileUploader } from 'baseui/file-uploader';

export default () => {
  const [errorMessage, setErrorMessage] = React.useState('');
  return <FileUploader errorMessage={errorMessage} />;
};
