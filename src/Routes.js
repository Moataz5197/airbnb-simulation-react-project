import React, { Suspense, useState } from "react";
import { Route, Switch } from "react-router-dom";
import GuardedRoute from "./GuardedRoutes";
import DashBoard from "./pages/Host/PlaceHosting/DashBoard/DashBoard";




/*const Home = React.lazy(() => import("./pages/Home/index"));*/

const PlaceListing = React.lazy(() => import("./pages/Places/PlaceListing/PlaceListing"));
const PlaceDetails = React.lazy(() => import("./pages/Places/PlaceDetails/PlaceDetails"));
const Eror404 = React.lazy(() => import("./pages/Eror404/Eror404"));
const Login = React.lazy(() => import("./pages/Authentication/Login/login"));
const AlreadyLogin = React.lazy(() => import("./pages/Authentication/Login/alreadyLogin"));
const SignUp = React.lazy(() => import("./pages/Authentication/Register/SignUp"));
const Register = React.lazy(() => import("./pages/Authentication/Register/Register"));
const Overview = React.lazy(()=>import("./pages/Host/PlaceHosting/PlaceHostingOverview/Overview"))
const HostingForm = React.lazy(()=>import("./pages/Host/PlaceHosting/PlaceHostingForm/Form"))



export default function Routes() {
  const [editMood,setEditMood]=useState(false)

  const convertToEdit = ()=>{
    setEditMood(true)
  }
  return (
    <Suspense fallback="loading...">
      <Switch>

        <Route path="/placelisting" exact component={PlaceListing}/>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/placedetails" exact component={PlaceDetails} />
        <Route path="/login" exact component={Login}/>
        <Route path="/alreadyLogin" exact component={AlreadyLogin}/>
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/Register" exact component={Register}/>
        <Route path="/placeHosting/overview" component={Overview}/>
        <Route path="/placeHosting/Hosting" component={HostingForm}/>
        <GuardedRoute path='/placeHosting/editPlace/:id' exact component={HostingForm} auth={editMood} />
        <Route path="/placeHosting/MyPlaces" render={() => <DashBoard setEdit={convertToEdit}/>} />


        <Route path="*" component={Eror404} />
      </Switch>
    </Suspense>
  );
}
