import help from '@/assets/img/help.svg';
import support from '@/assets/img/support.svg';

function Contacts() {
  return (
    <section id="contacts">
      <div className="container">
        <div className="contact-container">
          <div className="contact-first-block-row">
            <div className="contact-first-block-column">
              <div className="contact-first-block-column-text-one">
                <span className="title">Get in touch</span>
                <span className="text">
                  We value your feedback, inquiries, and concerns. Feel free to contact us via email
                  for further assistance. Our top-notch support team is here to assist you with any
                  questions.
                </span>
              </div>
              <div className="contact-first-block-column-text-two">
                <div className="contact-first-block-column-text">
                  <img src={help} alt="Help" />
                  <div className="text-container">
                    <div className="title">24/7 help</div>
                    <div className="text">
                      Want to contact us? We'd love to hear from you around-the-clock.
                    </div>
                  </div>
                </div>
                <div className="contact-first-block-column-text">
                  <img src={support} alt="Support" />
                  <div className="text-container">
                    <div className="title">Top-notch support</div>
                    <div className="text">
                      We are traders too, you can rely on us! Contact us for expert advice and
                      guidance with any query.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <input
                type="hidden"
                id="_token"
                name="_token"
                value="ryThCasq7p9E9dhmMhX0CdX70kTA1EokVVKXQQAi"
              />
              <div className="contact-form-first-row">
                <input id="contact-input-name" type="text" placeholder="Name" required />
                <input
                  id="contact-input-account_number"
                  type="text"
                  placeholder="Account number"
                  required
                />
              </div>
              <div className="contact-form-another-rows">
                <input
                  id="contact-input-email"
                  className="email"
                  type="email"
                  required
                  placeholder="Email"
                />
                <textarea required id="contact-input-message" placeholder="Message"></textarea>
              </div>
              <button className="contact-form-submit-button" type="submit">
                <span className="contact-form-submit-button-text">Send message</span>
              </button>
              <div className="contact-mes-send d-none">Message sent!</div>
            </form>
          </div>
          <div className="contact-second-block-row">
            <div className="contact-second-block-column">
              <div className="row">
                <span className="title">Address</span>
                <span className="text">483 Green Lanes, London, England, N13 4BS</span>
              </div>
              <div className="row">
                <span className="title">Business hours</span>
                <span className="text">24/7 for e-mails</span>
              </div>
              <div className="row">
                <span className="title">Get in touch</span>
                <a href="mailto:support@fxci.com">
                  <span className="">support@fxci.com</span>
                </a>
              </div>
            </div>
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
