import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Product from "./components/productList/product";




/*const Home = React.lazy(() => import("./pages/Home/index"));*/

const PlaceListing = React.lazy(() => import("./pages/Places/PlaceListing/PlaceListing"));
const Eror404 = React.lazy(() => import("./pages/Eror404/Eror404"));

export default function Routes() {
  return (
    <Suspense fallback="loading...">
      <Switch>
        <Route path="/product" exact component={Product} />
        <Route path="/placelisting" exact component={PlaceListing}/>
        
        <Route path="*" component={Eror404}/>
      </Switch>
    </Suspense>
  );
}
