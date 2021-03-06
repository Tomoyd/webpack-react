import { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Router from "./router";
import StoreProvider from "./store";

const App = () => {
  const b = 1 + "";
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
