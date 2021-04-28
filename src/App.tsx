
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { DetailsPage } from "./components/DetailsPage";
import MainPage from "./components/MainPage";


function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <Redirect to="/beers"/>
          </Route>
          <Route path="/beers" exact>
            <MainPage />
          </Route>
          <Route path="/beers/:id" exact>
            <DetailsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;