import React from "react";
import * as serviceWorker from './serviceWorker';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import './index.css'
import store from "./shared/store";
import { Provider as ReduxProvider } from "react-redux";
import './shared/fonts/UpperEastSide.ttf'

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();