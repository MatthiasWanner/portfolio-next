import Head from "next/head";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import styles from "../styles/Index.module.css";
import axios from "axios";

interface Iprops {
  infos: {
    name: string;
    description: string;
  };
  title: string;
  content: string;
}

export default function Home({ infos, title, content }: Iprops): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>{infos.name}</title>
        <meta name="description" content={infos.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomePage title={title} content={content} />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get metadata
  const infosReq = await axios.get("http://localhost:8000/wp-json/");
  const infos = await infosReq.data;
  const homepageReq = await axios.get(
    "http://localhost:8000/wp-json/myportfolio/v1/about"
  );
  const title = await homepageReq.data.post_title;
  const content = await homepageReq.data.post_content;
  // By returning { props: { infos } }, the Blog component
  // will receive `infos` as a prop at build time
  return {
    props: {
      infos,
      title,
      content,
    },
  };
}
