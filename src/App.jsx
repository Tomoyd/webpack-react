import { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Router from "./router";
import StoreProvider from "./store";
import React from "react";
const App = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <StoreProvider>
          <Switch>
            <Router></Router>
          </Switch>
        </StoreProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
