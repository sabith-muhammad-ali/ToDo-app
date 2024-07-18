import "./App.css";
import React from "react";
import TodoWrapper from "./components/TodoWrapper";
import { Toaster } from 'react-hot-toast';

function App(name) {
  return (
    <div className="App">
      <Toaster />
      <TodoWrapper />
    </div>
  );
}

export default App;
