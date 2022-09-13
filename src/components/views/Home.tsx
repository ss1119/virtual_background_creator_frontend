import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import storage from "../../utils/storage";
import { Header } from "../parts/Hearder";
import { EditArea } from "../templates/EditArea";
import { UploadArea } from "../templates/UploadArea";

export const Home = () => {
  const location = useLocation();
  const remoteImages = location.state as string[];

  const [images, setImages] = useState<File[]>([]);

  return storage.getToken() || storage.getGuest() ? (
    <>
      <Header />
      <div className="flex">
        <UploadArea
          images={images}
          setImages={setImages}
          remoteImages={remoteImages}
        />
        <EditArea images={images} />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};
