import { UploadButton } from "../parts/UploadButton";
import { ImageArea } from "./ImageArea";

export const UploadArea = () => {
  return (
    <div className="w-1/3 h-screen bg-yellow-50 pb-7">
      <ImageArea />
      <UploadButton onClick={() => {}} />
    </div>
  );
};
