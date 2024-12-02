import React from 'react';
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
    const openPopup = () => {
        const url = 'https://celebrated-platypus-1f540d.netlify.app/';
        const popupName = 'ExamplePopup';
        const popupFeatures = 'width=600,height=400';

        const newWindow = window.open(url, popupName, popupFeatures);

        if (newWindow) {
            newWindow.focus();
        } else {
            alert('팝업이 차단되었습니다. 브라우저 설정을 확인해 주세요.');
        }
    };

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
                    <button className='menu-item-go-practice-btn' onClick={openPopup}>연습하러가기 &gt;</button>
                </div>
            </div>
        </>
    );
};

export default MenuItem;
