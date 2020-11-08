import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
function App() {
  return (
    <div className="App">
      <h1>Clone YouTube</h1>
      {<Header />}
      {<Sidebar />}
      {<RecommendedVideos />}
    </div>
  );
}

export default App;
