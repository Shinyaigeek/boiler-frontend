import * as React from "react";

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";
import { Layout } from "../components/Layout/Layout";

export const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Layout>
              <Login />
            </Layout>
          </Route>
          <Route path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
