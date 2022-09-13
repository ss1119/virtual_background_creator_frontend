import IconButton from "@mui/material/IconButton";
import { UploadButton } from "../parts/UploadButton";
import CancelIcon from "@mui/icons-material/Cancel";
import Draggable from "react-draggable";
import { useState } from "react";
import { GetNFTButton } from "../parts/GetNFTButton";
import { axios } from "../../lib/axios";

type Props = {
  remoteImages: string[];
};

export const UploadArea = (props: Props) => {
  const inputId = Math.random().toString(32).substring(2);
  const [images, setImages] = useState<File[]>([]);
  const [isImageVisible, setIsImageVisible] = useState<boolean[]>([]);
  const [remoteImages] = useState<string[]>(props.remoteImages);
  const [nftImages, setNftImages] = useState<string[]>([]);
  const [isDragged, setIsDragged] = useState<boolean[]>([]);
  const [isDraggedNft, setIsDraggedNft] = useState<boolean[]>([]);
  const [isDraggedRemote, setIsDraggedRemote] = useState<boolean[]>([]);

  const handleOnAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImages([...images, ...e.target.files]);
    setIsImageVisible([...isImageVisible, false]);
    setIsDragged([...isDragged, false]);
  };

  const handleOnRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    const newIsImageVisible = [...isImageVisible];
    newIsImageVisible.splice(index, 1);
    const newIsDragged = [...isDragged];
    newIsDragged.splice(index, 1);
    setImages(newImages);
    setIsImageVisible(newIsImageVisible);
    setIsDragged(newIsDragged);
  };

  const handleOnClickImage = (index: number) => {
    const target = document.getElementById("target");
    const image = document.getElementById("image" + index.toString());
    if (image) {
      target?.appendChild(image);
    }
    const newIsDragged = [...isDragged];
    newIsDragged[index] = true;
    setIsDragged(newIsDragged);
    const newIsImageVisible = [...isImageVisible];
    newIsImageVisible[index] = true;
    setIsImageVisible(newIsImageVisible);
  };

  const handleOnClickNftImage = (index: number) => {
    const target = document.getElementById("target");
    const nft = document.getElementById("nft" + index.toString());
    if (nft) {
      target?.appendChild(nft);
    }
    const newIsDraggedNft = [...isDraggedNft];
    newIsDraggedNft[index] = true;
    setIsDraggedNft(newIsDraggedNft);
  };

  const handleOnClickRemoteImage = (index: number) => {
    const target = document.getElementById("target");
    const nft = document.getElementById("remote" + index.toString());
    if (nft) {
      target?.appendChild(nft);
    }
    const newIsDraggedRemote = [...isDraggedRemote];
    newIsDraggedRemote[index] = true;
    setIsDraggedRemote(newIsDraggedRemote);
  };

  const onClickNFTButton = async () => {
    await axios.get("/nfts").then((res) => {
      setNftImages(res.data.data);
    });
  };

  return (
    <div className="w-1/3 pb-7">
      <div className="w-full h-93 t-4 border-14 border-yellow-500 bg-cover bg-[url('img/board.png')]">
        <div className="flex flex-wrap pl-4">
          {remoteImages.length !== 0
            ? remoteImages.map((image, i) => (
                <Draggable>
                  <div
                    id={"remote" + i.toString()}
                    key={i}
                    className={
                      isDraggedRemote[i]
                        ? "absolute w-28 top-minus"
                        : "relative w-28 mr-8 mb-5"
                    }
                  >
                    <img
                      className="w-full mt-10 z-10"
                      onClick={() => {
                        handleOnClickRemoteImage(i);
                      }}
                      src={image}
                    />
                  </div>
                </Draggable>
              ))
            : null}
          {nftImages.length !== 0
            ? nftImages.map((image, i) => (
                <Draggable>
                  <div
                    id={"nft" + i.toString()}
                    key={i}
                    className={
                      isDraggedNft[i]
                        ? "absolute w-28 top-minus"
                        : "relative w-28 mr-8 mb-5"
                    }
                  >
                    <img
                      className="w-full mt-10 z-10"
                      onClick={() => {
                        handleOnClickNftImage(i);
                      }}
                      src={image}
                    />
                  </div>
                </Draggable>
              ))
            : null}
          {images.map((image, i) => (
            <Draggable>
              <div
                id={"image" + i.toString()}
                key={i}
                className={
                  isDragged[i]
                    ? "absolute w-28 top-minus"
                    : "relative w-28 mr-8 mb-5"
                }
              >
                {!isImageVisible[i] ? (
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
                    isImageVisible[i] ? "w-full mt-10 z-10" : "w-full z-10"
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
        <GetNFTButton onClick={onClickNFTButton} />
      </div>
    </div>
  );
};
