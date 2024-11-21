import { Landing,Home, Detail, Create} from './views/index';
import './App.css';
import {Route,useLocation} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import SearchedGames from './components/SearchedVideogames/SearchedGames';
// import Detail from './components/Detail/Detail';
import axios from 'axios'
// axios.defaults.baseURL = 'https://deploy-production-8255.up.railway.app/'
axios.defaults.baseURL = 'http://localhost:4000/'
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://5063-181-5-239-36.ngrok-free.app/'

function App() {
  const location = useLocation()
  return (
    <div className="App">
        {location.pathname !== '/' && <Navbar />}
        <Route exact path='/' component={Landing} />
        {/* <Route path='/videogames/:id' component={Detail}/> */}
        <Route path='/games' component={Home}/>
        <Route path='/create' component={Create}/>
        <Route path='/videogamesSearch' component={SearchedGames}/>
        <Route path='/detail/:id' component={Detail}  />
    </div>
  );
}

export default App;
