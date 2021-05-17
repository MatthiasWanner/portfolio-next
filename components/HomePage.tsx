import WpApiContent from "./WpApiContent";

interface Iprops {
  name: string;
  title: string;
  content: string;
}

export default function HomePage({
  name,
  title,
  content,
}: Iprops): JSX.Element {
  const titleContainer =
    "flex flex-wrap justify-center items-center w-screen h-screen";
  const titleClasses = "flex flex-col w-3/5 items-start text-5xl z-10 mr-16";
  const spanClasses = "text-white my-5";
  const nameClasses = "text-6xl text-red-400";
  const aboutContainerClasses = "text-white p-5 w-screen h-screen";
  const aboutContentClasses = "flex flex-col justify-between h-1/2";
  return (
    <section>
      <div className={`title-container ${titleContainer}`}>
        <h2 className={`${titleClasses}`}>
          <span className={`${spanClasses}`}>Salut, moi</span>
          <span className={`${spanClasses}`}>c'est</span>
          <span className={`${spanClasses} ${nameClasses}`}>{name}</span>
        </h2>
      </div>
      <div className={`about-container ${aboutContainerClasses}`}>
        <h3 className="about-title text-3xl mb-10">{title}</h3>
        <WpApiContent content={content} classes={aboutContentClasses} />
      </div>
    </section>
  );
}
