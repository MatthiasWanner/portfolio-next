import Link from "next/link";

export default function Menu() {
  const navClasses = "flex items-center w-full h-full items-center w-1/2";
  const menuClasses =
    "flex flex-col items-center justify-start pt-10 w-full h-full text-3xl";
  const liClasses = "my-4";

  return (
    <nav className={`${navClasses}`}>
      <ul className={`${menuClasses}`}>
        <li className={`${liClasses}`}>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li className={`${liClasses}`}>
          <Link href="/Projects">Projets</Link>
        </li>
      </ul>
    </nav>
  );
}
