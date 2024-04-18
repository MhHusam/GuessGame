import { configureStore, combineReducers } from "@reduxjs/toolkit";

import GameSlice from "./features/user/GameSlice";

const rootReducer = combineReducers({
  Game: GameSlice,
});
export const store = configureStore({ reducer: rootReducer, devTools: true });
