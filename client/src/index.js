import React from "react";
import { createStore, combineReducers } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import reducer from "./reducers";
import App from "./components/App";
require("dotenv").config();

function saveToLocalStore(state) {
  try {
    const initState = JSON.stringify(state)
    localStorage.setItem('state', initState)

  }
  catch(e) {
    console.log(e)
  }
}
const rootReducer = combineReducers({
  item: reducer
})
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => saveToLocalStore(store.getState()))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);