const Footer = () => {
    return (
        <footer>
            <div className="footer__bg-2">
                <div className="container">
                    <div className="footer__row-1">
                        <div>
                            <a className="plan-button">
                                <img src="/img/logo.svg" alt="fxci" />
                            </a>
                        </div>
                        <div className="footer__socials">
                            <a href="https://discord.gg/QbQsYY2EKs">
                                <img src="/img/footer-discord.svg" alt="" />
                            </a>
                            <a href="https://www.facebook.com/fxcicom">
                                <img src="/img/footer-facebook.svg" alt="" />
                            </a>
                            <a href="https://www.instagram.com/fxci_com/">
                                <img src="/img/footer-inst.svg" alt="" />
                            </a>
                            <a href="https://twitter.com/fxci_com">
                                <img src="/img/footer-tw.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="footer_all_inform">
                        All information provided by FXCI Challenge Ltd, registered at 483 Green Lanes, London, England, N13
                        4BS, Company No. 15068590, trading as FXCI ("we," "us," or "our"), is intended solely for general
                        informational and educational purposes. FXCI and its
                        affiliates (collectively, the "Company") do not offer or provide clients with access to real
                        accounts or actual funds under any circumstances, do not accept deposits, and operate exclusively
                        with simulated accounts. The Company operates
                        in compliance with FCA requirements and does not require licensing, as it does not provide access to
                        real money trading or financial advice. Any content on this website that relates to trading should
                        be interpreted as occurring strictly
                        on a simulated basis. FXCI does not assume any liability for losses or damages of any kind resulting
                        from the use of our website or reliance on the information provided. Your use of and reliance on the
                        information is entirely at your
                        own risk.
                    </div>
                    <div className="footer_bottom">
                        <div className="footer__menu">
                            <a href="./contacts/">Contacts</a>
                            <a href="./cookie-policy/">Cookie Policy</a>
                            <a href="./disclaimer/">Disclaimer</a>
                            <a href="./refund-policy/">Refund Policy</a>
                            <a href="./terms-and-conditions/">Terms and Conditions</a>
                        </div>
                        <div className="footer__copy">© 2025 FXCI • All rights reserved</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;