import { useRef } from "react";
import exportAsImage from "../../lib/exportAsImage";
import { DownloadButton } from "../parts/DownloadButton";

type Props = {
  images: File[];
};

export const EditArea = (props: Props) => {
  const exportRef: any = useRef();

  return (
    <div className="w-2/3 h-93">
      <div className="w-full flex justify-end">
        <DownloadButton
          onClick={() => {
            const body: any[] = [];
            props.images.map((image) => {
              const reader = new FileReader();
              reader.readAsDataURL(image);
              reader.onload = (e) => {
                body.push(e.target!.result);
              };
            });
            console.log(body);
            exportAsImage(exportRef.current, "virtual-background");
          }}
        />
      </div>
      <div className="flex justify-center mt-10">
        <div
          ref={exportRef}
          id="target"
          className="relative w-11/12 border-8 border-yellow-900"
        >
          <img src="/assets/background.png" className="z-0"></img>
        </div>
      </div>
    </div>
  );
};
