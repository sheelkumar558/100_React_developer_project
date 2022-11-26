//import logo from "./logo.svg";
import "./App.css";
//import { Country } from "./Pages/Country";
import { AllRoutes } from "./component/AllRoutes";
import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme(!theme);
  }
  return (
    <div className={theme ? "light" : "dark"}>
      <button
        style={{ fontSize: "xx-larger" }}
        onClick={changeTheme}
        className={theme ? "light" : "dark"}
      >
        {theme ? "🌙 " : " ☀"}
      </button>
      <AllRoutes />
    </div>
  );
}

export default App;
