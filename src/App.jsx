import Header from "./header";
import Fiveyear from "./shuja";
import MySlider from "./conceptprops";
import "./App.css";
import someIcon from './assets/shopify.svg';
// const myCustomData = [
//   { image: someIcon, title: "Mobile Apps", description: "iOS and Android" }
// ];

function App() {
  return (
    <>
      <main>
        <Header />
      </main>
      <section className="page-width">
        <Fiveyear />
      </section>
      <section className="page-width">
        <MySlider/>
      </section>

        {/* <section className="page-width">
        <MySlider slides={myCustomData} />
      </section> */}

    </>
  );
}

export default App;
