import { useState } from "react";
import Page1 from "./components/page1";
import Page2 from "./components/page2";

import "./App.css";

function App() {
  const [home, isHome] = useState(true);

  function exchange() {
    isHome(false);
  }

  return (
    <div className="App">
      <div className= {home ? "home1" : "home2"}>
      {home === true ? <Page1 exchange={exchange} /> : <Page2 />}
      </div>
    </div>
  );
}

export default App;
