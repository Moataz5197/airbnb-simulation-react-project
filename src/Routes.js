import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/nav";
import Product from "./components/productList/product";




const Home = React.lazy(() => import("./pages/Home/index"));
const Profile = React.lazy(() => import("./pages/Profile/index"));

const PlaceListing = React.lazy(() => import("./pages/Places/PlaceListing/PlaceListing"));
const PlaceDetails = React.lazy(() => import("./pages/Places/PlaceDetails/PlaceDetails"));
const ConfirmReservation = React.lazy(() => import("./components/placeDetails/confirmReservation"));

const Eror404 = React.lazy(() => import("./pages/Eror404/Eror404"));
const Login = React.lazy(() => import("./pages/Authentication/Login/login"));
const AlreadyLogin = React.lazy(() => import("./pages/Authentication/Login/alreadyLogin"));
const SignUp = React.lazy(() => import("./pages/Authentication/Register/SignUp"));
const Register = React.lazy(() => import("./pages/Authentication/Register/Register"));
const Overview = React.lazy(()=>import("./pages/Host/PlaceHosting/PlaceHostingOverview/Overview"))
const HostingForm = React.lazy(()=>import("./pages/Host/PlaceHosting/PlaceHostingForm/Form"))


export default function Routes() {
  return (
    <Suspense fallback="loading...">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact component={Product} />
        <Route path="/placelisting" exact component={PlaceListing}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/placedetails" exact component={PlaceDetails} />
        <Route path="/placedetails/confirm/reservation" exact component={ConfirmReservation} />
        <Route path="/x" component={Nav} />
        <Route path="/login" exact component={Login}/>
        <Route path="/alreadyLogin" exact component={AlreadyLogin}/>
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/Register" exact component={Register}/>
        <Route path="/placeHosting/overview" component={Overview}/>
        <Route path="/placeHosting/Hosting" component={HostingForm}/>
        <Route path="*" component={Eror404} />
        
      </Switch>
    </Suspense>
  );
}
