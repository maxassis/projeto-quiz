import CssBaseline from '@material-ui/core/CssBaseline'
import {Home} from './templates/Home/index'
import {Confirm} from './templates/Confirm/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <CssBaseline/>
    <BrowserRouter>  

    <Switch> 
    
    <Route exact path='/'>
      <Home />
    </Route>

    <Route exact path='/confirm'>
      <Confirm />
    </Route>


      
      
      
      
      
      
    </Switch>
  
    </BrowserRouter>
    
    </>
  );
}

export default App;
