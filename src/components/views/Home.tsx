import { useState } from "react";
import { EditArea } from "../templates/EditArea";
import { UploadArea } from "../templates/UploadArea";

export const Home = () => {
  const [images, setImages] = useState<File[]>([]);
  const [visible, setVisible] = useState<boolean[]>([]);

  return (
    <div className="flex">
      <UploadArea
        images={images}
        visible={visible}
        setImages={setImages}
        setVisible={setVisible}
      />
      <EditArea />
    </div>
  );
};
