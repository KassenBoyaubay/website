import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./AmazonApp.scss";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//              https://www.youtube.com/watch?v=sB2b3ZYMQgg
//              https://github.com/CleverProgrammers/react-challenge-amazon-clone/tree/master/src
//              https://material-ui.com/ru/components/material-icons/
//              https://console.firebase.google.com/u/1/project/app-f3501/settings/general/web:MGVhOWI1OTQtMWQxYy00NjJhLWI2NmMtY2Y0MzNiNTM5NzRi
//              react-flip-move
//              https://www.youtube.com/watch?v=B6ay3jAZN5o
//              at the end around  2:30:00 -> firebase
//              https://www.youtube.com/watch?v=sB2b3ZYMQgg
//              at the end around  3:30:00 -> firebase baze plan
//              npm run build -> firebase deploy
//              to check w/ back-end
//              firebase emulators:start
//              update a plan w/ blaze
//              firebase deploy --only functions
//              in axios put url from functions in firebse
//              (remove rewrites in firebase.json)
//              (firebse init -> hosting -> build -> y)
//              npm run build
//              firebase deploy --only hosting
//              or
//              npm run build && firebase deploy --only hosting

const promise = loadStripe(
  "pk_test_51HWcbIDbp2oirb7pCgZviBbJ0p6XJvJ6RwfyUSeCPKwmoQtNYeaxneRroJISkQcGZHSDCj9mcEyPZmJ1ziOTuQoT00NrLbnzvh"
);

const AmazonApp = () => {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="Am__app">
      <Switch>
        <Route path="/amazonApp/login">
          <Login />
        </Route>
        <Route path="/amazonApp/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/amazonApp/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/amazonApp/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/amazonApp">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default AmazonApp;
