import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { Provider } from "react-redux";
import { fetchUser } from "./redux/actions/authAction";
import { fetchReviews } from "./redux/actions/reviewsAction";
import rootReducer from "./redux/reducers/rootReducer";
import user from "./data/user.json";
import App from "./App";
import "./assets/scss/style.scss";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import * as serviceWorker from "./serviceWorker";

import { composeWithDevTools } from "redux-devtools-extension";

import reviews from './data/reviews.json';

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save()))
);

// fetch products from json file
// store.dispatch(fetchUser(user));
store.dispatch(fetchReviews(reviews));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
