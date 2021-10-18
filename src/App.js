import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Notification from './pages/Notification';
import Scan from './pages/Scan';
import Wallet from "./pages/Wallet";
import WalletPayConfirmation from './pages/Walletpayconfirmation';

import { Switch, Route } from 'react-router-dom';
import Account from './pages/Account';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:key" component={Search} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/Account" component={Account} />
        <Route exact path="/Wallet" component={Wallet}/>
        <Route exact path="/WalletConfirm" component={WalletPayConfirmation} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/scan" component={Scan} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
