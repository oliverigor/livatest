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

class ClientDetail extends Component {
	render() {
		const params = {
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			}
		};
		return (
			<div style={{ textAlign: "center" }}>
				<Header />
				<Link to="/">
					<div className="div-back-link animated flipInX">
						<img
							style={{
								height: "6px",
								transform: "rotate(90deg)",
								margin: "7px 7px 7px 0px"
							}}
							src={Arrow}
						/>
						<a className="back-link">Igor Martins</a>
					</div>
				</Link>
				<div
					style={{
						marginLeft: "0px ",
						marginRight: "0px "
					}}
				>
					<Container>
						<h1 style={{ margin: "24px 0px", textAlign: "left" }} />
						<Row>
							<Col className="client-details-style">
								<CardDeck>
									<Card>
										<div
											style={{
												position: "relative",
												height: "203px"
											}}
										>
											<Swiper {...params}>
												{property.images.map(image => (
													// console.log(image),
													<div
														key={image
															.split("/")
															.pop()}
													>
														<Image
															className="swiper-lazy card-comparison-feed"
															data-src={image}
														/>
														{recentRecommendation && (
															<Label
																attached="top right"
																color="green"
															>
																Nova
																recomendação
															</Label>
														)}

														<div className="swiper-lazy-preloader" />
													</div>
												))}
											</Swiper>
											<div className="bottomright mini-tag">
												{this.props.platformOrigin}
											</div>
											<div className="bottomright-second mini-tag-second">
												Cód. {property.code}
											</div>
										</div>

										<div>
											<h1
												style={{
													padding: "8px 16px",
													textAlign: "left"
												}}
											>
												{formatPrice(
													property.sale_price
												)}
											</h1>
										</div>

										<div>
											<h3
												style={{
													padding:
														"8px 16px 8px 16px",
													textAlign: "left",
													color: "#BFBFBF",
													fontWeight: "normal",
													fontSize: "16px"
												}}
											>
												{property.property_type}
											</h3>
											<h1
												style={{
													padding:
														"8px 16px 8px 16px",
													textAlign: "left"
												}}
											>
												{property.address} –{" "}
												{property.neighborhood.name}
											</h1>
										</div>

										<div>
											<ClientTableProfile />
										</div>
										<div
											style={{
												padding: "0px 40px 16px 40px "
											}}
										>
											{!this.props.detailsPage && (
												<Link
													to={`/imovel/${
														this.props
															.recommendationId
													}`}
												>
													<Button
														style={{
															height: "48px"
														}}
														color="primary"
														size="lg"
														block
													>
														Ver detalhes do imóvel
													</Button>
												</Link>
											)}
											{!this.props.broker && (
												<div extra>
													{propertyLiked ? (
														<div>
															<Button
																size="big"
																primary
																fluid
																onClick={() =>
																	this.openIntercom(
																		"agendar uma visita no imóvel"
																	)
																}
															>
																{" "}
																Agendar Visita
															</Button>
														</div>
													) : (
														<div textAlign="center">
															<div
																style={{
																	width: "70%"
																}}
															>
																<Button
																	size="large"
																	style={{
																		borderRadius:
																			"4px",
																		marginRight:
																			"2px"
																	}}
																	color="red"
																	onClick={() =>
																		this.rateProperty(
																			1
																		)
																	}
																>
																	Descartar
																</Button>
																<Button
																	size="large"
																	style={{
																		borderRadius:
																			"4px"
																	}}
																	color="green"
																	onClick={
																		this
																			.openModal
																	}
																>
																	Entre em
																	contato
																</Button>
															</div>
														</div>
													)}
												</div>
											)}
										</div>
									</Card>
									<Card>
										<div
											style={{
												position: "relative",
												height: "203px"
											}}
										>
											<Swiper {...params}>
												<div>
													<img
														style={{
															objectFit: "contain"
														}}
														top
														width="100%"
														height="100%"
														src="http://s2.glbimg.com/feWuUX0z-7pLnz4wnUSaw_fpglA=/smart/e.glbimg.com/og/ed/f/original/2016/02/01/apartamento-samy-e-ricky-lapa360-01.jpg"
														alt="Card image cap"
													/>
												</div>
												<div>
													<img
														top
														style={{
															objectFit: "contain"
														}}
														top
														width="100%"
														height="100%"
														src="https://www.imofar.com.br/fotos/cache/apartamento-caxias-do-sul-rs-fill_665_707_iimofarim7035_159924.jpg"
														alt="Card image cap"
													/>
												</div>
											</Swiper>
											<div className="bottomright mini-tag">
												W Imóveis
											</div>
											<div className="bottomright-second mini-tag-second">
												Cód. BM7410
											</div>
										</div>

										<div>
											<h1
												style={{
													padding: "8px 16px",
													textAlign: "left"
												}}
											>
												R$445.500{" "}
											</h1>
										</div>

										<div>
											<h3
												style={{
													padding:
														"8px 16px 8px 16px",
													textAlign: "left",
													color: "#BFBFBF",
													fontWeight: "normal",
													fontSize: "16px"
												}}
											>
												Apartamento
											</h3>
											<h1
												style={{
													padding:
														"8px 16px 8px 16px",
													textAlign: "left"
												}}
											>
												Edifício The Park 3 quartos -
												Armários - Porcelanato
											</h1>
										</div>

										<div>
											<ClientTableProfile />
										</div>
										<div
											style={{
												padding: "0px 40px 16px 40px "
											}}
										>
											<Button
												style={{ height: "48px" }}
												color="primary"
												size="lg"
												block
											>
												Ver detalhes do imóvel
											</Button>
										</div>
									</Card>
									<Card>
										<div
											style={{
												position: "relative",
												height: "203px"
											}}
										>
											<Swiper {...params}>
												<div>
													<img
														style={{
															objectFit: "contain"
														}}
														top
														width="100%"
														height="100%"
														src="http://s2.glbimg.com/feWuUX0z-7pLnz4wnUSaw_fpglA=/smart/e.glbimg.com/og/ed/f/original/2016/02/01/apartamento-samy-e-ricky-lapa360-01.jpg"
														alt="Card image cap"
													/>
												</div>
												<div>
													<img
														top
														style={{
															objectFit: "contain"
														}}
														top
														width="100%"
														height="100%"
														src="https://www.imofar.com.br/fotos/cache/apartamento-caxias-do-sul-rs-fill_665_707_iimofarim7035_159924.jpg"
														alt="Card image cap"
													/>
												</div>
											</Swiper>
											<div className="bottomright mini-tag">
												W Imóveis
											</div>
											<div className="bottomright-second mini-tag-second">
												Cód. BM7410
											</div>
										</div>

										<div>
											<h1
												style={{
													padding: "8px 16px",
													textAlign: "left"
												}}
											>
												R$445.500{" "}
											</h1>
										</div>

										<div>
											<h3
												style={{
													padding:
														"8px 16px 8px 16px",
													textAlign: "left",
													color: "#BFBFBF",
													fontWeight: "normal",
													fontSize: "16px"
												}}
											>
												Apartamento
											</h3>
											<h1
												style={{
													padding:
														"8px 16px 8px 16px",
													textAlign: "left"
												}}
											>
												Edifício The Park 3 quartos -
												Armários - Porcelanato
											</h1>
										</div>

										<div>
											<ClientTableProfile />
										</div>
										<div
											style={{
												padding: "0px 40px 16px 40px "
											}}
										>
											<Button
												style={{ height: "48px" }}
												color="primary"
												size="lg"
												block
											>
												Ver detalhes do imóvel
											</Button>
										</div>
									</Card>
								</CardDeck>
							</Col>
						</Row>
						{/*<Row>
							<Card style={{ marginTop: "16px " }}>
								<Row>
									<Col md="5">
										<img
											src="http://s2.glbimg.com/feWuUX0z-7pLnz4wnUSaw_fpglA=/smart/e.glbimg.com/og/ed/f/original/2016/02/01/apartamento-samy-e-ricky-lapa360-01.jpg"
											className="w-100 h-100"
											style={{ height: "330px" }}
										/>
										<div className="bottomright mini-tag">
											W Imóveis
										</div>
										<div className="bottomright-second mini-tag-second">
											Cód. BM7410
										</div>
									</Col>
									<Col md="7">
										<Col>
											<div>
												<h1
													style={{
														padding: "14px 0px",
														textAlign: "left"
													}}
												>
													R$445.500{" "}
												</h1>
											</div>

											<div>
												<h3
													style={{
														padding: "14px 0px",
														textAlign: "left",
														color: "#BFBFBF",
														fontWeight: "normal",
														fontSize: "16px"
													}}
												>
													Apartamento
												</h3>
												<h3
													style={{
														padding: "14px 0px",
														textAlign: "left"
													}}
												>
													Edifício The Park 3 quartos
													- Armários - Porcelanato
												</h3>
											</div>

											<ClientTableProfile />

											<div>
												<Button
													style={{
														marginBottom: "16px",
														height: "48px"
													}}
													block
													color="primary"
												>
													Ver detalhes do imóvel
												</Button>
											</div>
										</Col>
									</Col>
								</Row>
							</Card>
						</Row>
						*/}
						<Row>
							<div
								className="main-page-btn"
								style={{ textAlign: "center" }}
							>
								<Button
									style={{ height: "48px", width: "330px" }}
									outline
									size="lg"
									color="primary"
								>
									Ver mais imóveis
								</Button>
							</div>
						</Row>
						<div style={{ margin: "56px 0px 40px 0px" }}>
							<ScrollButton
								scrollStepInPx="50"
								delayInMs="15.66"
							/>
						</div>
					</Container>
				</div>
			</div>
		);
	}
}

export default ClientDetail;
