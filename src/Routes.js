import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";




/*const Home = React.lazy(() => import("./pages/Home/index"));*/

const PlaceListing = React.lazy(() => import("./pages/Places/PlaceListing/PlaceListing"));
const PlaceDetails = React.lazy(() => import("./pages/Places/PlaceDetails/PlaceDetails"));
const Eror404 = React.lazy(() => import("./pages/Eror404/Eror404"));

export default function Routes() {
  return (
    <Suspense fallback="loading...">
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/placelisting" exact component={PlaceListing} />
        <Route path="/placedetails" exact component={PlaceDetails} />
        <Route path="*" component={Eror404} />
      </Switch>
    </Suspense>
  );
}
