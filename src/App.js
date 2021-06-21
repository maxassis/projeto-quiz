import CssBaseline from '@material-ui/core/CssBaseline'
import { Home } from './templates/Home/index'
import { Confirm } from './templates/Confirm/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Questions } from './templates/Questions.js'

function App() {
  return (
    <>
      <CssBaseline />
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
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
