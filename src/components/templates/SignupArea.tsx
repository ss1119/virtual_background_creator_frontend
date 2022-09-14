import { SignupButton } from "../parts/SignupButton";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axios } from "../../lib/axios";
import storage from "../../utils/storage";

type FormState = {
  email: string;
  password: string;
  password_confirmation: string;
  wallet_address: string;
};

export const SignupArea = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormState>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      password_confirmation: "",
      wallet_address: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await axios
      .post("/auth/", {
        email: data.email,
        password: data.password,
      })
      .then(async (res) => {
        console.log(res);
        await axios
          .post("/wallet_address", { wallet_address: data.wallet_address })
          .then(() => {
            navigate("/");
          });
      })
      .catch(() => {
        alert("指定したメールアドレスは既に使われています。");
      });
  });

  return (
    <div className="w-1/2 h-3/5 bg-yellow-100 bg-opacity-90 rounded-3xl p-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl p-5 text-yellow-500">新規会員登録ページ</h1>
      <form method="post" onSubmit={onSubmit}>
        <div className="flex items-end flex-col">
          <label className="text-xl">
            メールアドレス
            <input
              type="email"
              className="m-3 px-4 py-1 rounded-3xl border border-yellow-500"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <span className="flex justify-center text-red-700 text-sm">
                メールアドレスは必ず指定してください。
              </span>
            )}
          </label>
          <label className="text-xl rounded-md">
            パスワード
            <input
              type="password"
              className="m-3 px-4 py-1 rounded-3xl border border-yellow-500"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <span className="flex justify-center text-red-700 text-sm">
                パスワードは必ず指定してください。
              </span>
            )}
          </label>
          <label className="text-xl rounded-md">
            パスワード確認
            <input
              type="password"
              className="m-3 px-4 py-1 rounded-3xl border border-yellow-500"
              {...register("password_confirmation", {
                required: true,
                validate: (value) => value === getValues("password"),
              })}
            />
            {errors.password_confirmation && (
              <span className="flex justify-center text-red-700 text-sm">
                パスワードが一致しません。
              </span>
            )}
          </label>
          <label className="text-xl rounded-md">
            Wallet Adress(任意)
            <input
              type="text"
              className="m-3 px-4 py-1 rounded-3xl border border-yellow-500"
              {...register("wallet_address", {
                required: true,
              })}
            />
          </label>
        </div>
        <SignupButton />
      </form>
        <Link to={`/login`} className="text-gray-400 text-base mt-3">
          ログインする
        </Link>
        <Link
          to={`/`}
          className="text-gray-400 text-base mt-3"
          onClick={() => storage.setGuest("guest")}
        >
          会員登録せずに進める
        </Link>
    </div>
  );
};
