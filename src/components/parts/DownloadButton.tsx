type Props = {
  onClick: () => void;
};

export const DownloadButton = (props: Props) => {
  return (
    <div className="flex justify-end items-center">
      <button
        className="text-center mt-3 w-64 py-3"
        onClick={props.onClick}
      >
        <img src="./download-icon.png" className="w-1/6 z-0"></img>
      </button>
      
    </div>
  );
};
