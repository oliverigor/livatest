import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "./bootstrap-overrides.css";
import "./swiper.css";
import {
	Button,
	InputGroup,
	InputGroupAddon,
	Input,
	Collapse,
	Card,
	CardBody,
	CardDeck,
	Table,
	Container,
	Row,
	Col,
	CardImg
} from "reactstrap";
import Arrow from "./arrow.svg";
import Car from "./car.svg";
import Bath from "./icon-banheiro.svg";
import Ruler from "./ruler.svg";
import Bed from "./bedroom.svg";
import { Header, ScrollButton, ClientTableProfile } from "./App.js";
import Swiper from "react-id-swiper";

class NewCard extends Component {
	render() {
		return (
			<div>
				<Header />
				<Container>
					<Card>
						<h1>Aqui</h1>
						<div
							style={{
								background: "#F1F3F5",
								display: "flex",
								justifyContent: "space-between",
								padding: "7px 21px"
							}}
						>
							<p style={Pstyle}>3 quartos</p>{" "}
							<p style={Pstyle}>3 quartos</p>{" "}
							<p style={Pstyle}>3 quartos</p>{" "}
							<p style={Pstyle}>3 quartos</p>
						</div>
						<Button
							style={{
								borderRadius: "0px 0px 4px 4px",
								backgroundColor: "#373F51"
							}}
						>
							Entrar em contato
						</Button>
					</Card>
				</Container>
			</div>
		);
	}
}

export default NewCard;

const Pstyle = {
	fontFamily: "Lato",
	fontStyle: "normal",
	fontWeight: "normal",
	lineHeight: "normal",
	fontSize: "14px",

	color: "#373F51"
};
