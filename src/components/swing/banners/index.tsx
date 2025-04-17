import banner1Img from '@/assets/img/banner-1-img.png';
import iconDiscord from '@/assets/img/why/icon-discord.svg';
import iconX from '@/assets/img/why/icon-x.svg';

function Banner() {
  return (
    <div className="banners">
      <div className="container">
        <div className="banner-1">
          <div className="banner-1-content">
            <div className="banner-1-subtitle">Rewards You Can Count On - No Denials!</div>
            <div className="banner-1-title">
              We ensure fast Payouts <br /> across all methods!
            </div>
            <div className="banner-1-desc">
              We respect your work and talent, and promise you fast payouts across all methods,
              including bank transfers, crypto and much more. Be confident, you will receive your
              payout no matter what.
            </div>
            <a data-target="#plans" className="btn-blue scroll-to">
              Learn More
            </a>
          </div>
          <img className="banner-1-img" src={banner1Img} alt="" />
        </div>

        <div className="banner-2">
          <div className="banner-2-content">
            <div className="banner-2-title">
              Become a member of our warm and fast-growing community
            </div>
            <div className="banner-1-desc">
              Get access to exclusive trading tools, economic updates, and fundamental insights.
              Tune into the best trading podcasts, share your hobbies outside trading, and connect
              with other traders. Come and be part of the conversation!
            </div>
            <div className="banner-2-btns">
              <a href="https://discord.gg/QbQsYY2EKs" className="btn-grey">
                Join to Discord
                <img src={iconDiscord} alt="" />
              </a>
              <a href="https://twitter.com/fxci_com" className="btn-grey">
                Join to Twitter
                <img src={iconX} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
