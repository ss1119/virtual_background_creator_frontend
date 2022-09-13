import { useRef } from "react";
import exportAsImage from "../../lib/exportAsImage";
import { DownloadButton } from "../parts/DownloadButton";

type Props = {
  handleOnDeleteButton: () => void;
};

export const EditArea = (props: Props) => {
  const exportRef: any = useRef();

  return (
    <div className="w-2/3 h-screen bg-blue-200">
      <div className="w-full flex justify-end">
        <DownloadButton
          onClick={() => {
            props.handleOnDeleteButton();
            exportAsImage(exportRef.current, "virtual-background");
          }}
        />
      </div>
      <div className="flex justify-center mt-10">
        <div ref={exportRef} className="w-11/12 border-8 border-yellow-900">
          <img src="/assets/background.png" className="w-max z-0"></img>
        </div>
      </div>
    </div>
  );
};
