import { useEffect, useState } from "react";
const Shuja = ['Shopify', 'Wordpress', 'React'];

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
        } while (next === prev); // avoid same value again
        return next;
      });
    }, 2000); // change every 2 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="yearofexperince">
      Hi! My name is Shuja Ahmad. I have five years of experience in {skill}.
    </div>
  );
}

export default Fiveyear;
