import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConnectioHabits from "./components/pages/ConnectionHabits"
import HomePage from "./components/pages/HomePage"
import FinancialHabits from "./components/pages/FinancialHabits"
import HealthyHabits from "./components/pages/HealthyHabits"
import MindsetHabits from "./components/pages/MindsetHabits"
import ProductivityHabits from "./components/pages/ProductivityHabits"

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/connection" element={<ConnectioHabits/>} />
        <Route path="/finance"  element={<FinancialHabits/>} />
        <Route path="/healthy"  element={<HealthyHabits/>} />
        <Route path="/mindset"  element={<MindsetHabits/>} />
        <Route path="/productivity"  element={<ProductivityHabits/>} />
      </Routes>
    </Router>
  );
}

export default App;
