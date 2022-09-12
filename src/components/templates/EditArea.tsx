import { DownloadIcon } from "../parts/DownloadIcon";

type Props = {
  handleOnDeleteButton: () => void;
};

export const EditArea = (props: Props) => {
  return (
    <div className="w-2/3 h-screen bg-blue-200">
      <div
        className="w-full flex justify-end"
        onClick={() => props.handleOnDeleteButton()}
      >
        <DownloadIcon />
      </div>
      <div className="w-full h-5/6 mt-8 px-7">
        <img src="/assets/background.png" />
      </div>
    </div>
  );
};
