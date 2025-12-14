import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-5 items-center text-lg font-semibold bg-base-300 p-2">
      <p className="bg-red-500 text-white px-4 py-2">Latest</p>
      <div className="flex-1 overflow-hidden">
        <Marquee speed={50} pauseOnHover={true}>
          <Link to="/news" className="mr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            dolores.
          </Link>
          <Link to="/news" className="mr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            dolores.
          </Link>
          <Link to="/news" className="mr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            dolores.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
