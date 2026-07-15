import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Info from "./Info";

import { Suspense, lazy } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Info />
    </>
  );
}
export default App;
