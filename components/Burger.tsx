interface Iprops {
  handleClick: () => void;
  closed: boolean;
}

export default function Burger({ handleClick, closed }: Iprops): JSX.Element {
  const burgerClasses =
    "relative flex flex-col justify-around w-full h-full p-4 focus:outline-none";
  const spanClasses = "w-full h-1/6 bg-white duration-300";

  return (
    <button className={`burger ${burgerClasses}`} onClick={handleClick}>
      <span
        className={`${spanClasses} ${
          closed ? "" : "origin-center transform rotate-45 translate-y-3.5"
        }`}
      ></span>
      <span
        className={`${spanClasses} ${closed ? "" : "tansform opacity-0"}`}
      ></span>
      <span
        className={`${spanClasses} ${
          closed ? "" : "origin-center transform -rotate-45 -translate-y-3.5"
        }`}
      ></span>
    </button>
  );
}
