import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchArea from "./SearchArea";
import { Router, Link } from "@reach/router";
import WatchArea from "./WatchArea";
import ColorContext from "./ColorContext";
import Footer from "./Footer";

const App = () => {
  const themeColor = useState("darkblue");
  return (
    <ColorContext.Provider value={themeColor}>
      <div>
        <header>
          <Link to="/">D-Tube</Link>
        </header>

        <Router>
          <SearchArea path="/" />
          <WatchArea path="/watch/:id" />
        </Router>
      </div>
      <Footer />
    </ColorContext.Provider>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
