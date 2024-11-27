import Navbar from "./Components/Navbar";
import Lord from "./Components/Lord";
import About from "./Components/About";
import Technologies  from "./Components/Technologies";
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layer */}
      <div className="fixed top-0 -z-20 h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      
      {/* Semi-Transparent Overlay */}
      <div className="fixed top-0 -z-10 h-full w-full bg-black opacity-60"></div>

      {/* Main Content */}
      <div className="container mx-auto px-8 text-white">
        <Navbar />
        <Lord />
        <About />
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
