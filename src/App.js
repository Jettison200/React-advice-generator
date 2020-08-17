import React, { Component } from "react";
import "./App.scss";
import Axios from "axios";

class App extends Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }
  randomeHandler = () => {
    let num = Math.floor(Math.random() * (217 - 1 + 1)) + 1;
    return num;
  };

  fetchAdvice = () => {
    Axios.get("https://api.adviceslip.com/advice/" + this.randomeHandler())
      .then((response) => {
        const data = JSON.parse(response.data + "}");
        const { advice } = data.slip;
        console.log(advice);
        this.setState({
          advice,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button onClick={this.fetchAdvice}>
            <span>More Advice</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
