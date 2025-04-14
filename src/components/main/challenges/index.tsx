// First component: Challenges
const Challenges = () => {
    return (
        <section id="challenges">
            <div className="container mb-container-scroll">
                <div className="section-label">START A CHALLENGE</div>
                <h2 className="section-title">FXCI Challenges</h2>
                <div className="challenges-list scroll-wrap">
                    <div className="challenges__card-1 challenges__swing">
                        <div className="challenges__card-1-most-popular">MOST POPULAR</div>
                        <div className="challenges__card-1-mask">
                            <div className="challenges__card-1-logo">
                                <img src="/img/challenges/card-logo-swing.svg" alt="" />
                            </div>
                            <div className="challenges__card-1-title">Swing</div>
                            <div className="challenges__card-1-desc">The most popular package amongst FXCI traders</div>
                            <div className="challenges__card-1-border"></div>
                            <div className="challenges__card-1-details">
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> Up to 99% Profit Split
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> Weekend holding allowed
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> No Commissions
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> No Time Limit
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> News Trading Allowed
                                </div>
                            </div>
                            <a data-target="#plans" data-plan="swing" className="challenges__card-1-btn scroll-to" href="#">
                                Start Challenge <img src="/img/arrow-right.svg" alt="fxci" />
                            </a>
                        </div>
                    </div>
                    <div className="challenges__card-1 challenges__intraday">
                        <div className="challenges__card-1-mask">
                            <div className="challenges__card-1-logo">
                                <img src="/img/challenges/card-logo-intraday.svg" alt="" />
                            </div>
                            <div className="challenges__card-1-title">Intraday</div>
                            <div className="challenges__card-1-desc">The most affordable package for new and upcoming traders</div>
                            <div className="challenges__card-1-border"></div>
                            <div className="challenges__card-1-details">
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> Up to 99% Profit Split
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> Super Affordable
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> Up to 10% Maximum Loss Limit
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> Lowest Profit Target
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> News Trading Allowed
                                </div>
                            </div>
                            <a data-target="#plans" data-plan="intraday" className="challenges__card-1-btn scroll-to" href="#">
                                Start Challenge <img src="/img/arrow-right.svg" alt="fxci" />
                            </a>
                        </div>
                    </div>
                    <div className="challenges__card-1 challenges__instant">
                        <div className="challenges__card-1-mask">
                            <div className="challenges__card-1-logo">
                                <img src="/img/challenges/card-logo-instant.svg" alt="" />
                            </div>
                            <div className="challenges__card-1-title">Instant</div>
                            <div className="challenges__card-1-desc">
                                The only package that offers you Live account instantly. No need to pass the challenge.
                            </div>
                            <div className="challenges__card-1-border"></div>
                            <div className="challenges__card-1-details">
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> Get paid on the first day
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> Best Conditions
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> No Consistency Rule
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> No Daily Loss
                                </div>
                                <div className="challenges__card-1-details-item">
                                    <img src="/img/challenges/icon-check.svg" alt="fxci" /> News Trading Allowed
                                </div>
                            </div>
                            <a data-target="#plans" data-plan="instant" className="challenges__card-1-btn scroll-to" href="#">
                                Start Challenge <img src="/img/arrow-right.svg" alt="fxci" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenges;