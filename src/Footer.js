import React from 'react';
import './footer.css';

const Footer = (props) => {
    return(
    <footer className="app-footer">
        <div className="footer-content">
            <ul>
                <li className="footer-elements">광고주 이용약관</li>
                <li className="footer-elements">개인정보 처리방침</li>
                <li className="footer-elements">커넥트원 키친 식단</li>
                <li className="footer-elements">네이버 채용 홈페이지</li>
                <li className="footer-elements">책임의 한계와 법적고지</li>
            </ul>
            <div className="footer-copyright">
                Made by wheejuni
            </div>
        </div>
    </footer>
    )
}

export default Footer;