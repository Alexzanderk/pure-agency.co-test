import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes {...this.props} />
        </BrowserRouter>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
