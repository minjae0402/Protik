import React from 'react';
import '../styles/MenuItem.css';
import { useNavigate } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';

interface MenuItemProps {
    imageSrc: string;
    title: React.ReactNode;
    description: string;
    date: string;
    link: string;
    serviceImge: string;
    daysLeft: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ imageSrc, title, description, date, link, daysLeft, serviceImge }) => {
    const navigate = useNavigate();

    const handlePracticeClick = () => {
        navigate('/practice');
    }

    return (
        <>
            <div className="menu-item">
                <div className='menu-item-container'>
                    <div className="menu-item-left">
                        <img src={imageSrc} alt={title as string} className="menu-item-image" />
                        <a href={link} target="_blank" className="menu-item-link" rel="noreferrer">
                            <FaLink className='menu-item-image-Icon' />
                            공식 홈페이지
                        </a>
                    </div>
                    <div className="menu-item-text">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <img className='menu-item-service-img' src={serviceImge} />
                </div>
                <div className="menu-item-right">
                    <div>
                        <div className="menu-item-date">
                            {date}
                        </div>
                        <div className="menu-item-days-left">
                            {daysLeft}
                        </div>
                    </div>
                    <button className='menu-item-go-practice-btn' onClick={handlePracticeClick}>연습하러가기 &gt;</button>
                </div>
            </div>
        </>
    );
};

export default MenuItem;
