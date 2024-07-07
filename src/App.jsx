import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar/index";
import Services from "./components/servicess";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
