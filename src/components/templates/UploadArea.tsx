import IconButton from "@mui/material/IconButton";
import { UploadButton } from "../parts/UploadButton";
import CancelIcon from "@mui/icons-material/Cancel";
import Draggable from "react-draggable";
import { useState } from "react";
import { GetNFTButton } from "../parts/GetNFTButton";

type Props = {
  images: File[];
  visible: boolean[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean[]>>;
};

export const UploadArea = (props: Props) => {
  const inputId = Math.random().toString(32).substring(2);
  const [isDragged, setIsDragged] = useState<boolean[]>([]);

  const handleOnAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    props.setImages([...props.images, ...e.target.files]);
    props.setVisible([...props.visible, false]);
    setIsDragged([...isDragged, false]);
  };

  const handleOnRemoveImage = (index: number) => {
    const newImages = [...props.images];
    newImages.splice(index, 1);
    const newVisible = [...props.visible];
    newVisible.splice(index, 1);
    const newIsDragged = [...isDragged];
    newIsDragged.splice(index, 1);
    props.setImages(newImages);
    props.setVisible(newVisible);
    setIsDragged(newIsDragged);
  };

  const handleOnClickImage = (i: number) => {
    const target = document.getElementById("target");
    const image = document.getElementById(i.toString());
    if (image) {
      target?.appendChild(image);
    }
    const newIsDragged = [...isDragged];
    newIsDragged[i] = true;
    setIsDragged(newIsDragged);
    const newVisible = [...props.visible];
    newVisible[i] = true;
    props.setVisible(newVisible);
  };

  return (
    <div className="w-1/3 pb-7">
      <div className="w-full h-93 t-4 border-14 border-yellow-500 bg-cover bg-[url('img/board.png')]">
        <div className="flex flex-wrap pl-4">
          {props.images.map((image, i) => (
            <Draggable>
              <div
                id={i.toString()}
                key={i}
                className={
                  isDragged[i]
                    ? "absolute w-28 top-minus"
                    : "relative w-28 mr-8 mb-5"
                }
              >
                {!props.visible[i] ? (
                  <IconButton
                    className="absolute top-18 left-95"
                    aria-label="delete image"
                    onClick={() => handleOnRemoveImage(i)}
                  >
                    <CancelIcon />
                  </IconButton>
                ) : null}
                <img
                  className={
                    props.visible[i] ? "w-full mt-10 z-10" : "w-full z-10"
                  }
                  onClick={() => {
                    handleOnClickImage(i);
                  }}
                  src={URL.createObjectURL(image)}
                />
              </div>
            </Draggable>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
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
        <GetNFTButton />
      </div>
    </div>
  );
};
