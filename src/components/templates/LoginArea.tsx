import { LoginButton } from "../parts/LoginButton";
import { Link } from "react-router-dom";

export const LoginArea = () => {
  return (
    <div className="w-1/2 h-3/5 bg-yellow-100 bg-opacity-90 rounded-3xl p-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl p-5 text-yellow-500">ログインページ</h1>
      <form action="/api/v1/auth/sign_in" method="post">
        <div className="flex items-end flex-col">
        <label className="text-xl">
            メールアドレス
            <input type="text" name="email" className="m-3 px-4 py-1 rounded-3xl border border-yellow-500"/>
        </label>
        <label className="text-xl rounded-md">
            パスワード
            <input type="text" name="password" className="m-3 px-4 py-1 rounded-3xl border border-yellow-500"/>
        </label>
        </div>
        <LoginButton onClick={() => alert("You clicked on the pink circle!")} />
      </form>
      <div className="py-2">
        <Link to={`/signup/`} className="text-gray-400 text-base my-6">会員登録する</Link>
      </div>
      <div className="py-2">
        <Link to={`/`} className="text-gray-400 text-base my-6">ログインせずに進める</Link>
      </div>
    </div>
  );
  };