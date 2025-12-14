import fb from "../assets/fb.png";
import twt from "../assets/twitter.png";
import ins from "../assets/instagram.png";

const FindUsOn = () => {
  
  return (
    <div>
      <h1 className="text-xl font-medium mb-4">Find Us On</h1>
      <div className="join flex join-vertical">
        <button className="btn join-item justify-start">
          <img src={fb} />
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <img src={twt} />
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <img src={ins} />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;
