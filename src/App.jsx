import { useState, useEffect } from "react";
import { Loader } from "./components/loader/Loader";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Menu } from "./pages/menu/Menu";

function App() {
  const [loader, setLoader] = useState(false);

  const showLoader = async () => {
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
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
          </Routes>
        </Sidebar>
      )}
    </>
  );
}

export default App;
