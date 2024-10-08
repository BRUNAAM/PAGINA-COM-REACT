import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Principal from "./components/Principal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </Router>
  );
}
export default App;
