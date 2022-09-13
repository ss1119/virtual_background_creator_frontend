import IconButton from "@mui/material/IconButton";
import { UploadButton } from "../parts/UploadButton";
import CancelIcon from "@mui/icons-material/Cancel";
import Draggable from "react-draggable";

type Props = {
  images: File[];
  visible: boolean[];
  isClickDownload: boolean;
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean[]>>;
};

export const UploadArea = (props: Props) => {
  const inputId = Math.random().toString(32).substring(2);

  const handleOnAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    props.setImages([...props.images, ...e.target.files]);
    props.setVisible([...props.visible, false]);
  };

  const handleOnRemoveImage = (index: number) => {
    const newImages = [...props.images];
    newImages.splice(index, 1);
    const newVisible = [...props.visible];
    newVisible.splice(index, 1);
    props.setImages(newImages);
    props.setVisible(newVisible);
  };

  return (
    <div className="w-1/3 h-screen bg-yellow-50 pb-7">
      <div className="w-full h-93 bg-yellow-50 py-7 mx-4">
        <div className="absolute top-152 w-31 border-8 rounded border-yellow-600" />
        <div className="absolute top-298 w-31 border-8 rounded border-yellow-600" />
        <div className="absolute top-445 w-31 border-8 rounded border-yellow-600" />
        <div className="absolute top-592 w-31 border-8 rounded border-yellow-600" />
        <div className="flex flex-wrap pl-4">
          {props.images.map((image, i) => (
            <Draggable>
              <div key={i} className="relative w-1/4 mr-8 mb-5">
                {!props.isClickDownload ? (
                  <IconButton
                    className="absolute top-18 left-95"
                    aria-label="delete image"
                    onClick={() => handleOnRemoveImage(i)}
                  >
                    <CancelIcon />
                  </IconButton>
                ) : null}
                <img
                  className={props.isClickDownload ? "w-full mt-10" : "w-full"}
                  src={URL.createObjectURL(image)}
                />
              </div>
            </Draggable>
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
