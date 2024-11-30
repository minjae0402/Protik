import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLinks}>
                    <a href="/terms">이용약관</a>
                    <a href="/privacy">개인정보 처리방침</a>
                    <a href="/contact">문의하기</a>
                    <a href="/contact">고객 센터</a>
                    <a href="/contact">모든 서비스</a>
                    <a href="/contact">소개</a>
                </div>
                <img
                    src="/Calibes.png"
                    alt="로고 이미지"
                    width={160}
                    height={40}
                    className={styles.lowlogo}
                />
                <div className={styles.bigline} />
                <div className={styles.footerInfo}>
                    <p>인천중산중학교 | 선린인터넷 고등학교</p>
                    <p>
                        Calibes 대표 강민재 | 인천시 중구 중산동 하늘별빛로 111 전화 :
                        010-3799-9079
                    </p>
                    <p>
                        E-mail : calibes.crew@gmail.com 사업자등록번호 : 576-19-01740호
                    </p>
                </div>
                <p className={styles.infop2}>
                    &copy; 2024 Calibes. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
