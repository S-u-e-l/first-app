import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
   <div>
    <Routes>
      <Route index element={<HomePage/>}></Route>
    </Routes>
   </div>
  );
}

export default App;