import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Board from "./components/Boards/Board";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/:board" exact component={Board} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
