import { useState, useEffect } from "react";
import { Loader } from "./components/loader/Loader";
import "./App.css";

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
  return <>{loader ? <Loader /> : <h1>Hello, React!</h1>}</>;
}

export default App;
