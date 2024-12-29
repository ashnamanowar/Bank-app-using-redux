import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk"; // Correctly import `thunk` as a named export
import reducers from "./reducers";

// Create the Redux store
export const store = createStore(
  reducers, // Combined reducers
  {}, // Initial state
  applyMiddleware(thunk) // Apply middleware for async actions
);
