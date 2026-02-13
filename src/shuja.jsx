import { useEffect, useState } from "react";
const Shuja = ['Shopify', 'Wordpress', 'React'];
import Lottie from "lottie-react";
import animationData from "./assets/animation.json";

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function Fiveyear() {
  const [skill, setSkill] = useState(getRandom(Shuja));

  useEffect(() => {
    const interval = setInterval(() => {
      setSkill(prev => {
        let next;
        do {
          next = getRandom(Shuja);
        } while (next === prev); 
        return next;
      });
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="yearofexperince">
      <div>
        Hi! My name is Shuja Ahmad. I have five years of experience in {skill}.
      </div>
      <div>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ height: 250, width: 250 }}
      />
      </div>
    </div>
  );
}

export default Fiveyear;
