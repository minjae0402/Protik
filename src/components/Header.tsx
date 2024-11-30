import '../styles/Header.css';
import { FaInfoCircle, FaBook, FaPhone } from 'react-icons/fa';

const Header = () => {
    const handleButtonClick = () => {
        window.location.reload();
        window.scrollTo(0, 0);
    };
    return (
        <header className="menu-header">
            <div className="header-content">
                <button className="image-button" onClick={handleButtonClick}>
                    <img src="/ProtikAppLogo.png" alt="logo" />
                    <h1>티켓팅 연습장 Protik!</h1>
                </button>
                <nav className="menu">
                    <ul>
                        <li>
                            <FaInfoCircle className="menu-icon" />
                            소개
                        </li>
                        <li>
                            <FaBook className="menu-icon" />
                            사용법
                        </li>
                        <li>
                            <FaPhone className="menu-icon" />
                            문의
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
