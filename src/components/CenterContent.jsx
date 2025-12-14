import { useLoaderData } from "react-router-dom";

const CenterContent = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  console.log(loaderData.data);

  return (
    <div>
      <h1 className="text-xl font-semibold">Dragon News Center</h1>
      <p>{loaderData.data.length} items here</p>
    </div>
  );
};

export default CenterContent;
