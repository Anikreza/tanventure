import './App.css';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './Comps/Home';
import Nav from './Comps/Nav';
import Blog from './Comps/Blog'

function App() {
  return (
    <div className="App">
      <Router>

   

      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about'/>
          <Route path='/Blog' component={Blog}/>
          <Route path='/gallery' />
          <Route path='/contact'  />
          <Route path='/works' />
       </Switch> 

        </Router>
    </div>
  );
}

export default App;
