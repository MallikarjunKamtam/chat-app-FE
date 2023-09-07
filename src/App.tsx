import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/dashboard";

function App() {
  const [id, setId] = useLocalStorage("id");

  return (
    <div className="App bg-[#333] h-screen text-white font-xs">
      {id ? <Dashboard id={id} /> : <LoginForm setId={setId} />}
    </div>
  );
}

export default App;
