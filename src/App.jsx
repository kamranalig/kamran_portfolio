import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar/index";
import Projects from "./components/projectss";
import Reviews from "./components/reviewss";
import Services from "./components/servicess";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
