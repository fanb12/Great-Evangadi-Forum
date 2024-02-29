import axios from "./axiosConfig";
import "./App.css";
import RouterComp from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterComp />
      </BrowserRouter>
    </>
  );
}

export default App;
