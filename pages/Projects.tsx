import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import styles from "../styles/Projects.module.css";
import axios from "axios";

interface Project {
  id: string;
  title: string;
}

interface Iprops {
  infos: {
    name: string;
    description: string;
  };
  projects: Project[];
}

export default function Projects({ infos, projects }: Iprops): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>{infos.name}</title>
        <meta name="description" content={infos.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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
