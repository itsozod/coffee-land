import { useState, useEffect } from "react";
import { Loader } from "./components/loader/Loader";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Menu } from "./pages/menu/Menu";
import { NotFound } from "./pages/notFound/NotFound";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import "./App.css";

function App() {
  const [loader, setLoader] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const showLoader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  useEffect(() => {
    showLoader();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar onClick={() => toggleSidebar()} />
          <Sidebar toggle={toggle} onClick={() => toggleSidebar()} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
