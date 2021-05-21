import Head from "next/head";
import Header from "../../components/Header";
import PortfolioHead from "../../components/PortfolioHead";
import Footer from "../../components/Footer";
import axios from "axios";
import WpApiContent from "../../components/WpApiContent";
import PorfolioHead from "../../components/PortfolioHead";

interface Infos {
  site_name: string;
  description: string;
  name: string;
}

interface Project {
  id: string;
  title: string;
  content: string;
}

interface params {
  params: {
    id: string;
  };
}

interface Iprops {
  infos: Infos;
  project: Project;
}

export default function Projects({ infos, project }: Iprops): JSX.Element {
  const mainContainer = "text-white";
  const titleClasses = "text-4xl text-center mb-10 text-red-400";
  const projectContent = "mx-5";
  return (
    <div className="container m-auto">
      <PorfolioHead infos={infos} />
      <Header siteName={infos.site_name} />
      <main className={`body-container ${mainContainer}`}>
        <h3 className={`${titleClasses}`}>{project.title}</h3>
        <WpApiContent content={project.content} classes={projectContent} />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(
    "http://matthiaswanner.fr/wp-json/myportfolio/v1/projects/"
  );
  const projects = await res.data;

  // Get the paths we want to pre-render based on posts
  const paths = projects.map((project: Project) => ({
    params: { id: project.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: params) {
  console.log(params.id);
  // Call an external API endpoint to get metadata
  const infosReq = await axios.get(
    "http://matthiaswanner.fr/wp-json/myportfolio/v1/infos"
  );
  const infos = await infosReq.data;
  const projectReq = await axios.get(
    `http://matthiaswanner.fr/wp-json/myportfolio/v1/projects/${params.id}`
  );
  const project: Project[] = await projectReq.data;
  // By returning { props: { infos } }, the Blog component
  // will receive `infos` as a prop at build time
  return {
    props: {
      infos,
      project,
    },
  };
}
