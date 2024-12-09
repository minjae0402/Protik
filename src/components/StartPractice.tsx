import { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';
import '../styles/StartPractice.css';

const StartPractice = () => {
    const openPopup = () => {
        const url = 'https://celebrated-platypus-1f540d.netlify.app/';
        const popupName = 'Popup';
        const popupFeatures = 'width=600,height=400';

        const newWindow = window.open(url, popupName, popupFeatures);

        if (newWindow) {
            newWindow.focus();
        } else {
            alert('팝업이 차단되었습니다. 브라우저 설정을 확인해 주세요.');
        }
    };

    const [showPopup, setShowPopup] = useState(true);
    const [time, setTime] = useState<Date | null>(null);
    const [intervalId, setIntervalId] = useState<number | null>(null);

    const handleClosePopup = () => {
        setShowPopup(false);
        setTime(new Date(new Date().setHours(11, 59, 50, 0)));
    };

    useEffect(() => {
        if (time) {
            if (intervalId) {
                clearInterval(intervalId);
            }

            const id = window.setInterval(() => {
                setTime(prevTime => new Date((prevTime ? prevTime.getTime() : 0) + 1000));
            }, 1000);
            setIntervalId(id);

            return () => {
                clearInterval(id);
            };
        }
    }, [time]);

    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return { hours, minutes };
    };

    return (
        <div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <div className="popup-content">
                            <h2>주의!</h2>
                            <p>시작하기 버튼을 눌르면 가상 타임이 시작됩니다!</p>
                            <p className='mini-p'>12시에 맞춰서 티켓팅에 성공하세요!!</p>
                            <p className='mini-p'>타이머는 11시 59분 50초 부터 시작합니다.</p>
                            <p className='mini-p'>(오른쪽 상단 확인)</p>
                        </div>
                        <button className="start-button" onClick={handleClosePopup}>
                            시작하기
                        </button>
                    </div>
                </div>
            )}
            {time && (
                <div className="timer">
                    <FaRegClock className="timer-icon" />
                    <span>{formatTime(time).hours} 시 {formatTime(time).minutes} 분</span>
                </div>
            )}
            <div className='practice-container'>
                <div className='practice-container-line'>
                    <div className='practice-form-line'></div>
                    <div className='practice-form'>
                        {time && time.getHours() === 12 && time.getMinutes() === 0 ? (
                            <button onClick={openPopup}>예매하기</button>
                        ) : (
                            <div className='practice-form-p'>20xx.xx.xx(X) 오전 12:00 티켓오픈! (남은시간 00 분 00 초)</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPractice;
