import Image, { StaticImageData } from "next/image";

export default function ImageGallery({
  images,
  half,
}: {
  images: StaticImageData[];
  half?: boolean;
}) {
  const l = images.length;
  return (
    <>
      {l > 2 ? (
        <div className="overflow-scroll no-scrollbar">
          <div className="flex flex-row flex-nowrap md:flex-wrap w-min md:w-full md:[&>*]:w-[calc(33.3333%-10.67px)] gap-4 [&>*]:w-[83vw] max-md:last:pr-2">
            {images.map((i, index) => {
              return (
                <div
                  className="flex-1 flex flex-row justify-between"
                  key={index}
                >
                  {half && <div className="max-md:hidden flex-1"></div>}
                  <div className="flex-1">
                    <Image
                      src={i}
                      alt=""
                      style={{
                        objectFit: "cover",
                        aspectRatio: images.length > 1 || half ? "1/1" : "2/1",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex md:flex-row flex-col w-full [&>*]:flex-1">
          <div className="flex flex-1 flex-col w-full md:flex-row justify-between gap-3">
            {images.map((i, index) => {
              return (
                <div
                  className="flex-1 flex flex-row justify-between"
                  key={index}
                >
                  {half && <div className="max-md:hidden flex-1"></div>}
                  <div className="flex-1">
                    <Image
                      src={i}
                      alt=""
                      style={{
                        objectFit: "cover",
                        aspectRatio: images.length > 1 || half ? "1/1" : "2/1",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
