import React from "react";

//component imports
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";

//firebase imports
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//react + css
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./styles/App.scss";

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAr80svLYHBvWOdgWpXqu6Rzy4dxyCFeNA",
  authDomain: "travis-314c6.firebaseapp.com",
  databaseURL: "https://travis-314c6.firebaseio.com",
  projectId: "travis-314c6",
  storageBucket: "travis-314c6.appspot.com",
  messagingSenderId: "309313916898",
  appId: "1:309313916898:web:8ec0ac8732fac87ab6b3bb"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function App() {
  return (
    <Router>
      <Banner />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/:id" component={ProductPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
export { db };
