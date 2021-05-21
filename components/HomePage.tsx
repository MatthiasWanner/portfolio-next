import WpApiContent from "./WpApiContent";
import Image from "next/image";

interface Infos {
  name: string;
  profile_img: string;
}

interface About {
  title: string;
  content: string;
}

interface Iprops {
  infos: Infos;
  about: About;
}

export default function HomePage({ infos, about }: Iprops): JSX.Element {
  const titleContainer =
    "container flex flex-wrap justify-center items-center h-screen";
  const titleClasses = "flex flex-col w-3/5 items-start text-5xl z-10 mr-16";
  const spanClasses = "text-white my-5";
  const nameClasses = "text-6xl text-red-400";
  const imgContainerClasses = "absolute right-0 bottom-0 w-1/2 overflow-hidden";
  const imgContainerClassesMd = "md:w-5/12";
  const imgClasses = "";
  const aboutContainerClasses = "text-white p-5 w-screen h-screen";
  const aboutContainerClassesMd = "md:w-1/2";
  const aboutContentClasses = "flex flex-col justify-between h-1/2";
  return (
    <section className="container">
      <div className={`title-container ${titleContainer}`}>
        <h2 className={`${titleClasses}`}>
          <span className={`${spanClasses}`}>Salut, moi</span>
          <span className={`${spanClasses}`}>c'est</span>
          <span className={`${spanClasses} ${nameClasses}`}>{infos.name}</span>
        </h2>
        <div className={`${imgContainerClasses} ${imgContainerClassesMd}`}>
          <img
            className={`profile-img ${imgClasses}`}
            src={infos.profile_img}
            alt={`${infos.name} profile picture`}
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div
          className={`about-container ${aboutContainerClasses} ${aboutContainerClassesMd}`}
        >
          <h3 className="about-title text-3xl mb-10">{about.title}</h3>
          <WpApiContent content={about.content} classes={aboutContentClasses} />
        </div>
      </div>
    </section>
  );
}
