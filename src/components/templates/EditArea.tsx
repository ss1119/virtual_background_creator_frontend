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
      <div
        className="w-full flex justify-end"
        onClick={() => props.handleOnDeleteButton()}
      >
        <DownloadButton
          onClick={() => exportAsImage(exportRef.current, "virtual-background")}
        ></DownloadButton>
        <div ref={exportRef} className="w-5/6 border-8 border-yellow-900">
          <img src="/assets/background.png" className="w-max z-0"></img>
        </div>
      </div>
      {/* <div className="w-full h-5/6 mt-8 px-7">
        <img src="/assets/background.png" />
      </div> */}
    </div>
  );
};
