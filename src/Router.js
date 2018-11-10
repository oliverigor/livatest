import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NewCard from "./NewCard";
import NewClientForm from "./NewClientForm";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/newcard" component={NewCard} />
			<Route exact path="/new_client_form" component={NewClientForm} />
		</Switch>
	</BrowserRouter>
);

export default Router;
