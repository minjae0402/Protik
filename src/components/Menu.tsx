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
    serviceImge: string;
    daysLeft: string;
}

const Menu: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<MenuItemType[]>([]);

    const menuItems: MenuItemType[] = [
        {
            imageSrc: "/TestPost_002.png",
            title: 'BoyWithUke BURNOUT WORLD TOUR 2025',
            description: "보이위드우크(BoyWithUke) 첫 단독 내한공연",
            date: "2024-11-29",
            link: "https://ticket.melon.com/performance/index.htm?prodId=210711",
            serviceImge: "/Melon_Logo.png",
            daysLeft: "D-day"
        },
        {
            imageSrc: "/TestPost_006.png",
            title: 'MGA LIVE in SEOUL, KOREA 2025',
            description: "",
            date: "2024-11-29",
            link: "https://ticket.melon.com/performance/index.htm?prodId=210767",
            serviceImge: "/Melon_Logo.png",
            daysLeft: "D-2"
        },
        {
            imageSrc: "/TestPost_001.png",
            title: 'Ado WORLD TOUR 2025 "Hibanas"',
            description: "Powered by Crunchyroll in Seoul",
            date: "2024-11-29",
            link: "https://google.com",
            serviceImge: "/Interpark_Logo.png",
            daysLeft: "D-4"
        },
        {
            imageSrc: "/TestPost_003.png",
            title: '2024 춘베리아 특급열차',
            description: "이번 열차는 춘베리아, 춘베리아행입니다.",
            date: "2024-11-29",
            link: "https://ticket.melon.com/performance/index.htm?prodId=210752",
            serviceImge: "/Melon_Logo.png",
            daysLeft: "D-7"
        },
        {
            imageSrc: "/TestPost_004.png",
            title: 'meiyo Live in Seoul',
            description: "뭘 해도 잘 되지 않아",
            date: "2024-11-29",
            link: "https://ticket.melon.com/performance/index.htm?prodId=210703",
            serviceImge: "/Melon_Logo.png",
            daysLeft: "D-8"
        },
        {
            imageSrc: "/TestPost_005.png",
            title: '음율 The 1st Concert 〈환상설화 (幻想說話) GRAND FINALE in Seoul〉',
            description: "",
            date: "2024-11-29",
            link: "https://ticket.melon.com/performance/index.htm?prodId=210643",
            serviceImge: "/Melon_Logo.png",
            daysLeft: "D-10"
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

            <div className="menu-buttons">
                <button className="menu-button">
                    <img src="/Melon_Logo.png" />
                    멜론
                </button>
                <button className="menu-button">
                    <img src="/Interpark_Logo.png" />
                    인터파크
                </button>
                <button className="menu-button">
                    <img src="/Yes24_Logo.png" />
                    Yes24
                </button>
            </div>

            <hr />

            <div className="menu-content">

                {filteredItems.map((item, index) => (
                    <>
                        <MenuItem
                            key={index}
                            imageSrc={item.imageSrc}
                            title={highlightText(item.title, searchTerm)}
                            description={item.description}
                            date={item.date}
                            link={item.link}
                            daysLeft={item.daysLeft}
                            serviceImge={item.serviceImge}
                        />

                        {
                            index != filteredItems.length - 1 && <hr />
                        }
                    </>
                ))}
            </div>
        </>
    );
};

export default Menu;
