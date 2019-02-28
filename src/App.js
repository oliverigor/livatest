import React, { Component } from "react";
import Liva from "./logo-white.svg";
import "./App.css";
import "./bootstrap-overrides.css";
import {
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  Collapse,
  Card,
  CardBody,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import Arrow from "./arrow.svg";
import ArrowUp from "./arrow-up-new.svg";
import Car from "./car.svg";
import Bath from "./icon-banheiro.svg";
import Ruler from "./ruler.svg";
import Bed from "./bedroom.svg";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="App-header">
    <div className="header">
      <Link to="/">
        <img alt="arrow1223" src={Liva} style={{ height: "40px" }} />
      </Link>
      <h1>Clientela</h1>
      <a style={{ marginTop: "10px" }} href="www.liva.vc">
        Sair
      </a>
    </div>
  </header>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleData = this.toggleData.bind(this);
    this.toggleSrc = this.toggleSrc.bind(this);
    this.toggleHist = this.toggleHist.bind(this);
    this.toggleAtt = this.toggleAtt.bind(this);
    this.state = {
      collapseData: false,
      collapseSrc: false,
      collapseHist: false,
      collapseAtt: false,
      windowWidth: "",
      text: "Falea vei beleza"
    };
  }

  toggleData() {
    this.setState({ collapseData: !this.state.collapseData });
  }
  toggleSrc() {
    this.setState({ collapseSrc: !this.state.collapseSrc });
  }

  toggleHist() {
    this.setState({ collapseHist: !this.state.collapseHist });
  }
  toggleAtt() {
    this.setState({ collapseAtt: !this.state.collapseAtt });
  }

  componentWillMount() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    const windowTable = this.state.windowWidth;
    return (
      <div className="App">
        <Header />
        <div className="div-back-link">
          <img
            alt="arrow"
            style={{
              height: "6px",
              transform: "rotate(90deg)",
              margin: "7px 7px 7px 0px"
            }}
            src={Arrow}
          />
          <a className="back-link">Lista de Clientes</a>
        </div>

        <div
          style={{
            marginLeft: "16px",
            marginRight: "16px"
          }}
        >
          <Container>
            <Row>
              <h2 style={{ margin: "24px 0px", textAlign: "left" }}>
                user.name
              </h2>
            </Row>
            <Row>
              <Col xs="6" sm="4">
                <div className="card-info">
                  <h2 style={{ color: "#4687E8", paddingTop: "16px" }}>2</h2>
                  <p style={{ width: "100%" }}>Recomendações recebidas</p>
                </div>
              </Col>
              <Col xs="6" sm="4">
                <div className="card-info">
                  <h2 style={{ color: "#4687E8", paddingTop: "16px" }}>4</h2>
                  <p style={{ width: "100%" }}>Imóveis no feed</p>
                </div>
              </Col>
              <Col sm="4">
                {" "}
                <div className="main-page-src">
                  <h3 style={{ paddingBottom: "16px" }}>
                    Envie um novo imóvel
                  </h3>
                  <p style={{ paddingBottom: "10px" }}>
                    Escreva um codigo de imovel
                  </p>
                  <InputGroup>
                    <Input className="general-input" placeholder="BM7754" />
                    <InputGroupAddon addonType="append">
                      <Button className="btn-primary btn-send" color="primary">
                        Enviar Agora
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="main-page-btn">
            <button className="btn-collapse" onClick={this.toggleData}>
              Dados do cliente
              <img alt="arrow2" className="arrow-animate" src={Arrow} />
            </button>
            <Collapse isOpen={this.state.collapseData}>
              <Card>
                <CardBody style={{ textAlign: "left" }}>
                  {windowTable < 800 ? (
                    <Table borderless responsive style={{ textAlign: "left" }}>
                      <tbody>
                        <tr>
                          <th>Email</th>
                          <td>user.email</td>
                        </tr>
                        <tr>
                          <th>Telefone</th>
                          <td>user.phone</td>
                        </tr>
                        <tr>
                          <th>Última Entrega</th>
                          <td />
                        </tr>
                        <tr>
                          <th>Usuário Desde</th>
                          <td> </td>
                        </tr>
                        <tr>
                          <th>Último Login</th>
                          <td />
                        </tr>
                        <tr>
                          <th>Último Acesso</th>
                          <td />
                        </tr>
                        <tr>
                          <th>Qtd. de Sessões</th>
                          <td />
                        </tr>
                        <tr>
                          <th>Qtd. de Logins</th>
                          <td />
                        </tr>
                      </tbody>
                    </Table>
                  ) : (
                    <Table borderless responsive>
                      <tbody>
                        <tr>
                          <th>Email</th>
                          <th>Telefone</th>
                          <th>Última Entrega</th>
                          <th>Usuário Desde</th>
                          <th>Último Login</th>
                          <th>Último Acesso</th>
                          <th>Qtd. de Sessões</th>
                          <th>Qtd. de Logins</th>
                        </tr>
                        <tr>
                          <td />

                          <td />

                          <td />

                          <td> </td>

                          <td />

                          <td />
                          <td />
                          <td />
                        </tr>
                      </tbody>
                    </Table>
                  )}
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className="main-page-btn">
            <button className="btn-collapse" onClick={this.toggleSrc}>
              O que o cliente procura
              <img alt="arrow3" className="arrow-animate" src={Arrow} />
            </button>
            <Collapse isOpen={this.state.collapseSrc}>
              <Card>
                <div className="table-info">
                  <ClientTableProfile />
                </div>
                <hr />
                <div style={{ padding: "9px 16px", textAlign: "left" }}>
                  <h3>Valor de Busca</h3>

                  <p />
                </div>
                <hr />
                <div style={{ padding: "9px 16px", textAlign: "left" }}>
                  <h3>Bairros</h3>
                  <p />
                </div>
                <hr />
                <div style={{ padding: "9px 16px", textAlign: "left" }}>
                  <Button
                    style={{ height: "40px" }}
                    block
                    className="btn-primary"
                    color="primary"
                  >
                    Editar
                  </Button>
                </div>
              </Card>
            </Collapse>
            <div className="main-page-btn">
              <button className="btn-collapse" onClick={this.toggleHist}>
                Histórico de atendimento
                <img alt="arrow23" className="arrow-animate" src={Arrow} />
              </button>
            </div>
            <Collapse isOpen={this.state.collapseHist}>
              <Card>
                <div style={{ padding: "9px 16px", textAlign: "left" }}>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    value={this.state.text}
                  />
                </div>
                <hr />
                <div style={{ padding: " 16px", textAlign: "left" }}>
                  <Button
                    style={{ height: "40px" }}
                    block
                    className="btn-primary"
                    color="primary"
                  >
                    Editar
                  </Button>
                </div>
              </Card>
            </Collapse>
            <div className="main-page-btn">
              <button className="btn-collapse" onClick={this.toggleAtt}>
                Anotações
                <img alt="arrow123" className="arrow-animate" src={Arrow} />
              </button>
            </div>
            <Collapse isOpen={this.state.collapseAtt}>
              <Card>
                <div style={{ padding: "16px", textAlign: "left" }}>
                  <p>
                    O cliente aceita qualquer coisa menos carpete por causa da
                    rinite.
                  </p>
                </div>
                <hr />
                <div style={{ padding: " 16px", textAlign: "left" }}>
                  <Button
                    style={{ height: "40px" }}
                    block
                    className="btn-primary"
                    color="primary"
                  >
                    Editar
                  </Button>
                </div>
              </Card>
            </Collapse>
          </div>
        </div>
        <div
          style={{
            marginLeft: "16px",
            marginRight: "16px"
          }}
        >
          <div className="main-page-btn">
            <h2 style={{ padding: "16px 0px", textAlign: "left" }}>
              Recomendações de imóveis enviadas para o feed do cliente
            </h2>
            <Link to="/newcard">
              <button className="btn-collapse">
                Imóveis enviados pelo corretor (23)
                <img alt="arrow16" className="arrow-rec" src={Arrow} />
              </button>
            </Link>
          </div>
          <div className="main-page-btn">
            <button className="btn-collapse">
              Imóveis enviados pela Liva (49)
              <img alt="arrow09" className="arrow-rec" src={Arrow} />
            </button>
          </div>
          <div className="main-page-btn">
            <Link to="/new_client_form">
              <button className="btn-collapse">
                Novo Cliente !!!!!!!!!!!!
                <img alt="arrow" className="arrow-rec" src={Arrow} />
              </button>
            </Link>
          </div>
        </div>
        <div className="btn-footer-fixed">
          <ScrollButton scrollStepInPx="50" delayInMs="15.66" />
        </div>
      </div>
    );
  }
}

