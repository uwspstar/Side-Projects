import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import SearchPage from './SearchPage'
import RecommendedVideos from './RecommendedVideos'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Router path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Router>
          <Router path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
