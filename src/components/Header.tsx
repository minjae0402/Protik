import '../styles/Header.css';

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
                            소개
                        </li>
                        <li>
                            사용법
                        </li>
                        <li>
                            문의
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
