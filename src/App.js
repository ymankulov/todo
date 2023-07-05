import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <ToDo/> }/>
        <Route path="/todo" element={ <ToDo/> }/>
        <Route path="/weather" element={ <Weather/> }/>
      </Routes>
    </div>
  );
}

export default App;
