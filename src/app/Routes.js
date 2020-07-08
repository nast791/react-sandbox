import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Redirect to="/"/>
      </Switch>
    </Layout>
  );
};

export default Routes;