import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tables: [],
  tableLoader: false,
  tableName: "",
  tableImg: "",
  tableFoodImg: "",
  tableDrinkImg: "",
  orderedTables: [],
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
    },
    setTableTime: (state, { payload }) => {
      state.tableTime = payload;
    },
    setTableDate: (state, { payload }) => {
      state.tableDate = payload;
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
} = tablesSlice.actions;

export const getTables = () => {
  return async (dispatch) => {
    try {
      dispatch(setTableLoader(true));
      const response = await fetch("http://localhost:3000/tables");
      const data = await response.json();
      dispatch(setTables(data));
      dispatch(setTableLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(setTableLoader(false));
    }
  };
};
