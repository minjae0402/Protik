import React from 'react';
import '../styles/Practice.css';

const Practice: React.FC = () => {
    return (
        <div className='practice-container'>
            <h2>튜토리얼 페이지</h2>
            <p>연습하기전 설명서 페이지 입니다! 한번 숙지하고 시작하세요!</p>
            <img src="/Tutorials_001.png" />
            <h4>1/12</h4>
            <button>다음</button>
        </div>
    );
}

export default Practice;
