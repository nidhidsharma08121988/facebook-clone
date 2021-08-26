import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/layout/Home';
import FriendsPage from './components/layout/FriendsPage';
import WatchPage from './components/layout/WatchPage';
import Navbar from './components/layout/Navbar';
import MarketPlacePage from './components/layout/MarketPlacePage';
import GamingPage from './components/layout/GamingPage';
import ProfilePage from './components/layout/ProfilePage';

function App() {
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/friends' component={FriendsPage} />
          <Route exact path='/watch' component={WatchPage} />
          <Route exact path='/market-place' component={MarketPlacePage} />
          <Route exact path='/gaming' component={GamingPage} />
          <Route exact path='/profile' component={ProfilePage} />
        </Switch>
        <footer>
          <a href='https://pngtree.com/so/facebook'>
            facebook png from pngtree.com/
          </a>
        </footer>
      </Router>
    </>
  );
}

export default App;
