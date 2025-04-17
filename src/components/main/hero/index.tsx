const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero__animation-profit mb-none">
          <div className="hero__animation-profit-left">
            <div
              style={{ '--delay': '0.5s' } as React.CSSProperties}
              className="profit-left-one profit"
            >
              +<span>4055,5</span>$
            </div>
            <div style={{ '--delay': '1s' } as React.CSSProperties} className="line-left-one">
              <img src="/assets/img/hero/left-line-connect-1.svg" alt="" />
            </div>
            <div
              style={{ '--delay': '1.5s' } as React.CSSProperties}
              className="profit-left-two profit"
            >
              +<span>3025,1</span>$
            </div>
            <div style={{ '--delay': '2s' } as React.CSSProperties} className="line-left-two">
              <img src="/assets/img/hero/left-line-connect-2.svg" alt="" />
            </div>
            <div
              style={{ '--delay': '2.5s' } as React.CSSProperties}
              className="profit-left-three profit"
            >
              +<span>1954,0</span>$
            </div>
          </div>
          <div className="hero__animation-profit-right">
            <div
              style={{ '--delay': '0.7s' } as React.CSSProperties}
              className="profit-right-one profit"
            >
              +<span>2556,5</span>$
            </div>
            <div style={{ '--delay': '1.1s' } as React.CSSProperties} className="line-right-one">
              <img src="/assets/img/hero/right-line-connect-1.svg" alt="" />
            </div>
            <div
              style={{ '--delay': '1.8s' } as React.CSSProperties}
              className="profit-right-two profit"
            >
              +<span>1055,1</span>$
            </div>
            <div style={{ '--delay': '2.2s' } as React.CSSProperties} className="line-right-two">
              <img src="/assets/img/hero/right-line-connect-2.svg" alt="" />
            </div>
            <div
              style={{ '--delay': '2.8s' } as React.CSSProperties}
              className="profit-right-three profit"
            >
              +<span>1505,5</span>$
            </div>
          </div>
        </div>
        <div className="hero__advantages">
          <h1 className="hero__advantages-h1">
            Empowering Ambitious <br /> Traders Globally
          </h1>
          <div className="hero__advantages-list">
            <div className="hero__advantages-item">
              <img src="/assets/img/hero/icon-advantages-1.svg" alt="fxci" />
              <div>
                <div className="hero__advantages-title">Up to 99%</div>
                <div className="hero__advantages-subtitle">of Profit Split</div>
              </div>
            </div>
            <div className="hero__advantages-item">
              <img src="/assets/img/hero/icon-advantages-2.svg" alt="fxci" />
              <div>
                <div className="hero__advantages-title">Up to $300k</div>
                <div className="hero__advantages-subtitle">Account</div>
              </div>
            </div>
            <div className="hero__advantages-item">
              <img src="/assets/img/hero/icon-advantages-3.svg" alt="fxci" />
              <div>
                <div className="hero__advantages-title">No commissions</div>
                <div className="hero__advantages-subtitle">Best trading conditions</div>
              </div>
            </div>
            <div className="hero__advantages-item">
              <img src="/assets/img/hero/icon-advantages-4.svg" alt="fxci" />
              <div>
                <div className="hero__advantages-title">No time limit</div>
                <div className="hero__advantages-subtitle">in Challenge Phase</div>
              </div>
            </div>
          </div>
          <div className="hero__advantages-btns">
            <a data-target="#plans" href="#" className="btn-orange scroll-to">
              Start Challenge
              <img src="/assets/img/icons/icon-arrow-down-right.svg" alt="fxci" />
            </a>
            <a href="https://discord.gg/QbQsYY2EKs" className="btn-grey">
              Join to Discord
              <img src="/assets/img/icons/icon-discord.svg" alt="fxci" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
