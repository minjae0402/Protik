import '../styles/Home.css';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {

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

export default Home;
