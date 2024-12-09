import { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';
import '../styles/StartPractice.css';

const StartPractice = () => {
    const [showPopup, setShowPopup] = useState(true);
    const [time, setTime] = useState<Date | null>(null);
    const [intervalId, setIntervalId] = useState<number | null>(null);
    const [remainingTime, setRemainingTime] = useState<{ minutes: string, seconds: string }>({ minutes: '00', seconds: '00' });
    const [queueNumber, setQueueNumber] = useState<number | null>(null);
    const [showQueuePopup, setShowQueuePopup] = useState(false);

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
                setTime(prevTime => {
                    const newTime = new Date((prevTime ? prevTime.getTime() : 0) + 1000);
                    const diff = (new Date().setHours(12, 0, 0, 0) - newTime.getTime()) / 1000;
                    const minutesLeft = Math.floor(diff / 60).toString().padStart(2, '0');
                    const secondsLeft = Math.floor(diff % 60).toString().padStart(2, '0');
                    setRemainingTime({
                        minutes: minutesLeft,
                        seconds: secondsLeft
                    });
                    return newTime;
                });
            }, 1000);
            setIntervalId(id);

            return () => {
                clearInterval(id);
            };
        }
    }, [time]);

    useEffect(() => {
        if (showQueuePopup && queueNumber !== null) {
            const interval = setInterval(() => {
                setQueueNumber(prevNumber => {
                    if (prevNumber && prevNumber > 1) {
                        const decrement = Math.floor(Math.random() * (10000 - 1000) + 1000);
                        const newNumber = Math.max(prevNumber - decrement, 1);
                        return newNumber;
                    } else if (prevNumber === 1) {
                        setTimeout(() => {
                            setShowQueuePopup(false);
                            openPopup();
                        }, 2000);
                        clearInterval(interval);
                    }
                    return prevNumber;
                });
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [showQueuePopup, queueNumber]);

    const startQueueProcess = () => {
        setShowQueuePopup(true);
        setQueueNumber(Math.floor(Math.random() * (50000 - 10000) + 10000));
    };

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
            {showQueuePopup && queueNumber !== null && (
                <div className="popup-overlay">
                    <div className="popup">
                        <div className="popup-content">
                            <h2>대기 번호</h2>
                            <h3>내 대기 순서 {queueNumber}번째</h3>
                        </div>
                    </div>
                </div>
            )}
            {time && (
                <div className="timer">
                    <FaRegClock className="timer-icon" />
                    <span>{formatTime(time).hours} 시 {formatTime(time).minutes} 분</span>
                </div>
            )}
            <div className='practice-container-s'>
                <div className='practice-container-line'>
                    <div className='practice-form-line'></div>
                    <div className='practice-form'>
                        {time && time.getHours() === 12 && time.getMinutes() === 0 ? (
                            <button onClick={startQueueProcess}>예매하기</button>
                        ) : (
                            <div className='practice-form-p'>20xx.xx.xx(X) 오전 12:00 티켓오픈! (남은시간 {remainingTime.minutes} 분 {remainingTime.seconds} 초)</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPractice;
