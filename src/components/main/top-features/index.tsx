import iconCard1 from '@/assets/img/top-features/icon-card-1.svg';
import iconCard2 from '@/assets/img/top-features/icon-card-2.svg';
import iconCard3 from '@/assets/img/top-features/icon-card-3.svg';
import iconCard4 from '@/assets/img/top-features/icon-card-4.svg';
import iconCard5 from '@/assets/img/top-features/icon-card-5.svg';

const TopFeatures = () => {
  return (
    <section id="top-features">
      <div className="container mb-container-scroll">
        <div className="section-label">TOP FEATURES</div>
        <h2 className="section-title">
          Unlock Your Trading <br /> Potential with FXCI
        </h2>
        <div className="top-features-list scroll-wrap">
          <div className="top-features-item card__1">
            <img className="card__1-img" src={iconCard1} alt="fxci" />
            <div className="top-features-item-title card__1-title">Easy challenge</div>
            <div className="top-features-item-desc card__1-desc">
              Profit targets of 8% and 5% are unmatched as the industry's lowest.
            </div>
          </div>
          <div className="top-features-item card__1">
            <img className="card__1-img" src={iconCard2} alt="fxci" />
            <div className="top-features-item-title card__1-title">Balance-Based Drawdown</div>
            <div className="top-features-item-desc card__1-desc">
              Potential traders can easily handle their positions with FXCI's account balance-based
              drawdowns.
            </div>
          </div>
          <div className="top-features-item card__1">
            <img className="card__1-img" src={iconCard3} alt="fxci" />
            <div className="top-features-item-title card__1-title">News Trading</div>
            <div className="top-features-item-desc card__1-desc">
              With FXCI, you can capitalize on major market shifts through news trading, quickly
              turning high-impact news into profitable opportunities.
            </div>
          </div>
          <div className="top-features-item card__1">
            <img className="card__1-img" src={iconCard4} alt="fxci" />
            <div className="top-features-item-title card__1-title">Reset & Topup</div>
            <div className="top-features-item-desc card__1-desc">
              Restart your account in seconds by resetting or topping up your account, even if
              you've broken any rules.
            </div>
          </div>
          <div className="top-features-item card__1">
            <img className="card__1-img" src={iconCard5} alt="fxci" />
            <div className="top-features-item-title card__1-title">Copy trading is allowed</div>
            <div className="top-features-item-desc card__1-desc">
              Easily manage multiple personal accounts.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFeatures;
