type Props = {
  onClick: () => void;
};

export const SignupButton = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <span className="text-center my-2 mt-5 w-64 py-3 text-base rounded-md text-white bg-yellow-500">
        新規会員登録する
      </span>
    </div>
  );
};