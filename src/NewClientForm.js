import React, { Component } from "react";
import "./App.css";
import "animate.css";
import "./bootstrap-overrides.css";
import "react-toastify/dist/ReactToastify.css";
import { Button, Input, Container, Row } from "reactstrap";
import Arrow from "./arrow.svg";
import { Link } from "react-router-dom";

import { Header, ScrollButton } from "./App.js";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import Check from "./check-circle.svg";
import NumberFormat from "react-number-format";
const options = [
  { value: "Liva", label: "Liva" },
  { value: "Beiramar", label: "Beiramar" },
  { value: "Muck", label: "Muck" }
];

const ToastSuccess = () => (
  <div style={{ display: "flex" }}>
    <img alt="arrow2" src={Check} />
    <p style={{ padding: "0px 0px 0px 8px" }}>Cliente adicionado</p>
  </div>
);

class NewClientForm extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <Header />
        <Link to="/">
          <div className="div-back-link animated flipInX">
            <img
              style={{
                height: "6px",
                transform: "rotate(90deg)",
                margin: "7px 7px 7px 0px"
              }}
              alt="arrow"
              src={Arrow}
            />
            <a className="back-link">Lista de Clientes</a>
          </div>
        </Link>

        <div
          style={{
            marginLeft: "16px",
            marginRight: "16px"
          }}
        >
          <Container>
            <Row>
              <h2
                className="animated bounceInDown"
                style={{
                  padding: "16px 0px",
                  textAlign: "left"
                }}
              >
                Novo cliente
              </h2>
            </Row>
            <Row>
              <div className="main-page-btn animated bounceInDown ">
                <h4 style={{ textAlign: "left" }}>Nome*</h4>
                <Input
                  className="general-input"
                  placeholder="Escreva o nome do cliente"
                  required
                />
              </div>
              <div className="main-page-btn animated bounceInDown">
                <h4 style={{ textAlign: "left" }}>E-mail*</h4>
                <Input
                  className="general-input"
                  placeholder="Escreva o e-mail do cliente"
                  required
                  pattern=".+@.+..+"
                  title="Digite o email no formato ex:liva@liva.com"
                />
              </div>
              <div className="main-page-btn animated bounceInDown">
                <h4 style={{ textAlign: "left" }}>Telefone</h4>
                <Input
                  className="general-input"
                  placeholder="Escreva o telefone do cliente"
                >
                  <NumberFormat format="(##) #####-####" mask="_" />
                </Input>
              </div>
              <div className="main-page-btn animated fadeIn">
                <h4 style={{ textAlign: "left" }}>Código do imóvel*</h4>
                <Input
                  className="general-input "
                  name="code"
                  placeholder="Insira o código do imóvel"
                  required
                  // pattern="[A-Z]{2}\d{4}"
                  title="BM7676"
                />
              </div>
              <div className="main-page-btn ">
                <h4 style={{ textAlign: "left" }}>Origem do imóvel*</h4>
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
                  placeholder="Selecione uma opção"
                />
              </div>
              <div className="main-page-btn ">
                <h4 style={{ textAlign: "left" }}>Imobiliária</h4>
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
                  placeholder="Selecione uma opção"
                />
              </div>
              <div className="main-page-btn ">
                <h4 style={{ textAlign: "left" }}>Corretor</h4>
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
                  placeholder="Selecione uma opção"
                />
              </div>
              <div className="main-page-btn ">
                <div style={{ padding: " 16px 0px" }}>
                  <Button
                    style={{ height: "48px" }}
                    block
                    className="btn-primary"
                    color="primary"
                    onClick={() =>
                      toast(<ToastSuccess />, {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                      })
                    }
                  >
                    Adicionar novo cliente
                  </Button>
                  <ToastContainer position="top-center" />
                </div>
              </div>
            </Row>
            <div className="btn-footer-fixed">
              <ScrollButton scrollStepInPx="50" delayInMs="15.66" />
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default NewClientForm;
