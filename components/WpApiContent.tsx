import parse from "html-react-parser";
import styles from "../styles/WpApiContent.module.css";

interface Iprops {
  content: string;
}

export default function WpApiContent({ content }: Iprops) {
  const parsedContent = parse(content);
  return <div className={styles.wpApiContent}>{parsedContent}</div>;
}
