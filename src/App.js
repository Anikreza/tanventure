import './App.css';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './Comps/Home';
import Nav from './Comps/Nav';
import Blog from './Comps/Blog'
import Nagaland from './Articles/Nagaland'
import Coastline from './Articles/Coastline'
import Hillroute from './Articles/Hillroute'

function App() {
  return (
    <div className="App">
      <Router>

      <Nav/>

      <Switch>
          <Route path='/tanventure/' exact component={Home}/>
          <Route path='/about' />
          <Route path='/Blog' component={Blog}/>
          <Route path='/gallery'/>
          <Route path='/contact'  />
          <Route path='/nagaland' component={Nagaland}/>
          <Route path='/coastline' component={Coastline}/>
          <Route path='/hillroute' component={Hillroute}/>
          <Route path='/works' />
       </Switch> 

        </Router>
    </div>
  );
}

export default App;
