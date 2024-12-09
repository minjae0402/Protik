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
    const totalPages = 6;

    const pageDescriptions = [
        "",
        "",
        "원활한 티켓팅을 위해 접속은 크롬으로!",
        "예매창이 안 뜰 수 있기에 설정에서 팝업 해체하기!",
        "로그인창이 뜨지 않도록 미리 로그인 확인하기!",
        "참사를 막기 위해 키보드 한/영 확인!!",
        "오류를 배제하기 위해 결제는 꼭꼭 무통장으로!",
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
                    <h3>잠깐!! 시작하기 전에</h3>
                    <p>꼭 알아두셔야 할 팁들을 알려줄게요!</p>
                </div>
            ) : (
                <img src={`/Tutorials/Tutorials_00${page.toString().padStart(0, '0')}.png`} alt={`Tutorial ${page}`} />
            )}
            {page !== 1 && <h4>{pageDescriptions[page]}</h4>}
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
