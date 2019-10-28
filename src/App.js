import React from "react";
import { Provider } from "react-redux";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Player />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
