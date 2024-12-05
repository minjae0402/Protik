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
        "내용2",
        "내용3",
        "내용4",
        "내용5",
        "내용6",
        "내용7",
        "내용8",
        "내용9"
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
                    <p>이 튜토리얼을 통해 티켓팅에서의 주의사항과 꿀팁들을 공부하고 연습해보세요!</p>
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
