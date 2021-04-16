import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Components/homepage";
import HeaderNav from "./Components/HeaderNav";
import "bootstrap/dist/css/bootstrap.min.css";
import ArrayVisual from "./Components/ArrayVisual/ArrayVisual";
import FizzBuzz from "./Components/FizzBuzz/FizzBuzz.jsx";
import SearchingVisual from "./Components/SearchingVisual/SearchingVisual.jsx";
import ProtectedRoute from "./auth/protected-route";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Components/Loading";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <HeaderNav></HeaderNav>
      <Route path="/" component={HomePage} exact />
      <Route path="/projects/sortingvis" component={ArrayVisual} />
      <Route path="/projects/fizzbuzz" component={FizzBuzz} />
      <Route path="/projects/searchingvis" component={SearchingVisual} />
      <ProtectedRoute path="/auth" component={<p>YOU DID IT</p>} />
    </Router>
  );
}

export default App;
