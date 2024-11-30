import React from 'react';
import '../styles/Menu.css';
import MenuItem from './MenuItem';
import { FaInfoCircle, FaBook, FaPhone, FaSearch } from 'react-icons/fa';

const Menu = () => {
    const handleButtonClick = () => {
        window.location.reload();
        window.scrollTo(0, 0);
    };

    return (
        <div className="menu-container">
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

            <div className="search-container">
                <FaSearch className='search-icon' />
                <input
                    type="text"
                    className="search-input"
                    placeholder="티켓팅 검색"
                />
            </div>

            <div className="menu-content">
                <MenuItem
                    imageSrc="/TestPost_001.png"
                    title='Ado WORLD TOUR 2025 "Hibana"'
                    description="Powered by Crunchyroll in Seoul"
                    date="2024-11-29"
                />
                <MenuItem
                    imageSrc="/TestPost_002.png"
                    title='BoyWithUke BURNOUT WORLD TOUR 2025'
                    description="보이위드우크(BoyWithUke) 첫 단독 내한공연"
                    date="2024-11-29"
                />
                <MenuItem
                    imageSrc="/TestPost_002.png"
                    title='Ado WORLD TOUR 2025 "Hibana"'
                    description="Powered by Crunchyroll in Seoul"
                    date="2024-11-29"
                />
                <MenuItem
                    imageSrc="/TestPost_002.png"
                    title='Ado WORLD TOUR 2025 "Hibana"'
                    description="Powered by Crunchyroll in Seoul"
                    date="2024-11-29"
                />
            </div>
        </div>
    );
};

export default Menu;
