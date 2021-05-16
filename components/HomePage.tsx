import styles from "../styles/HomePage.module.css";
import parse from "html-react-parser";
import WpApiContent from "./WpApiContent";

interface Iprops {
  title: string;
  content: string;
}

export default function HomePage({ title, content }: Iprops): JSX.Element {
  return (
    <section className={styles.homeContainer}>
      <h2>{title}</h2>
      <WpApiContent content={content} />
    </section>
  );
}
