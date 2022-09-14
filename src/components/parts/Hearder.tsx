import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-full flex justify-between bg-yellow-600 px-10">
      <div className="h-full text-white text-xl py-3">
        オタ部屋背景生成器
      </div>
      <Link to={`/login`} className="text-gray-400 text-base py-3">
        <img src="/assets/login-icon.png" className="w-7 z-0"></img>
      </Link>
    </div>
  );
};
