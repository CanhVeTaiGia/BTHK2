import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/b1-2/Home";
import About from "./components/b1-2/About";
import Contact from "./components/b1-2/Contact";

export default function App() {
  return (
    <>
      <span style={{ display: "flex", gap: "10px" }}>
        <Link to={"home"}>Home</Link>
        <Link to={"contact"}>About</Link>
        <Link to={"about"}>Contact</Link>
      </span>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}
