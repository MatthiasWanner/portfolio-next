import PortfolioHead from "../components/PortfolioHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import axios from "axios";

interface Infos {
  site_name: string;
  description: string;
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

export default function Home({ infos, about }: Iprops): JSX.Element {
  const indexContainer = "container m-auto w-full";
  return (
    <div className={`index-container ${indexContainer}`}>
      <PortfolioHead infos={infos} />
      <Header siteName={infos.site_name} />
      <HomePage infos={infos} about={about} />
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
  const homepageReq = await axios.get(
    "http://admin.matthiaswanner.fr/wp-json/myportfolio/v1/about"
  );
  const about = await homepageReq.data;
  // By returning { props: { infos } }, the Blog component
  // will receive `infos` as a prop at build time
  return {
    props: {
      infos,
      about,
    },
  };
}
