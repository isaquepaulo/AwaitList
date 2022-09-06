import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from 'redux';


// eslint-disable-next-line @typescript-eslint/no-unused-vars


const initialState = {
  heroLoading: true,
  cardLoading: true,
  detailsLoading: true,
  contentLoading: true,
  dark: false,
};


const rootReducer = (state = initialState, action: any) => {
  if (action.type === "LOADING_HERO_TRUE") {
    return {
      ...state,
      heroLoading: true,
    };
  }
  if (action.type === "LOADING_HERO_FALSE") {
    return {
      ...state,
      heroLoading: false,
    };
  }
  if (action.type === "LOADING_CONTENT_TRUE") {
    return {
      ...state,
      contentLoading: true,
    };
  }
  if (action.type === "LOADING_CONTENT_FALSE") {
    return {
      ...state,
      contentLoading: false,
    };
  }
  if (action.type === "LOADING_DETAILS_TRUE") {
    return {
      ...state,
      detailsLoading: true,
    };
  }
  if (action.type === "LOADING_DETAILS_FALSE") {
    return {
      ...state,
      detailsLoading: false,
    };
  }
  if (action.type === "LOADING_CARD_TRUE") {
    return {
      ...state,
      cardLoading: true,
    };
  }
  if (action.type === "LOADING_CARD_FALSE") {
    return {
      ...state,
      cardLoading: false,
    };
  }
  if (action.type === "DARK_MODE") {
    return {
      ...state,
      dark: true,
    };
  }
  if (action.type === "LIGHT_MODE") {
    return {
      ...state,
      dark: false,
    };
  }
  return state;
};

const store = createStore(rootReducer);


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
