import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import dashboard from "./components/navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Route path='/' component={dashboard} />
      <div className="main">
        {/* <h2 className="main-header">updte edit crud react</h2> */}
        <Route exact path='/create' component={Create} />
        <Route exact path='/' component={Read} />
        <Route exact path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;