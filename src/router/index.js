import { lazy } from "react";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: () => import("../pages/Home"),
    exact: true
  }
];

const Router = () => {
  return (
    <>
      {routes.map((r) => {
        return (
          <Route {...r} component={lazy(r.component)} key={r.path}></Route>
        );
      })}
    </>
  );
};

export default Router;