export default App;

export class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <div
        className="btn-footer-fixed"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <img alt="arrow111" src={ArrowUp} />
        <p>Voltar ao topo</p>
      </div>
    );
  }
}

export const ClientTableProfile = () => (
  <div className="table-info-detail">
    <Table borderless>
      <tbody>
        <tr>
          <td>
            <img
              alt="arrow2223231"
              style={{
                height: "32px"
              }}
              src={Bed}
            />
          </td>
          <td>
            <img
              alt="arrow988989"
              style={{
                height: "32px"
              }}
              src={Bath}
            />
          </td>
          <td>
            <img
              alt="arrow2dsad"
              style={{
                height: "32px"
              }}
              src={Car}
            />
          </td>
          <td>
            <img
              alt="arrow2d"
              style={{
                height: "32px"
              }}
              src={Ruler}
            />
          </td>
        </tr>
        <tr>
          <th>Quartos</th>
          <th>Suítes</th>
          <th>Vagas</th>
          <th>Área</th>
        </tr>
        <tr>
          <td>
            mín.
            <span
              style={{
                fontWeight: "bold",
                lineHeight: "normal",
                fontSize: "24px"
              }}
            >
              {" "}
            </span>
          </td>
          <td>
            mín.{" "}
            <span
              style={{
                fontWeight: "bold",
                lineHeight: "normal",
                fontSize: "24px"
              }}
            >
              {" "}
            </span>
          </td>
          <td>
            mín.{" "}
            <span
              style={{
                fontWeight: "bold",
                lineHeight: "normal",
                fontSize: "24px"
              }}
            >
              {" "}
            </span>
          </td>
          <td>
            mín.{" "}
            <span
              style={{
                fontWeight: "bold",
                lineHeight: "normal",
                fontSize: "24px"
              }}
            >
              {" "}
              m²
            </span>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);
