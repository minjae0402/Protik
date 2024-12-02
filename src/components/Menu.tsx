import React, { useState, useEffect } from 'react';
import '../styles/Menu.css';
import MenuItem from './MenuItem';
import { FaSearch } from 'react-icons/fa';

interface MenuItemType {
    imageSrc: string;
    title: string;
    description: string;
    date: string;
    link: string;
    daysLeft: string;
}

const Menu: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<MenuItemType[]>([]);

    const menuItems: MenuItemType[] = [
        {
            imageSrc: "/TestPost_001.png",
            title: 'Ado WORLD TOUR 2025 "Hibanas"',
            description: "Powered by Crunchyroll in Seoul",
            date: "2024-11-29",
            link: "https://google.com",
            daysLeft: "D-1"
        },
        {
            imageSrc: "/TestPost_002.png",
            title: 'BoyWithUke BURNOUT WORLD TOUR 2025',
            description: "보이위드우크(BoyWithUke) 첫 단독 내한공연",
            date: "2024-11-29",
            link: "https://google.com",
            daysLeft: "D-20"
        },
        {
            imageSrc: "/TestPost_002.png",
            title: 'BoyWithUke BURNOUT WORLD TOUR 2025',
            description: "보이위드우크(BoyWithUke) 첫 단독 내한공연",
            date: "2024-11-29",
            link: "https://google.com",
            daysLeft: "D-20"
        }
    ];

    useEffect(() => {
        setFilteredItems(
            menuItems.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    const highlightText = (text: string, highlight: string) => {
        if (!highlight) return text;
        const regex = new RegExp(`(${highlight})`, 'gi');
        return text.split(regex).map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
        );
    };

    return (
        <>
            <div className="search-container">
                <FaSearch className='search-icon' />
                <input
                    type="text"
                    className="search-input"
                    placeholder="티켓팅 검색"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="menu-content">
                {filteredItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        imageSrc={item.imageSrc}
                        title={highlightText(item.title, searchTerm)}
                        description={item.description}
                        date={item.date}
                        link={item.link}
                        daysLeft={item.daysLeft}
                    />
                ))}
            </div>
        </>
    );
};

export default Menu;
