import FindUsOn from "./FindUsOn";
import LoginWith from "./LoginWith";

const RightSide = () => {
  
  return (
    <div className="space-y-6">
      <section>
        <LoginWith></LoginWith>
      </section>
      <section>
        <FindUsOn></FindUsOn>
      </section>
    </div>
  );
};

export default RightSide;
