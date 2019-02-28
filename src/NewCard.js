import React, { Component } from "react";

import "./App.css";
import "./bootstrap-overrides.css";
import "./swiper.css";
import { Button, Card, Container } from "reactstrap";

import { Header } from "./App.js";

import Clock from "./clock.svg";

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
              <p style={Pstyle}>3 quartos</p> <p style={Pstyle}>3 quartos</p>{" "}
              <p style={Pstyle}>3 quartos</p> <p style={Pstyle}>3 quartos</p>
            </div>
            <div style={{ padding: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <h4
                  style={{
                    marginBottom: "0px",
                    alignSelf: "center"
                  }}
                >
                  R$10.445.500
                </h4>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      border: "1px solid #ECEFF1",
                      padding: "5px",
                      color: "#BFBFBF",
                      fontSize: "12px",
                      borderRadius: "4px 0px 0px 4px"
                    }}
                  >
                    <img
                      src={Clock}
                      alt="clock"
                      width={13}
                      height={13}
                      style={{
                        padding: "0px 3px 0px 0px  "
                      }}
                    />
                    Há 1min
                  </div>
                  <div
                    style={{
                      border: "1px solid #ECEFF1",
                      padding: "5px",
                      color: "#BFBFBF",
                      fontSize: "12px",
                      borderRadius: "0px 4px 4px 0px"
                    }}
                  >
                    BM4756
                  </div>
                </div>
              </div>
              <p>Nossa Senhora Do Perpétuo Socorro - São José</p>
            </div>
            <Button
              style={{
                borderRadius: "0px 0px 4px 4px",
                backgroundColor: "#373F51",
                height: "40px"
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
