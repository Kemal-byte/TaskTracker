import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Components/header/Header";
import Home from "./Components/page/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container" style={{ maxWidth: "600px" }}>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
