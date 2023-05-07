import { Route, Routes } from 'react-router';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import AmortizationTable from './Components/AmortizationTable/AmortizationTable';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/loan-amortization-table' element={<AmortizationTable />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
