import PortfolioHead from "../components/PortfolioHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import axios from "axios";

interface Infos {
  name: string;
  description: string;
}

interface Iprops {
  infos: Infos;
  title: string;
  content: string;
}

export default function Home({ infos, title, content }: Iprops): JSX.Element {
  const indexContainer = "w-full";
  return (
    <div className={`index-container ${indexContainer}`}>
      <PortfolioHead infos={infos} />
      <Header siteName={infos.name} />
      <HomePage name={infos.name} title={title} content={content} />
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
