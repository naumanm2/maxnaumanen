interface dataOptions {
  number: string;
  subtitle: string;
}

interface numbersOptions {
  data: Array<dataOptions>;
}

export default function DataContainer({ data }: numbersOptions) {
  return (
      <div className="w-full justify-between items-start flex flex-col md:flex-row [&>*]:flex-1 gap-8">
        {data.map((i, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <div className="display font-[100]">{i.number}</div>
              <small className="text-secondary uppercase pl-1">{i.subtitle}</small>
            </div>
          );
        })}
      </div>
  );
}
