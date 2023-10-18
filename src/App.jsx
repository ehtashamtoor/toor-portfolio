import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";
import { useEffect, useState } from "react";
import DownloadCV from "./components/DownloadCV";

function App() {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 40000);
  }, []);
  return (
    <BrowserRouter>
      <div className="relative bg-primary z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
          <DownloadCV isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <About />
        <Works />
        <Tech />
        <Experience />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      {/* <Routes>
        <Route path="/" element={ThankYouComponent} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
