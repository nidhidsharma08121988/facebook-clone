import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/layout/Home';
import FriendsPage from './components/layout/FriendsPage';
import WatchPage from './components/layout/WatchPage';
import Navbar from './components/layout/Navbar';
import MarketPlacePage from './components/layout/MarketPlacePage';
import GamingPage from './components/layout/GamingPage';
import ProfilePage from './components/layout/ProfilePage';
import store from './redux-store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <header>
            <Navbar />
          </header>
          <div className='routes-container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/friends' component={FriendsPage} />
              <Route exact path='/watch' component={WatchPage} />
              <Route exact path='/market-place' component={MarketPlacePage} />
              <Route exact path='/gaming' component={GamingPage} />
              <Route exact path='/profile' component={ProfilePage} />
            </Switch>
          </div>
          <footer>
            <a href='https://pngtree.com/so/facebook'>
              facebook png from pngtree.com/
            </a>
          </footer>
        </Router>
      </Provider>
    </>
  );
}

export default App;
