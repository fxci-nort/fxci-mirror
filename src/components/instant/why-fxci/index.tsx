import iconCheck from '@/assets/img/icon-a-check.svg';
import iconUser from '@/assets/img/icon-a-user.svg';
import iconSettings from '@/assets/img/icon-a-settings.svg';
import iconCool from '@/assets/img/icon-a-cool.svg';
import iconDol2 from '@/assets/img/icon-a-dol-2.svg';
import iconStar from '@/assets/img/icon-a-star.svg';

function WhyFxci() {
  return (
    <div className="why-fxci">
      <div className="container mb-container-scroll">
        <h2 className="section-title center">Why Choose FXCI as Your Prop Firm?</h2>
        <div className="why-fxci-list card__3-group scroll-wrap">
          <div className="card__3">
            <div className="card__3-icon">
              <img src={iconCheck} alt="" />
            </div>
            <div className="card__3-title">No commissions</div>
          </div>
          <div className="card__3">
            <div className="card__3-icon">
              <img src={iconUser} alt="" />
            </div>
            <div className="card__3-title">FXCI Pro Support</div>
          </div>
          <div className="card__3">
            <div className="card__3-icon">
              <img src={iconSettings} alt="" />
            </div>
            <div className="card__3-title">Wide range of instruments</div>
          </div>
          <div className="card__3">
            <div className="card__3-icon">
              <img src={iconCool} alt="" />
            </div>
            <div className="card__3-title">Easy challenge</div>
          </div>
          <div className="card__3">
            <div className="card__3-icon">
              <img src={iconDol2} alt="" />
            </div>
            <div className="card__3-title">Trader-Friendly Leverage</div>
          </div>
          <div className="card__3">
            <div className="card__3-icon">
              <img src={iconStar} alt="" />
            </div>
            <div className="card__3-title">Best Trading Conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyFxci;
