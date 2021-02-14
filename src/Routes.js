import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// import Home from "./pages/Home";

/*
const Home = React.lazy(() => import("./pages/Home"));

*/

export default function Routes() {
  return (
    <Suspense fallback="loading">
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        
      </Switch>
    </Suspense>
  );
}
