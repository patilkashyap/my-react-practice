import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { names } from "./data/data";
function Info() {
  const [current, setCurrent] = useState(names[0]);
  const updateCurrentValue = (data) => setCurrent(data);

  return (
    <div className="text-xl m-4">
      <Header />
      <Navigation onButtonClick={updateCurrentValue} allNames={names} />
      <Content currentValue={current} />
      <Footer />
    </div>
  );
}
export default Info;
