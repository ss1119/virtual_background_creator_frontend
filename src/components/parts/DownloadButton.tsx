type Props = {
  onClick: () => void;
};

export const ExportButton = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="text-center mt-3 w-64 py-3 text-base rounded-md text-white bg-yellow-500"
        onClick={props.onClick}
      >
        画像ダウンロードする
      </button>
      
    </div>
  );
};
