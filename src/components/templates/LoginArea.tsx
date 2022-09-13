import { LoginButton } from "../parts/LoginButton";
import { Link } from "react-router-dom";
import { axios } from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import storage from "../../utils/storage";

type FormState = {
  email: string;
  password: string;
};

export const LoginArea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await axios
      .post("/auth/sign_in", {
        email: data.email,
        password: data.password,
      })
      .then(async () => {
        await axios.get("/pictures").then((res) => {
          navigate("/", { state: res.data.data });
        });
      })
      .catch(() => {
        alert("メールアドレスまたはパスワードが間違っています。");
      });
  });

  return (
    <div className="w-1/2 h-3/5 bg-yellow-100 bg-opacity-90 rounded-3xl p-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl p-5 text-yellow-500">ログインページ</h1>
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
              <span className="flex justify-center mb-4 text-red-700 text-sm">
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
        </div>
        <LoginButton />
      </form>
      <div className="py-2">
        <Link to={`/signup`} className="text-gray-400 text-base my-6">
          会員登録する
        </Link>
      </div>
      <div className="py-2">
        <Link
          to={`/`}
          className="text-gray-400 text-base my-6"
          onClick={() => storage.setGuest("guest")}
        >
          ログインせずに進める
        </Link>
      </div>
    </div>
  );
};
