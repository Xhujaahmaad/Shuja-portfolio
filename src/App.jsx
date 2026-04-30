
import Header from "./components/header.jsx";
import Fiveyear from "./shuja.jsx";
import MySlider from "./conceptprops.jsx";
import "./App.css";
import CoreConcept from "./components/coreconcept.jsx";
import SplashCursor from "./components/SplashCursor.jsx";
import ScrollReveal from "./components/Scrollreveal.jsx";


// import someIcon from './assets/shopify.svg';
// const myCustomData = [
//   { image: someIcon, title: "Mobile Apps", description: "iOS and Android" }
// ];

function App() {
  return (
    <>
      <SplashCursor />
      <main>
        <Header />
      </main>
      <section className="page-width">
        <Fiveyear />
      </section>
      <section className="page-width">
        <MySlider />
      </section>
      <section className="page-width">
  <CoreConcept />
  </section>
  

      {/* <section className="page-width">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={false}
          baseRotation={10}
          blurStrength={5}
        >
          When does a man die? When he is hit by a bullet? No! When he suffers a
          disease? No! When he ate a soup made out of a poisonous mushroom? No!
          A man dies when he is forgotten!
        </ScrollReveal>
      </section> */}

      {/* <section className="page-width">
        <MySlider title="My Services" />
      </section> */}

      {/* <section className="page-width">
        <MySlider slides={myCustomData} />
      </section> */}
    </>
  );
}

export default App;
