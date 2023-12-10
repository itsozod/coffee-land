import { useState, useEffect } from "react";
import { Loader } from "./components/loader/Loader";
import { Header } from "./components/header/Header";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Menu } from "./pages/menu/Menu";
import { NotFound } from "./pages/notFound/NotFound";

function App() {
  const [loader, setLoader] = useState(false);

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
          <Header onClick={() => showLoader()} />
          <div className="App">
            <Sidebar />
            <main className="routes">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </main>
          </div>
        </>
      )}
    </>
  );
}

export default App;
