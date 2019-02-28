import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NewCard from "./NewCard";
import NewClientForm from "./NewClientForm";
import Qualified from "./Qualified";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/newcard" component={NewCard} />
      <Route path="/new_client_form" component={NewClientForm} />
      <Route path="/qualified" component={Qualified} />
    </Switch>
  </BrowserRouter>
);

export default Router;
