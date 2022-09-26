import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/mainpage";
import io from "socket.io-client";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
let l = window.location.origin;
let loc =
  l === "http://localhost:3000"
    ? "http://localhost:800"
    : window.location.origin;
const socket = io(loc);

class App extends Component {
  componentWillMount() {
    this.setState({ number: Math.random() });
  }
  // componentWillUnmount(){
  //   this.done()
  // }
  done = () => {
    fetch(`/del/${this.state.number}`, { method: "DELETE" })
      .then((res) => res.text())
      .then((res) => alert(res))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <MainPage number={this.state.number} socket={socket}></MainPage>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
