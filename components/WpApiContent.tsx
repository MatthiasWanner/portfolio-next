import parse from "html-react-parser";

interface Iprops {
  content: string;
}

export default function WpApiContent({ content }: Iprops) {
  const parsedContent = parse(content);
  const contentContainer = "flex flex-col justify-between h-1/2";

  return (
    <div className={`wp-content-container ${contentContainer}`}>
      {parsedContent}
    </div>
  );
}
