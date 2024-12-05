import React from 'react';
import './Footer.css'; 


const Footer = () => {
 
    return (
        <footer className="footer">
          <div className="footer-left">
            <div className="footer-logos">
              <img src="/img/STAILogo2.svg" alt="Logo 1" className="footer-logo" />
              <img src="/img/CSE.svg" alt="Logo 2" className="footer-logo" />
            </div>
            <div className="footer-socials">
              <div className='circle'>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/img/Instagram.svg" alt="Instagram" />
                </a>
              </div>
              <div className='circle'>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/img/LinkedIn.svg" alt="LinkedIn" />
                </a>
              </div>
              <div className='circle'>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/img/Twitter.svg" alt="X" />
                </a>
              </div>
              <div className='circle'>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/img/Youtubesvg.svg" alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
    
          <div className="footer-right">
            <div className="footer-column">
              <h3 className="footer-heading">AI Duel Event</h3>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#schedule">Event Schedule</a></li>
                <li><a href="#sponsors">Our Sponsors</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
    
            <div className="footer-column">
              <h3 className="footer-heading">Stay Up to Date</h3>
              <div className="footer-subscribe">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="subscribe-input" 
                />
                <button className="subscribe-button">
                  <img src="/img/letter.svg" alt="Subscribe" />
                </button>
              </div>
            </div>
          </div>
        </footer>
      );
    }

export default Footer;
