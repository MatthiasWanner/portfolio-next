import parse from "html-react-parser";

interface Iprops {
  content: string;
  classes: string;
}

export default function WpApiContent({ content, classes }: Iprops) {
  const parsedContent = parse(content);

  return (
    <div className={`wp-content-container ${classes}`}>{parsedContent}</div>
  );
}
