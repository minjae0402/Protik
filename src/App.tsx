import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className='menu-container'>
        <Header />
        <Menu />
      </div>
      <Footer />
    </>
  );
}

export default App;
