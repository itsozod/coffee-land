/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import styles from "./CoffeeCard.module.css";
import { SearchLoader } from "../../components/searchLoader/SearchLoader";
import { useEffect } from "react";
import { getDatas } from "../../store/features/coffees/coffeesSlice";
import { setCoffeeName } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
import { setCoffeePrice } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
import { setCoffeeQuantity } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
import { CoffeeCupSelection } from "../coffeeCupSelection/CoffeeCupSelection";
import { SelectedCoffeeCup } from "../selectedCoffeeCup/SelectedCoffeeCup";
import { Alert, Snackbar } from "@mui/material";
import { useSnackBar } from "../../hooks/snackBarHook/useSnackBar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";

export const CoffeeCard = () => {
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();
  const [darkMode] = useDarkMode();
  const coffees = useSelector((state) => state.coffees.coffees);
  const loader = useSelector((state) => state.coffees.loader);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Coffees");
    dispatch(getDatas());
  }, [dispatch]);
  console.log(coffees);

  const handleClick = (id) => {
    console.log("Id:", id);
    const orderedCoffee = coffees.map((coffee) => {
      if (coffee.id === id) {
        dispatch(setCoffeeName(coffee.title));
        dispatch(setCoffeePrice(coffee.price));
        dispatch(setCoffeeQuantity(coffee.quantity));
        handleOpenSnackBar();
      } else {
        return coffee;
      }
    });
    return orderedCoffee;
  };
  return (
    <>
      {loader ? (
        <SearchLoader />
      ) : (
        <div className={styles.coffee_container}>
          {coffees.map((coffee) => (
            <article className={styles.coffee_card} key={coffee.id}>
              <p className={styles.coffee_title}>{coffee.title}</p>
              <img
                className={styles.coffee_img}
                src={coffee.img}
                alt={coffee.title}
              />
              <h3>${coffee.price}</h3>
              <button
                onClick={() => handleClick(coffee.id)}
                className={styles.order_btn}
              >
                Order
              </button>
            </article>
          ))}
        </div>
      )}
      <Stack
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"10px"}
        spacing={2}
      >
        <Pagination
          count={2}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": {
              color: darkMode ? "white" : "black",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              color: darkMode ? "black" : "white",
            },
          }}
        />
      </Stack>
      <CoffeeCupSelection />
      <SelectedCoffeeCup />
      <Snackbar
        open={snackBar}
        autoHideDuration={4000}
        onClose={() => handleCloseSnackBar()}
      >
        <Alert
          onClose={() => handleCloseSnackBar()}
          severity="success"
          sx={{ width: "100%" }}
        >
          You chose your coffee, go down to choose your coffee box!
        </Alert>
      </Snackbar>
    </>
  );
};
