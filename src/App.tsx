import "./App.css";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { gsap } from "gsap/gsap-core";

function App() {
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline()
        .to(".preloader", {
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        })
        .to(".preloader", { display: "none" });
    }, 200);
  }, []);

  return (
    <div className="app">
      <HomePage />
    </div>
  );
}

export default App;
