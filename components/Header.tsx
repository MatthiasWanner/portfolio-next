import Link from "next/link";
import { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

interface Iprops {
  siteName: string;
}

export default function Header({ siteName }: Iprops) {
  const [hidden, setHidden] = useState(true);

  const handleClickBurger = () => setHidden((prevState) => !prevState);

  const headerClasses =
    "container fixed flex justify-between px-5 text-white z-20";
  const titleClasses = "flex items-center text-4xl";
  const menuContainerClasses = "w-1/5 h-full md:w-1/12 md:px-4";
  const menuClasses = "absolute right-0 top-0 w-screen h-screen md:w-1/4";
  return (
    <header className={`header ${headerClasses}`}>
      <div className={`logo portfolio-title ${titleClasses}`}>
        <Link href="/">
          <a>{siteName}</a>
        </Link>
      </div>
      <div className={`menu-container ${menuContainerClasses}`}>
        <Burger handleClick={handleClickBurger} />
        <div className={`menu ${menuClasses} ${hidden ? "hidden" : "block"}`}>
          <Menu />
        </div>
      </div>
    </header>
  );
}
