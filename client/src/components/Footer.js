import React from 'react';
import '../styles/component_style/footer.css';
import instagram from '../styles/images/instagram.png';
import facebook from '../styles/images/facebook.png';
import linkedIn from '../styles/images/linkedln.png';
import pinterest from '../styles/images/pinterest.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-description'>
                <div className='footer-about'>
                    <h4 className='footer-descTitle'>Abouts us</h4>
                    <p>Careers</p>
                    <p>Corporate Soles</p>
                    <p>Where to Buy</p>
                </div>
                <div className='footer-support'>
                    <h4 className='footer-descTitle'>Contacts</h4>
                    <p>Returns</p>
                    <p>Warranty</p>
                    <p>Product Registration</p>
                    <p>Help</p>
                </div>
                <div className='footer-legal'>
                    <h4 className='footer-descTitle'>Privacy</h4>
                    <p>Terms</p>
                    <p>Patents</p>
                </div>
                <div className='footer-other'>
                    <h4 className='footer-descTitle'>Other</h4>
                    <p>Account</p>
                    <p>Program</p>
                </div>
            </div>
            <div className='footer-media'>
                <div className='footer-social-networks'>
                    <a className='footer-social-unit' href='https://www.facebook.com'>
                        <div><img src={facebook} alt='facebook'/></div>
                    </a>
                    <a className='footer-social-unit' href='https://www.instagram.com'>
                        <div><img src={instagram} alt='instagram'/></div>
                    </a>
                    <a className='footer-social-unit' href='https://www.LinkedIn.com'>
                        <div><img src={linkedIn} alt='LinkedIn'/></div>
                    </a>
                    <a href='https://www.Pinterest.com'>
                        <div><img src={pinterest} alt='Pinterest'/></div>
                    </a>
                </div>
                <div className='footer-info'>
                    <p className='footer-rights'> 2022 All Rights Reserved</p>
                    <p className='footer-rights'> project for my portfolio</p>
                </div>
            </div>

        </footer>

    );
};

export default Footer;