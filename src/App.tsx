import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./Pages";
import HeaderNav from "./Components/HeaderNav";
import "bootstrap/dist/css/bootstrap.min.css";
import ArrayVisual from "./Components/ArrayVisual/ArrayVisual";
import FizzBuzz from "./Components/FizzBuzz/FizzBuzz.jsx";
import SearchingVisual from "./Components/SearchingVisual/SearchingVisual.jsx";

function App() {
  return (
    <Router>
      <HeaderNav></HeaderNav>
      <Route path="/" component={HomePage} exact />
      <Route path="/projects/sortingvis" component={ArrayVisual} />
      <Route path="/projects/fizzbuzz" component={FizzBuzz} />
      <Route path="/projects/searchingvis" component={SearchingVisual} />
    </Router>
  );
}

export default App;
