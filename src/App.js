import './App.css';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './Comps/Home';
import Nav from './Comps/Nav';
import Nagaland from './Articles/Nagaland'
import Coastline from './Articles/Coastline'
import Hillroute from './Articles/Hillroute'
import North from './Articles/North';
import Offroad from './Articles/Offroad';
import Southern from './Articles/Southern';
import PmPage from './PM/PmPage';
import Backpacking from './Comps/Backpacking';
import Tingoyenda from './Articles/Tingoyenda';
import Religion from './Articles/Religion';
import Zain from './Articles/Zain';

function App() {
  return (
    <div className="App">
      <Router>

      <Nav/>

      <Switch>
          <Route path='/tanventure/' exact component={Home}/>
          <Route path='/about' />
          <Route path='/blog' component={Backpacking}/>
          <Route path='/pm' component={PmPage}/>
          <Route path='/gallery'/>
          <Route path='/contact'  />
          <Route path='/nagaland' component={Nagaland}/>
          <Route path='/coastline' component={Coastline}/>
          <Route path='/hillroute' component={Hillroute}/>
          <Route path='/northern' component={North}/>
          <Route path='/offroad' component={Offroad}/>
          <Route path='/southern' component={Southern}/>
          <Route path='/tingoyenda' component={Tingoyenda}/>
          <Route path='/religion' component={Religion}/>
          <Route path='/ourgirls' component={Zain}/>
          
       </Switch> 

        </Router>
    </div>
  );
}

export default App;
