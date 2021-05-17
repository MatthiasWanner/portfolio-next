import Link from "next/link";

interface Iprops {
  siteName: string;
}

export default function Header({ siteName }: Iprops) {
  const headerClasses =
    "fixed w-full flex justify-between px-5 text-white z-20";
  const titleClasses = "flex items-center text-4xl";
  const navClasses = "flex items-center w-1/2";
  const menuClasses = "flex w-full justify-around";
  return (
    <header className={`menu ${headerClasses}`}>
      <div className={`logo portfolio-title ${titleClasses}`}>
        <Link href="/">
          <a>{siteName}</a>
        </Link>
      </div>
      <nav className={`${navClasses}`}>
        <ul className={`${menuClasses}`}>
          <li>
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li>
            <Link href="/Projects">Projets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
