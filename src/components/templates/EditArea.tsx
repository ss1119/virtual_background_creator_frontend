import { useRef } from "react";
import { axios } from "../../lib/axios";
import exportAsImage from "../../lib/exportAsImage";
import storage from "../../utils/storage";
import { DownloadButton } from "../parts/DownloadButton";

type Props = {
  images: File[];
};

export const EditArea = (props: Props) => {
  const exportRef: any = useRef();

  return (
    <div className="w-2/3 h-93 my-5">
      <div className="w-full flex justify-between pr-10">
        <img src="/assets/box.png" className="w-1/2 z-0 h-48"></img>
        <DownloadButton
          onClick={async () => {
            const body: any[] = [];
            props.images.map((image) => {
              const reader = new FileReader();
              reader.readAsDataURL(image);
              reader.onload = (e) => {
                body.push(e.target!.result);
              };
            });
            const token = storage.getToken();
            const client = storage.getClient();
            const uid = storage.getUid();
            await axios.post(
              "/pictures",
              { binary_data: body },
              {
                headers: {
                  "access-token": token,
                  client: client ?? "",
                  uid: uid ?? "",
                },
              }
            );
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
