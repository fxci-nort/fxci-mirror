function Challenge() {
  return (
    <div className="mb-container-scroll container">
      <div className="model-page__rules">
        <h2 className="section-title center">Intraday Challenge Rules</h2>
        <div className="model-page__rules-list card__1-group scroll-wrap">
          <div className="card__1-row">
            <div className="model-page__rules-item card__1">
              <img className="card__1-img" src="/img/icon-clock.svg" alt="fxci" />
              <div className=" card__1-title">No Time Limit</div>
              <div className="card__1-desc">Take as much time as you need to pass each phase.</div>
            </div>
            <div className="model-page__rules-item card__1">
              <img className="card__1-img" src="/img/icon-trending-up.svg" alt="fxci" />
              <div className=" card__1-title">Get up to 99% of account profit</div>
              <div className="card__1-desc">
                Keep up to 99% of your earnings with one of the industry’s most generous profit
                splits.
              </div>
            </div>
          </div>
          <div className="card__1-row">
            <div className="model-page__rules-item card__1">
              <img className="card__1-img" src="/img/icon-roket.svg" alt="fxci" />
              <div className=" card__1-title">10% Maximum Drawdown</div>
              <div className="card__1-desc">
                Your account is protected with a 10% maximum drawdown limit, providing a healthy
                buffer for uncertain trading periods.
              </div>
            </div>
            <div className="model-page__rules-item card__1">
              <img className="card__1-img" src="/img/icon-check-all.svg" alt="fxci" />
              <div className=" card__1-title">Easy challenge</div>
              <div className="card__1-desc">
                Profit targets of 8% and 5% are unmatched as the industry's lowest.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
