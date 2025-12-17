import { FaArrowRight } from "react-icons/fa";
import Header from "./Header";
import RightSide from "./RightSide";
import { Link, useLoaderData } from "react-router-dom";

const CardDetail = () => {
  const loaderData = useLoaderData();
  console.log(loaderData.data[0]);
  const detailData = loaderData.data[0];
  // console.log(detailData);

  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto my-6 grid grid-cols-1 sm:grid-cols-12 gap-6">
        <section className="sm:col-span-9">
          <h1 className="text-xl font-semibold mb-4">Dragon News Detail</h1>
          <div className="card bg-base-100 shadow-xl rounded-md overflow-hidden">
            {/* Image */}
            <figure>
              <img
                src={detailData?.image_url}
                className="w-full h-fit object-cover"
              />
            </figure>

            {/* Content */}
            <div className="card-body">
              {/* Title */}
              <h2 className="card-title text-lg font-bold leading-snug">
                {detailData?.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-700 text-justify">
                {detailData?.details}
              </p>

              {/* Button */}
              <div className="card-actions mt-4">
                <Link
                  to={`/category/${detailData.category_id}`}
                  className="btn btn-error btn-sm text-white flex items-center gap-2"
                >
                  All news in this category
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="sm:col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </>
  );
};

export default CardDetail;
