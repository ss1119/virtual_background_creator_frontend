import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { UploadButton } from "../parts/UploadButton";
import CancelIcon from "@mui/icons-material/Cancel";

export const UploadArea = () => {
  const [images, setImages] = useState<File[]>([]);
  const inputId = Math.random().toString(32).substring(2);

  const handleOnAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImages([...images, ...e.target.files]);
  };

  const handleOnRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="w-1/3 h-screen bg-yellow-50 pb-7">
      <div className="w-full h-93 bg-yellow-50 py-7 mx-4">
        <div className="absolute top-152 w-31 border-8 rounded border-yellow-600" />
        <div className="absolute top-298 w-31 border-8 rounded border-yellow-600" />
        <div className="absolute top-445 w-31 border-8 rounded border-yellow-600" />
        <div className="absolute top-592 w-31 border-8 rounded border-yellow-600" />
        <div className="flex flex-wrap pl-4">
          {images.map((image, i) => (
            <div key={i} className="relative w-1/4 mr-8 mb-5">
              <IconButton
                className="absolute top-18 left-95"
                aria-label="delete image"
                onClick={() => handleOnRemoveImage(i)}
              >
                <CancelIcon />
              </IconButton>
              <img className="w-full" src={URL.createObjectURL(image)} />
            </div>
          ))}
        </div>
      </div>
      <label htmlFor={inputId}>
        <UploadButton />
        <input
          id={inputId}
          className="hidden"
          type="file"
          multiple
          accept="image/*,.png,.jpg,.jpeg,.gif"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleOnAddImage(e)
          }
        />
      </label>
    </div>
  );
};
