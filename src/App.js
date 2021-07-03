import './App.scss';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Auth from './pages/auth';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <h1>Mini Project</h1>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <PrivateRoute path="/blog" component={Blog} />
        <PrivateRoute path="/contact" component={Contact} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
