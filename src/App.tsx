import './App.css';
import Home from './components/Home';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Practice from './components/Practice';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Practice />} />
      </Routes>
    </AnimatePresence>
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
