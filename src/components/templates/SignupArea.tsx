import { SignupButton } from "../parts/SignupButton";
import { Link } from "react-router-dom";

export const SignupArea = () => {
  return (
    <div className="w-1/2 h-3/5 bg-yellow-100 bg-opacity-90 rounded-3xl p-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl p-5 text-yellow-500">新規会員登録ページ</h1>
      <form action="/api/v1/auth/sign_up" method="post">
        <div className="flex items-end flex-col">
        <label className="text-xl">
            メールアドレス
            <input type="text" name="email" className="m-3 px-4 py-1 rounded-3xl border border-yellow-500"/>
        </label>
        <label className="text-xl rounded-md">
            パスワード
            <input type="text" name="password" className="m-3 px-4 py-1 rounded-3xl border border-yellow-500"/>
        </label>
        <label className="text-xl rounded-md">
            パスワード確認
            <input type="text" name="password-confirmation" className="m-3 px-4 py-1 rounded-3xl border border-yellow-500"/>
        </label>
        <label className="text-xl rounded-md">
            Wallet Adress(任意)
            <input type="text" name="wallet-adress" className="m-3 px-4 py-1 rounded-3xl border border-yellow-500"/>
        </label>
        </div>
        <SignupButton onClick={() => alert("You clicked on the pink circle!")} />
      </form>
      <div className="py-2">
        <Link to={`/login/`} className="text-gray-400 text-base my-6">ログインする</Link>
      </div>
      <div className="py-2">
        <Link to={`/`} className="text-gray-400 text-base my-6">会員登録せずに進める</Link>
      </div>
    </div>
  );
  };