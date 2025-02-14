export default function Text({
  headline,
  paragraph,
}: {
  headline?: string;
  paragraph: string[];
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 pb-2">
          {headline && <h3>{headline}</h3>}
        </div>
        <div className="flex-1">
          {paragraph.map((text, index) => (
            <p key={index} className="pb-2">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
