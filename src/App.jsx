import { useState, useEffect } from "react";
import { Loader } from "./components/loader/Loader";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Menu } from "./pages/menu/Menu";
import { Cart } from "./pages/cart/Cart";
import { Booking } from "./pages/booking/Booking";
import { NotFound } from "./pages/notFound/NotFound";
import { Orders } from "./pages/orders/Orders";
// import SignIn from "./pages/signin/SignIn";
// import SignUp from "./pages/signup/SignUp";
import { ChatBot } from "./pages/chatBot/ChatBot";
import "./App.css";
import { ThemeProvider } from "./hooks/darkmodeHook/ThemeProvider";
import { IceCreamCard } from "./components/iceCreamCard/IceCreamCard";
import { CoffeeCard } from "./components/coffeeCard/CoffeeCard";
function App() {
  const [loader, setLoader] = useState(false);
  const [toggle, setToggle] = useState(false);

  // function to show loader
  const showLoader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  // call the loader function when component is mounted
  useEffect(() => {
    showLoader();
  }, []);

  // toggle sidebar after 768px width
  const toggleSidebar = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <ThemeProvider>
            <Navbar onClick={() => toggleSidebar()} />
            <Sidebar toggle={toggle} onClick={() => toggleSidebar()} />
            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />}>
                <Route index element={<CoffeeCard />} />
                <Route path="coffeecard" element={<CoffeeCard />} />
                <Route path="icecreamcard" element={<IceCreamCard />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/chatbot" element={<ChatBot />} />
              {/* <Route path="/signup" element={<SignUp />} /> */}
              {/* <Route path="/signin" element={<SignIn />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default App;
