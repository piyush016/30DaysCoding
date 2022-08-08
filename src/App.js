import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Topic from "./components/Topic/Topic";
import Contact from "./components/Contact/Contact";
import Table from "./components/Table/Table";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/topic" element={<Topic />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route path="/questions/:url" element={<Table />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
