import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const loadImage = "src/assets/coffee-gif.gif";
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <>
      {loader ? (
        <div className="loaderContainer">
          <img className="loader" src={loadImage} alt="loader" />
        </div>
      ) : (
        <h1>Hello, React!</h1>
      )}
    </>
  );
}

export default App;
