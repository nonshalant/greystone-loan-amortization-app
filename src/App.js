import { Route, Routes } from 'react-router';
import './App.css';
import CreateUser from './Components/User/CreateUser';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/create-user' element={<CreateUser />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
