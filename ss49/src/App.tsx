import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import SubContact from "./components/subContact/SubContact";
import NotFound from "./components/NotFound";
import Product from "./components/someNav/Product";
import Contact from "./components/contact/Contact";
import Detail from "./components/someNav/Detail";
import Admin from "./components/admin/Admin";
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import CustomLink from "./components/customLink/CustomLink";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="" element={<Home></Home>}>
          <Route path="/subcontact" element={<SubContact></SubContact>}></Route>
          <Route path="/product" element={<Product></Product>}>
            {" "}
          </Route>
          <Route path="/detail" element={<Detail></Detail>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
        </Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/customlink" element={<CustomLink></CustomLink>}></Route>
      </Routes>
    </>
  );
}
