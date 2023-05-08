import { Route, Routes } from 'react-router';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Loan from './Components/Loans/Loan';
import LoanShare from './Components/LoanShare/LoanShare';
import Footer from './Components/Footer/Footer'; 

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/loan-amortization-table' element={<Loan />}></Route>
        <Route path='/loan-share' element={<LoanShare />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
