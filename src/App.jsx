import { useState, useEffect } from "react";
import { Loader } from "./components/loader/Loader";

import "./App.css";
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
  return <>{loader ? <Loader /> : <></>}</>;
}

export default App;
