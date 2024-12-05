import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Practice from './components/Practice';
import StartPractice from './components/StartPractice';

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/StartPractice" element={<StartPractice />} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
