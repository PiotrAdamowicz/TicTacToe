import React, { Component } from "react";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Status</header>
        <aside className="nav-stat-container">
          <nav className="navigation">Guziczki</nav>
          <section className="stats">Cyferki</section>
        </aside>
        <div className="fieldes">
          <div className="field" />
          <div className="field" />
          <div className="field" />
          <div className="field" />
          <div className="field" />
          <div className="field" />
          <div className="field" />
          <div className="field" />
          <div className="field" />
        </div>
      </div>
    );
  }
}

export default App;
