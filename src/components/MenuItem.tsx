import React from 'react';
import '../styles/MenuItem.css';

interface MenuItemProps {
    imageSrc: string;
    title: string;
    description: string;
    date: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ imageSrc, title, description, date }) => {
    return (
        <>
            <button className="menu-item">
                <img src={imageSrc} alt={title} className="menu-item-image" />
                <div className="menu-item-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="menu-item-date">
                    {date}
                </div>
            </button>
            <hr />
        </>
    );
};

export default MenuItem;
