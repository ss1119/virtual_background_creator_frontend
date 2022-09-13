import { useRef } from "react";
import exportAsImage from "../../lib/exportAsImage";
import { DownloadButton } from "../parts/DownloadButton";

export const EditArea = () => {
  const exportRef: any = useRef();

  return (
    <div className="w-2/3 h-93 my-5">
      <div className="w-full flex justify-between pr-10">
      <img src="/assets/box.png" className="w-1/2 z-0"></img>
        <DownloadButton
          onClick={() => {
            exportAsImage(exportRef.current, "virtual-background");
          }}
        />
      </div>
      <div className="flex justify-center">
        <div
          ref={exportRef}
          id="target"
          className="relative w-3/4 border-8 border-yellow-900"
        >
          <img src="/assets/background.png" className="z-0"></img>
        </div>
      </div>
    </div>
  );
};
