import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tables: [],
  tableName: "",
  tableImg: "",
  tableFoodImg: "",
  tableDrinkImg: "",
};

export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    setTables: (state, { payload }) => {
      state.tables = payload;
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
  },
});
export const {
  setTables,
  setTableName,
  setTableImg,
  setTableFoodImg,
  setTableDrinkImg,
} = tablesSlice.actions;
