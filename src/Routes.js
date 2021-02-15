import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";




/*const Home = React.lazy(() => import("./pages/Home/index"));*/

const PlaceListing = React.lazy(() => import("./pages/Places/PlaceListing/PlaceListing"));

export default function Routes() {
  return (
    <Suspense fallback="loading...">
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/placelisting" exact component={PlaceListing}/>
      </Switch>
    </Suspense>
  );
}
