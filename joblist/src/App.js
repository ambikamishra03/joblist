import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./containers/Home.js";
import NotFound from "./containers/NotFound.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
