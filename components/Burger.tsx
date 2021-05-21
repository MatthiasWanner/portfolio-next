interface Iprops {
  handleClick: () => void;
}

export default function Burger({ handleClick }: Iprops): JSX.Element {
  const burgerClasses =
    "flex flex-col justify-around w-full h-full p-4 focus:outline-none";
  const spanClasses = "w-full h-1/6 bg-white block border border-black";

  return (
    <button className={`burger ${burgerClasses}`} onClick={handleClick}>
      <span className={`${spanClasses}`}></span>
      <span className={`${spanClasses}`}></span>
      <span className={`${spanClasses}`}></span>
    </button>
  );
}
