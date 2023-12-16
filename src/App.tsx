import "./App.css";
import HomePage from "./pages/HomePage";
import { hidePreloaderScreen } from "./animations/index";

function App() {
  hidePreloaderScreen();

  return (
    <div className="app">
      <HomePage />
    </div>
  );
}

export default App;
