import React from "react";
// import logo from "../../public/mangakinglogo.png";

const Header = () => {
  return (
    <header className="w-full h-22 bg-red-100 py-3 bg-black">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-11">
          <img className="h-8 w-auto" src={'/mangakinglogo.png'} />
          <ul className="flex items-center gap-3">
            <li className="text-sm text-white px-4 hover:text-primary transition-all cursor-pointer font-normal">Нүүр</li>
            <li className="text-sm text-white px-4 hover:text-primary transition-all cursor-pointer font-normal">Онцлох</li>
            <li className="text-sm text-white px-4 hover:text-primary transition-all cursor-pointer font-normal">Шинэ</li>
          </ul>
        </div>
        <div className="text-sm text-primary font-normal">Нэвтрэх</div>
      </nav>
    </header>
  );
};

export default Header;
