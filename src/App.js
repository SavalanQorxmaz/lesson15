
import { Route, Routes } from "react-router-dom";
import {Header} from './components/Header';
import {Home} from './pages/Home';
import {Register} from './pages/Register';
import {About} from './pages/About';
import {Users} from './pages/Users'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/users' element = {<Users/>}/>
        <Route path = '/about' element = {<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
