type Props = {
  onClick: () => void;
};

export const DownloadButton = (props: Props) => {
  return (
    <button className="pt-10 pr-12" onClick={props.onClick}>
      <img src="/assets/download-icon.png" className="w-14 z-0"></img>
    </button>
  );
};
