
import './App.css';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from  './pages/CreatePost';


function App() {

  return (
    <div className="App">
      
      <Router>
      <Link to="/CreatePost">CreatePost</Link>
      <Link to="/">Home</Link>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/CreatePost" exact Component={CreatePost} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
