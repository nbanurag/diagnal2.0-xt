import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const NavBar = lazy(() => import("./components/NavBar"));
const Movies = lazy(() => import("./components/Movies"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Movies />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
