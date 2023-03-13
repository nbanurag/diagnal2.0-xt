import React, { Suspense, lazy } from "react";
import "./App.css";

const NavBar = lazy(() => import("./components/NavBar"));
const Movies = lazy(() => import("./components/Movies"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Movies />
      </Suspense>
    </div>
  );
};

export default App;
