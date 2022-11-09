import { Route, Switch } from 'react-router-dom';
import './App.css';
//import {Router} from "react-router-dom";
import Home from "./components/Home.jsx";
import LandingPage from "./components/LandingPage.jsx"
import Create from "./components/Create.jsx"
import Detalles from "./components/Detail.jsx"
import { Link } from 'react-router-dom';
import LOGO from "../../client/src/components/Assets/GU.png";
import { Carousel } from './components/Carusel';
import Nav from './components/Nav';

function App() {
  return (<>
  <Nav/>
   <Carousel/>
    <div className="App">
      <div>
        <div className='Marcas'>
      <Link to="/home">
        <img className="logo" src={LOGO} alt="logo" max-height="30%"></img>
        </Link>
        <p className='marca'>GAMES UNIVERSE</p>
        </div>
      <Switch>
        <Route exact path="/Home/create" component={Create}/>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Home/:id" component={Detalles}/>
        <Route exact path="/" component={LandingPage}/>
      </Switch>
      </div>
    </div>
  </>
    
  );
}

export default App;
