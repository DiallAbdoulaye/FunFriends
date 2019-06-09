import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Button
} from "react-native";
import { SwitchNavigator } from "react-navigation";

import Loading from "./Loading";
import SignUp from "./SignUp";
import Login from "./Login";
import Main from "./Main";

import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDbVV9MbfVTr0F6Sxu83TY7z_ZG3yXa5gQ",
  authDomain: "funfriends-4ca79.firebaseapp.com",
  databaseURL: "https://funfriends-4ca79.firebaseio.com",
  projectId: "funfriends-4ca79",
  storageBucket: "funfriends-4ca79.appspot.com",
  messagingSenderId: "345491604896s",
  appId: "1:345491604896:web:6fe14e7cdb9e39ca"
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default SwitchNavigator(
  createSwitchNavigator(
    {
      Loading,
      SignUp,
      Login,
      Main
    },
    {
      initialRouteName: "Loading"
    }
  )
);
