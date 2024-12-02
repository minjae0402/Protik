import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MenuItem.css';
import { FaLink } from 'react-icons/fa';

interface MenuItemProps {
    imageSrc: string;
    title: React.ReactNode;
    description: string;
    date: string;
    link: string;
    daysLeft: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ imageSrc, title, description, date, link, daysLeft }) => {
    const navigate = useNavigate();

    const handlePracticeClick = () => {
        navigate('/practice');
    };

    return (
        <>
            <div className="menu-item">
                <div className="menu-item-left">
                    <img src={imageSrc} alt={title as string} className="menu-item-image" />
                    <div className='menu-item-link-line'>
                        <FaLink className='menu-item-image-Icon' />
                        <a href={link} target="_blank" className="menu-item-link" rel="noreferrer">
                            공식 홈페이지
                        </a>
                    </div>
                </div>
                <div className="menu-item-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="menu-item-right">
                    <div className="menu-item-date">
                        {date}
                    </div>
                    <div className="menu-item-days-left">
                        {daysLeft}
                    </div>
                    <button className='menu-item-go-practice-btn' onClick={handlePracticeClick}>연습하러가기 &gt;</button>
                </div>
            </div>
            <hr />
        </>
    );
};

export default MenuItem;
