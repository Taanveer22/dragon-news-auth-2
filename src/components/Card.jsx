import { FaStar, FaRegEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import moment from "moment";

const Card = ({ newsElement }) => {
  console.log(newsElement);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border border-base-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img
              src={newsElement?.author.img}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="font-semibold">{newsElement?.author.name}</h4>
              <p className="text-sm text-gray-500">
                {newsElement?.author.published_date &&
                  moment(newsElement.author.published_date).format("MMM Do YY")}
              </p>
            </div>
          </div>

          <div className="flex gap-3 text-gray-500 text-lg">
            <FaBookmark className="cursor-pointer hover:text-primary" />
            <FaShareAlt className="cursor-pointer hover:text-primary" />
          </div>
        </div>

        {/* Title */}
        <div className="px-4">
          <h2 className="text-xl font-bold leading-snug">
            {newsElement?.title}
          </h2>
        </div>

        {/* Image */}
        <figure className="px-4 pt-4">
          <img src={newsElement?.image_url} className="rounded-xl w-full" />
        </figure>

        {/* Content */}
        <div className="card-body pt-4">
          <p className="text-gray-600 text-justify">
            {newsElement?.details.slice(0, 200)}.....
          </p>

          <span className="text-primary font-semibold cursor-pointer">
            Read More
          </span>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4">
            {/* Rating */}
            <div className="flex items-center gap-1 text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="opacity-50" />
              <span className="text-gray-700 ml-2 font-medium">
                {newsElement?.rating.number}
              </span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-2 text-gray-500">
              <FaRegEye />
              <span>{newsElement?.total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
