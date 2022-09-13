import { useState } from "react";
import { Header } from "../parts/Hearder";
import { EditArea } from "../templates/EditArea";
import { UploadArea } from "../templates/UploadArea";

export const Home = () => {
  const [images, setImages] = useState<File[]>([]);
  const [visible, setVisible] = useState<boolean[]>([]);

  return (
    <>
      <Header />
      <div className="flex">
        <UploadArea
          images={images}
          visible={visible}
          setImages={setImages}
          setVisible={setVisible}
        />
        <EditArea />
      </div>
    </>
  );
};
