import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Subscriber from "./components/Subscriber";
import Display from "./components/Display";
import View from "./components/View";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscriber></Subscriber>
        <Display></Display>
        <View></View>
      </div>
    </Provider>
  );
}

export default App;
