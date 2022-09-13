import { Navigate, useLocation } from "react-router-dom";
import storage from "../../utils/storage";
import { Header } from "../parts/Hearder";
import { EditArea } from "../templates/EditArea";
import { UploadArea } from "../templates/UploadArea";

export const Home = () => {
  const location = useLocation();
  const remoteImages = location.state as string[];

  return storage.getToken() || storage.getGuest() ? (
    <>
      <Header />
      <div className="flex">
        <UploadArea remoteImages={remoteImages} />
        <EditArea />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};
