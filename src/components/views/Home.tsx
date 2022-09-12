import { useState } from "react";
import { EditArea } from "../templates/EditArea";
import { UploadArea } from "../templates/UploadArea";

export const Home = () => {
  const [images, setImages] = useState<File[]>([]);
  const [visible, setVisible] = useState<boolean[]>([]);
  const [isClickDownload, setIsClickDownload] = useState<boolean>(false);

  const handleOnDeleteButton = () => {
    setIsClickDownload(true);
  };

  return (
    <div className="flex">
      <UploadArea
        images={images}
        visible={visible}
        isClickDownload={isClickDownload}
        setImages={setImages}
        setVisible={setVisible}
      />
      <EditArea handleOnDeleteButton={handleOnDeleteButton} />
    </div>
  );
};
