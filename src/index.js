import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import ClientDetail from "./ClientDetail";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
