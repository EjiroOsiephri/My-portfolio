import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingSpinner from "./component/LoadingSpinner";

function App() {
  const Home = React.lazy(() => import("./pages/Home"));
  const Project = React.lazy(() => import("./pages/Project"));
  const About = React.lazy(() => import("./pages/About"));
  const Contact = React.lazy(() => import("./pages/Contact"));

  return (
    <>
      <Suspense
        fallback={
          <div className="spinner">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
