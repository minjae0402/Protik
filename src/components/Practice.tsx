import React, { useState } from 'react';
import '../styles/Practice.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Practice: React.FC = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/StartPractice');
    }
    const handleExitClick = () => {
        navigate('/')
    }
    const [page, setPage] = useState(1);
    const totalPages = 9;

    const pageDescriptions = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className='practice-container'>
            <h2>튜토리얼</h2>
            {page === 1 ? (
                <div className='intro-content'>
                    <h3>시작하기 전에</h3>
                    <p>이 튜토리얼은 당신이 이 애플리케이션을 사용하는 데 도움이 될 것입니다. 각 페이지를 주의 깊게 읽고, 모든 단계를 따라 하세요. 준비가 되면 다음 페이지로 이동하세요.</p>
                </div>
            ) : (
                <img src={`/Tutorials/Tutorials_00${page.toString().padStart(0, '0')}.png`} alt={`Tutorial ${page}`} />
            )}
            {page !== 1 && <p>{pageDescriptions[page]}</p>}
            <div className='Bottom-container'>
                <button onClick={handleExitClick}>나가기</button>
                <div className='Bottom-page-container'>
                    <button onClick={handlePrevPage} disabled={page === 1}>
                        <FaArrowLeft />
                    </button>
                    <p>{page}/{totalPages}</p>
                    <button onClick={handleNextPage} disabled={page === totalPages}>
                        <FaArrowRight />
                    </button>
                </div>
                {page === totalPages ? (
                    <button onClick={handleStartClick}>시작하기</button>
                ) : (
                    <button onClick={handleStartClick}>바로시작</button>
                )}
            </div>
        </div>
    );
}

export default Practice;
