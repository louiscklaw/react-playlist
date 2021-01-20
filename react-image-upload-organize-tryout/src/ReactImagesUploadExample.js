import React, { useState } from "react";
import ImageUploader from "react-images-upload";

export default function ReactImagesUploadExample({ pictures, setPictures }) {
  const onDrop = (picture) => {
    // setPictures([...pictures, picture])/;
    setPictures([picture]);
  };
  return (
    <>
      <ImageUploader
        withIcon={true}
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    </>
  );
}
