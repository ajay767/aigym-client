import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Notification from './pages/Notification';
import Scan from './pages/Scan';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:key" component={Search} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/scan" component={Scan} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
