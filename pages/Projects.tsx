import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import PorfolioHead from "../components/PortfolioHead";

interface Infos {
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
  return (
    <div>
      <PorfolioHead infos={infos} />
      <Header siteName={infos.name} />
      <main className={`body-container`}>
        <h3>Mes projets</h3>
        <ul>
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <Link href={`/Projects/${project.id}`}>
                  <a id={project.id}>{project.title}</a>
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
  const infosReq = await axios.get("http://localhost:8000/wp-json/");
  const infos = await infosReq.data;
  const projectsReq = await axios.get(
    "http://localhost:8000/wp-json/myportfolio/v1/projects"
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
