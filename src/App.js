import { Route, Routes } from 'react-router';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Loan from './Components/Loans/Loan';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/loan-amortization-table' element={<Loan />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
