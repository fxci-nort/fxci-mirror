import iconGuaranteed from '@/assets/img/why/icon-guaranteed.svg';
import iconCommunity from '@/assets/img/why/icon-community.svg';
import iconSupport from '@/assets/img/why/icon-support.svg';
import iconBar from '@/assets/img/why/bar.svg';
import iconDiscord from '@/assets/img/why/icon-discord.svg';
import iconFb from '@/assets/img/why/icon-fb.svg';
import iconX from '@/assets/img/why/icon-x.svg';

const WhyFXCI = () => {
  return (
    <section>
      <div className="container">
        <div className="section-label">WHY FXCI</div>
        <h2 className="section-title">
          Trade with the Most <br /> Reliable Prop Firm
        </h2>
        <div className="why__subtitle">Reliable | Swift | Stable | Trusted</div>
        <div className="why__achievements">
          <div className="why__helping-traders">
            <div className="across">Helping Traders Across 150+ Countries</div>
            <div className="why__helping-row">
              <div className="rewards">
                <span>$50M+</span> Total Rewards
              </div>
              <div className="active_users">
                <span>110k+</span> Active users
              </div>
              <div className="reward_time">
                <span>4hrs</span> Avg. Reward Time
              </div>
            </div>
          </div>
          <div className="why__conditions">
            <div className="why__conditions-title">Best Trading Conditions</div>
            <div className="why__conditions-list">
              <ul>
                <li>Raw Spreads</li>
                <li>Guaranteed payment within 24 hours</li>
                <li>Zero commissions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="why__you_choose">
          <div className="best_trading_platform">
            <div className="best_trading_platform-first">
              <div className="sub_title">Make Your Choice!</div>
              <div className="title">Best Trading Platforms</div>
              <div className="sub_title_two">Trade on cTrader and YFT platforms</div>
              <div className="desc">
                Trade with ease and efficiency on our powerful Trading Platforms
              </div>
            </div>
            <div className="best_trading_platform-bars">
              <img className="bar-1 bar" src={iconBar} alt="" />
              <img className="bar-2 bar" src={iconBar} alt="" />
              <img className="bar-3 bar" src={iconBar} alt="" />
              <img className="bar-4 bar" src={iconBar} alt="" />
              <img className="bar-5 bar" src={iconBar} alt="" />
            </div>
          </div>
          <div className="best_trading_platform-second">
            <div className="why__card-1-row">
              <div className="why__guaranteed why__card-1">
                <img className="why__card-1-icon" src={iconGuaranteed} alt="" />
                <div className="why__card-1-title">Guaranteed Payouts</div>
                <div className="why__card-1-desc">
                  We ensure fast withdrawals across all methods, including bank transfers and
                  crypto.
                </div>
              </div>
              <div className="why__community why__card-1">
                <img className="why__card-1-icon" src={iconCommunity} alt="" />
                <div className="why__card-1-title">FXCI Community</div>
                <div className="why__card-1-desc">
                  Become a member of our warm and fast-growing community
                </div>
                <div className="why__community-social">
                  <a href="https://discord.gg/QbQsYY2EKs">
                    <img src={iconDiscord} alt="" />
                  </a>
                  <a href="https://www.facebook.com/fxcicom">
                    <img src={iconFb} alt="" />
                  </a>
                  <a href="https://twitter.com/fxci_com">
                    <img src={iconX} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="why__support why__card-1">
              <img className="why__card-1-icon" src={iconSupport} alt="" />
              <div>
                <div className="why__card-1-title">24/7 Pro Support</div>
                <div className="why__card-1-desc">
                  We're a prop trading firm that truly cares about our traders, offering dedicated
                  support around the clock. You can reach us anytime via chat, email, or socials.
                  Our qualified team members are ready to assist you as quickly as possible.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFXCI;
