import { useRef, useState } from "react";
import exportAsImage from "../../lib/exportAsImage";
import { DownloadButton } from "../parts/DownloadButton";

export const EditArea = () => {
  const exportRef:any = useRef();
  const [enableOverflow, setOverflow] = useState(true); // for demo purpose
  return (
    <>
      <div className="w-2/3 h-screen bg-blue-200 parent flex flex-col justify-center items-center">
        <DownloadButton onClick={() => exportAsImage(exportRef.current, "virtual-background")}></DownloadButton>
        <div ref={exportRef} className="w-5/6 border-8 border-yellow-900">
          <img src="./bg.png" className="w-max z-0"></img>
        </div>
        {/* <button onClick={() => setOverflow(!enableOverflow)}>
          {enableOverflow ? "Disable Overflow" : "Enable Overflow"}
        </button> */}
      </div>
    </>
  );
}
