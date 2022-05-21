import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/Courses";
import Enquiry from "./components/Enquiry";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </Fragment>
  );
}

export default App;
