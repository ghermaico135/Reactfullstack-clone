
import './App.css';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from  './pages/CreatePost';
import Post from './pages/Post'
import Registeration from './pages/Registeration'
import Login from './pages/Login'


function App() {

  return (
    <div className="App">
      
      <Router>
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/CreatePost">CreatePost</Link>
            <Link to="/Registeration">Registeration</Link>
            <Link to="/Login">Login</Link>
        </div>
   
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/CreatePost" exact Component={CreatePost} />
          <Route path="/post/:id" exact Component={Post} />
          <Route path="/Registeration" exact Component={Registeration} />
          <Route path="/Login" exact Component={Login} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
