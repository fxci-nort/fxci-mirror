import { Link } from 'react-router-dom';
import logo from '@/assets/img/logo.svg';
import footerDiscord from '@/assets/img/footer-discord.svg';
import footerFacebook from '@/assets/img/footer-facebook.svg';
import footerInst from '@/assets/img/footer-inst.svg';
import footerTw from '@/assets/img/footer-tw.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer__bg-2">
        <div className="container">
          <div className="footer__row-1">
            <div>
              <a className="plan-button">
                <img src={logo} alt="fxci" />
              </a>
            </div>
            <div className="footer__socials">
              <a href="https://discord.gg/QbQsYY2EKs">
                <img src={footerDiscord} alt="" />
              </a>
              <a href="https://www.facebook.com/fxcicom">
                <img src={footerFacebook} alt="" />
              </a>
              <a href="https://www.instagram.com/fxci_com/">
                <img src={footerInst} alt="" />
              </a>
              <a href="https://twitter.com/fxci_com">
                <img src={footerTw} alt="" />
              </a>
            </div>
          </div>
          <div className="footer_all_inform">
            All information provided by FXCI Challenge Ltd, registered at 483 Green Lanes, London,
            England, N13 4BS, Company No. 15068590, trading as FXCI ("we," "us," or "our"), is
            intended solely for general informational and educational purposes. FXCI and its
            affiliates (collectively, the "Company") do not offer or provide clients with access to
            real accounts or actual funds under any circumstances, do not accept deposits, and
            operate exclusively with simulated accounts. The Company operates in compliance with FCA
            requirements and does not require licensing, as it does not provide access to real money
            trading or financial advice. Any content on this website that relates to trading should
            be interpreted as occurring strictly on a simulated basis. FXCI does not assume any
            liability for losses or damages of any kind resulting from the use of our website or
            reliance on the information provided. Your use of and reliance on the information is
            entirely at your own risk.
          </div>
          <div className="footer_bottom">
            <div className="footer__menu">
              <Link to="/contacts/">Contacts</Link>
              <Link to="/cookie-policy/">Cookie Policy</Link>
              <Link to="/disclaimer/">Disclaimer</Link>
              <Link to="/refund-policy/">Refund Policy</Link>
              <Link to="/terms-and-conditions/">Terms and Conditions</Link>
            </div>
            <div className="footer__copy">
              © {new Date().getFullYear()} FXCI • All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
