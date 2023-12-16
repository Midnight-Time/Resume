import "./App.css";
import HomePage from "./pages/HomePage";
import { gsap } from "gsap/gsap-core";

function App() {
  gsap
    .timeline()
    .to(".preloader", {
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "Power3.easeOut",
    })
    .to(".preloader", { display: "none" });

  return (
    <div className="app">
      <HomePage />
    </div>
  );
}

export default App;
