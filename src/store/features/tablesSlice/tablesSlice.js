import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tables: [],
  tableLoader: false,
  tableName: "",
  tableImg: "",
  tableFoodImg: "",
  tableDrinkImg: "",
  orderedTables: JSON.parse(localStorage.getItem("orderedtables")) || [],
  tableTime: null,
  tableDate: null,
};

export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    setTables: (state, { payload }) => {
      state.tables = payload;
    },
    setTableLoader: (state, { payload }) => {
      state.tableLoader = payload;
    },
    setTableName: (state, { payload }) => {
      state.tableName = payload;
    },
    setTableImg: (state, { payload }) => {
      state.tableImg = payload;
    },
    setTableFoodImg: (state, { payload }) => {
      state.tableFoodImg = payload;
    },
    setTableDrinkImg: (state, { payload }) => {
      state.tableDrinkImg = payload;
    },
    setOrderedTables: (state, { payload }) => {
      state.orderedTables.push(payload);
      localStorage.setItem(
        "orderedtables",
        JSON.stringify(state.orderedTables)
      );
    },
    setTableTime: (state, { payload }) => {
      state.tableTime = payload;
    },
    setTableDate: (state, { payload }) => {
      state.tableDate = payload;
    },
    clearOrderedTables: (state, { payload }) => {
      state.orderedTables = payload;
      localStorage.setItem(
        "orderedtables",
        JSON.stringify(state.orderedTables)
      );
    },
  },
});
export const {
  setTables,
  setTableLoader,
  setTableName,
  setTableImg,
  setTableFoodImg,
  setTableDrinkImg,
  setOrderedTables,
  setTableTime,
  setTableDate,
  clearOrderedTables,
} = tablesSlice.actions;

export const getTables = () => {
  return async (dispatch) => {
    try {
      dispatch(setTableLoader(true));
      const response = await fetch(
        "https://vercel-server-itsozods-projects.vercel.app/tables"
      );
      const data = await response.json();
      dispatch(setTables(data));
      dispatch(setTableLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(setTableLoader(false));
    }
  };
};
