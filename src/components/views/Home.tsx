import { EditArea } from "../templates/EditArea";
import { UploadArea } from "../templates/UploadArea";

export const Home = () => {
  return (
    <div className="flex">
      <UploadArea />
      <EditArea />
    </div>
  );
};
