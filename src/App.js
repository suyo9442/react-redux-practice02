import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Subscriber from "./components/Subscriber";
import Display from "./components/Display";
import View from "./components/View";
import Comment from "./components/Comment";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Comment></Comment>
        <Subscriber></Subscriber>
        <View></View>
        <Display></Display>
      </div>
    </Provider>
  );
}

export default App;
