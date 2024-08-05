/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import styles from "./CoffeeCard.module.css";
import { SearchLoader } from "../../components/searchLoader/SearchLoader";
import { useEffect } from "react";
import {
  getDatas,
  setCoffeeQuery,
} from "../../store/features/coffees/coffeesSlice";
import { setCoffeeName } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
import { setCoffeePrice } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
import { setCoffeeQuantity } from "../../store/features/coffeeCupSelection/coffeeCupSlice";
import { CoffeeCupSelection } from "../coffeeCupSelection/CoffeeCupSelection";
import SelectedCoffeeCup from "../selectedCoffeeCup/SelectedCoffeeCup";
import { Alert, Snackbar } from "@mui/material";
import { useSnackBar } from "../../hooks/snackBarHook/UseSnackBar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import { useSearchParams } from "react-router-dom";

export const CoffeeCard = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();
  const [darkMode] = useDarkMode();
  const coffees = useSelector((state) => state.coffees.coffees);
  const loader = useSelector((state) => state.coffees.loader);
  const coffeeQuery = useSelector((state) => state.coffees.coffeeQuery);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDatas(Number(searchParams.get("page")), coffeeQuery));
  }, [dispatch, coffeeQuery, searchParams]);


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
      <div className={styles.coffee_search_container}>
        <input
          type="search"
          placeholder="Enter coffee name"
          className={styles.search_input_coffee}
          value={coffeeQuery}
          onChange={(e) => {
            dispatch(setCoffeeQuery(e.target.value))
            searchParams.delete("page")
            setSearchParams(searchParams)
          }}
        />
      </div>
      {coffees.length === 0 && (
        <h1 style={{ color: "brown", textAlign: "center" }}>
          Nothing was found!
        </h1>
      )}
      <div className={styles.full_container}>
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
            count={3}
            color="primary"
            page={Number(searchParams.get("page")) ? Number(searchParams.get("page")) : 1}
            onChange={(_e, page) => {
              dispatch(getDatas(page, coffeeQuery));
              searchParams.set("page", page)
              setSearchParams(searchParams)
            }}
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
      </div>
      <CoffeeCupSelection />
      <SelectedCoffeeCup />
      <Snackbar
        open={snackBar}
        autoHideDuration={1000}
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
