import storage from "../../utils/storage";

type Props = {
  onClick: () => void;
};

export const GetNFTButton = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className={
          !storage.getToken()
            ? "text-center mt-8 w-56 py-3 text-base rounded-md text-white bg-yellow-500 opacity-50"
            : "text-center mt-8 w-56 py-3 text-base rounded-md text-white bg-yellow-500"
        }
        onClick={() => props.onClick()}
        disabled={!storage.getToken()}
      >
        NFT画像を取得する
      </button>
    </div>
  );
};
