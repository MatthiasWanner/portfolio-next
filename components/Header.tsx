import Link from "next/link";
import { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

interface Iprops {
  siteName: string;
}

export default function Header({ siteName }: Iprops) {
  const [isHidden, setIsHidden] = useState(true);

  const handleClickBurger = () => setIsHidden((prevState) => !prevState);

  const headerClasses =
    "container fixed flex justify-between px-5 text-white z-20";
  const titleClasses = "flex items-center text-4xl";
  const menuContainerClasses = "w-20 h-full";
  const menuClasses =
    "absolute right-0 top-0 w-screen h-screen md:w-1/4 transition ease-in-out duration-500";
  return (
    <header className={`header ${headerClasses}`}>
      <div className={`logo portfolio-title ${titleClasses}`}>
        <Link href="/">
          <a>{siteName}</a>
        </Link>
      </div>
      <div className={`menu-container ${menuContainerClasses}`}>
        <Burger handleClick={handleClickBurger} closed={isHidden} />
        <div
          className={`menu ${menuClasses} ${
            isHidden ? "block transform translate-x-full opacity-0" : "block"
          }`}
        >
          <Menu />
        </div>
      </div>
    </header>
  );
}
