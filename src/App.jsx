
import Header from "./components/header.jsx";
import Fiveyear from "./shuja.jsx";
import MySlider from "./conceptprops.jsx";
import "./App.css";
// import Tabs from "./components/tab.jsx";
import CoreConcept from "./components/coreconcept.jsx";
import SplashCursor from "./components/SplashCursor.jsx";
import ScrollReveal from "./components/Scrollreveal.jsx";
import Section from "./components/Section.jsx";


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
      <Section className="page-width" id="five-year">
        <Fiveyear />
      </Section>
      <Section className="page-width ">
        <MySlider />
      </Section>
      <Section className="page-width">
        <CoreConcept />
      </Section>
         {/* <Section className="page-width" id="core-concepts">
        <Tabs />
      </Section> */}

  
  

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
