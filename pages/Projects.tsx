import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CodeIcon } from "@heroicons/react/solid";
import axios from "axios";
import PorfolioHead from "../components/PortfolioHead";

interface Infos {
  site_name: string;
  name: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
}

interface Iprops {
  infos: Infos;
  projects: Project[];
}

export default function Projects({ infos, projects }: Iprops): JSX.Element {
  const mainContainerClasses = "flex flex-col min-h-screen text-white";
  const titleClasses = "text-4xl text-center mb-10";
  const listContainer =
    "flex flex-col flex-grow w-full justify-around items-center px-5";
  return (
    <div className="container m-auto">
      <PorfolioHead infos={infos} />
      <Header siteName={infos.site_name} />
      <main className={`body-container ${mainContainerClasses}`}>
        <h3 className={`${titleClasses}`}>
          Mes <span className="text-red-400">projets</span>
        </h3>
        <ul className={`${listContainer}`}>
          {projects.map((project) => {
            return (
              <li className="flex items-center mb-5" key={project.id}>
                <CodeIcon className="w-8 mr-5" />
                <Link href={`/Projects/${project.id}`}>
                  <a className="text-2xl md:text-3xl" id={project.id}>
                    {project.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get metadata
  const infosReq = await axios.get(
    "http://admin.matthiaswanner.fr/wp-json/myportfolio/v1/infos"
  );
  const infos = await infosReq.data;
  const projectsReq = await axios.get(
    "http://admin.matthiaswanner.fr/wp-json/myportfolio/v1/projects"
  );
  const projects: Project[] = projectsReq.data.map((project: Project) => {
    return {
      id: project.id,
      title: project.title,
    };
  });
  // By returning { props: { infos } }, the Blog component
  // will receive `infos` as a prop at build time
  return {
    props: {
      infos,
      projects,
    },
  };
}
