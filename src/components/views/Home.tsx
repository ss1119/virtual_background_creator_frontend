import { Navigate } from "react-router-dom";
import storage from "../../utils/storage";
import { Header } from "../parts/Hearder";
import { EditArea } from "../templates/EditArea";
import { UploadArea } from "../templates/UploadArea";

export const Home = () => {
  return storage.getToken() ? (
    <>
      <Header />
      <div className="flex">
        <UploadArea />
        <EditArea />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};
