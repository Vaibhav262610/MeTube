import { configureStore } from "@reduxjs/toolkit";
import AppSlcie from "./AppSlcie";

export const store = configureStore({
  reducer: {
    app: AppSlcie,
  },
});
