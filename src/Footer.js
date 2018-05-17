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
                <li className="footer-elements">김준현 설렁탕 특으로 먹는다</li>
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