import React from 'react';
import '../styles/Practice.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Practice: React.FC = () => {
    return (
        <div className='practice-container'>
            <h2>튜토리얼 페이지</h2>
            <img src="/Tutorials_001.png" />
            <p>연습하기전 설명서 페이지 입니다! 한번 숙지하고 시작하세요!</p>
            <div className='Bottom-page-container'>
                <button>
                    <FaArrowLeft />
                </button>
                <p>1/12</p>
                <button>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}

export default Practice;
