import Head from "next/head";
import Footer from "../../components/Footer";
import axios from "axios";
import WpApiContent from "../../components/WpApiContent";

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
  infos: {
    name: string;
    description: string;
  };
  project: Project;
}

export default function Projects({ infos, project }: Iprops): JSX.Element {
  return (
    <div>
      <Head>
        <title>{infos.name}</title>
        <meta name="description" content={infos.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`body-container`}>
        <h3>{project.title}</h3>
        <WpApiContent content={project.content} />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(
    "http://localhost:8000/wp-json/myportfolio/v1/projects/"
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
  const infosReq = await axios.get("http://localhost:8000/wp-json/");
  const infos = await infosReq.data;
  const projectReq = await axios.get(
    `http://localhost:8000/wp-json/myportfolio/v1/projects/${params.id}`
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
