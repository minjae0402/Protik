import React from 'react';
import '../styles/Menu.css';
import MenuItem from './MenuItem';
import { FaSearch } from 'react-icons/fa';

const Menu = () => {

    return (
        <>
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
        </>
    );
};

export default Menu;
