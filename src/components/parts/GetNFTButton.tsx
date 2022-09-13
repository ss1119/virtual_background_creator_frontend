type Props = {
  onClick: () => void;
};

export const GetNFTButton = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="text-center mt-3 w-56 py-3 text-base rounded-md text-white bg-yellow-500"
        onClick={() => props.onClick()}
      >
        NFT画像を取得する
      </button>
    </div>
  );
};
