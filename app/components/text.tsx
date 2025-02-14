import { MDXContent } from "mdx/types";

interface paragraphOptions {
  strong?: string;
  p?: string;
}

export default function Text({
  headline,
  paragraph,
  Content,
}: {
  headline?: string;
  paragraph?: paragraphOptions[];
  Content?: MDXContent;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 pb-2">{headline && <h3>{headline}</h3>}</div>
        <div className="flex-1 [&>p]:pb-2">
          {Content && <Content />}
          {paragraph &&
            paragraph.map((text, index) => (
              <div key={index} className="[&>*]:pb-1">
                <strong className="">{text.strong}</strong>
                <p className="">{text.p}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
