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

  const getBase64 = (image: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    return new Promise((resolve) => {
      reader.onload = (e) => {
        resolve(e.target!.result);
      };
    });
  };

  return (
    <div className="w-2/3 h-93 my-5">
      <div className="w-full flex justify-between pr-10">
        <img
          src="/assets/img-box.jpeg"
          className="w-1/5 ml-24 mb-3 z-minus"
        ></img>
        <DownloadButton
          onClick={async () => {
            if (!!storage.getToken()) {
              const body: any[] = await Promise.all(
                props.images.map(async (image: Blob) => {
                  const base64 = await getBase64(image);
                  return base64;
                })
              );
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
            }
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
