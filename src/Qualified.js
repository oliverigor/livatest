import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import { Row, Col, Container } from "reactstrap";
import Data from "./data.svg";
import Moment from "./moment.svg";
import Reason from "./reason.svg";
import Pin from "./pin-heart.svg";
import Finance from "./financial.svg";
import Caracteristics from "./caracteristics.svg";

export default class Qualified extends Component {
  state = {
    user: ""
  };

  componentWillMount() {
    const parsed = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
    console.log(parsed);
  }
  chamaNois = () => {
    const params = {
      id: "45",
      title: "lucas",
      author: "guarabyra"
    };
    axios
      .post("https://my-json-server.typicode.com/typicode/demo/posts", params)
      .then(response => {
        console.log(response);
      });
  };
  pegaNois = () => {
    axios.get("http://localhost:3004/profile/").then(response => {
      console.log(response.data["1f5ff72fa68c30d2d3d374b258b645a4"]);
    });
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <Row>
                <Col sm="1">
                  <img src={Data} width={25} alt="data" />
                </Col>
                <Col>
                  <div style={{ width: "100%" }}>
                    <h3>Dados do Cliente</h3>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Nome:</b>
                      Igor
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>E-mail:</b>
                      everton.ferreira.edf@gmail.com
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Telefone:</b>
                      XXXXXXXXXXX
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Mídia de qualificação:</b>
                      Email
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Origem:</b>
                      Zap Imóveis
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Imóvel de Origem:</b>
                      BM1234
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm="1">
                  <img src={Reason} width={27} alt="data" />
                </Col>
                <Col>
                  <div style={{ width: "100%" }}>
                    <h3>Motivo do interesse</h3>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Procura por:</b> Informações sobre o imóvel
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Dia para visita:</b> Não há
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Turno para visita:</b> Não há
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Dúvida sobre o imóvel BM1234:</b> Formas de
                      financiamento
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Preferência para contato:</b> Whatsapp, Telefone e
                      E-mail
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm="1">
                  <img src={Caracteristics} width={27} alt="data" />
                </Col>
                <Col>
                  <div style={{ width: "100%" }}>
                    <h3>Características do imóvel</h3>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Tipo:</b> Casa
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Quartos:</b>3
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Vagas:</b> 1
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Suítes:</b>2
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Valor:</b> De R$ 500.000 a R$ 600.000
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm="1">
                  <img src={Pin} width={22} alt="data" />
                </Col>
                <Col>
                  <div style={{ width: "100%" }}>
                    <h3>Localização do imóvel</h3>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Bairro:</b>
                      Lorem, ipsum, dolor, sit, amet
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Requisitos para localização</b>: Estar próximo de
                      transporte público, mercado farmácia
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Requisitos para o imóvel:</b> Valor
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm="1">
                  <img src={Moment} width={29} alt="data" />
                </Col>
                <Col>
                  <div style={{ width: "100%" }}>
                    <h3>Momento</h3>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Momento de compra:</b> Já estou negociando um imóvel
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Tempo de busca:</b> Estou começando agora
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Tempo para comprar:</b> 12 meses
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Motivação:</b> Infraestrutura de condomínio melhor,
                      Sair do aluguel,Imóvel maior, Localização melhor -
                      trabalho, escola, vizinhança, etc...
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm="1">
                  <img src={Finance} width={25} alt="data" />
                </Col>
                <Col>
                  <div style={{ width: "100%" }}>
                    <h3>Perfil financeiro do cliente</h3>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Imóvel no negócio:</b> Não (no valor de R$)
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Financiamento:</b> Não
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      <b>Uso do FGTS:</b> Sim, no valor de R$X
                    </p>
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>
                      {" "}
                      <b>Renda familiar:</b> Entre R$ 3.001,00 e R$ 4.500,00
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <h1>Fala VEI</h1>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
