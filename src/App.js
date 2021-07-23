import logo from './logo.svg';
import {Home} from './pages/Home'
import Singlejob from './pages/Singlejob'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route path="/jobs/:id">
           <Singlejob/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
