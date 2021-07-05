import { Home } from "./templates/Home/index";
import { Confirm } from "./templates/Confirm/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Questions } from "./templates/Questions.js";
import {Result} from "./templates/Result/index"
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
    <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/confirm">
            <Confirm />
          </Route>

          <Route exact path="/questions">
            <Questions />
          </Route>

          <Route exact path="/result">
            <Result />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
