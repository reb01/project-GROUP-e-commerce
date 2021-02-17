import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import reducer from "./reducers";
import App from "./components/App";
require("dotenv").config();

function saveToLocalStore(state) {
  try {
    const initState = JSON.stringify({ item: state.item });
    localStorage.setItem("state", initState);
  } catch (e) {
    console.log(e);
  }
}
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedItemState = loadState();

const store = createStore(
  reducer,
  persistedItemState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => saveToLocalStore(store.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
