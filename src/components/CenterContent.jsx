import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const CenterContent = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  console.log(loaderData.data);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Dragon News Center</h1>
      <p className="opacity-70 mb-4 text-base">{loaderData.data.length} news found here</p>
      <div className="flex flex-col gap-6">
        {loaderData.data.map((newsElement) => (
          <Card key={newsElement._id} newsElement={newsElement}></Card>
        ))}
      </div>
    </div>
  );
};

export default CenterContent;
