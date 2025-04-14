import React, { useEffect, useRef, useState } from 'react';

interface FeedbackItemProps {
    author: string;
    time: string;
    shortReview: string;
    fullReview: string;
}

interface FeedbackItem extends FeedbackItemProps { }

const TraderFeedback: React.FC = () => {
    // Feedback item component to avoid repetition
    const FeedbackItem: React.FC<FeedbackItemProps> = ({ author, time, shortReview, fullReview }) => (
        <div className="trader-feedback__item">
            <div className="trader-feedback__item-rating">
                <img className="trader-feedback__item-rating-stars" src="/img/stars.svg" alt="" />
                <img src="/img/icon-verified.svg" alt="" /> Verified
            </div>
            <div className="trader-feedback__item-author">{author}, {time}</div>
            <div className="trader-feedback__item-review-short">{shortReview}</div>
            <div className="trader-feedback__item-review-full">{fullReview}</div>
        </div>
    );

    // Complete feedback items dataset
    const feedbackItems: FeedbackItem[] = [
        {
            author: "DINA",
            time: "1 month ago",
            shortReview: "Fast payout, best prop firm",
            fullReview: "I won a 5K account from weekly streaming giveaway, and I passed both phase 1 and phase 2 in a single day. I can still trade even during major news events."
        },
        {
            author: "Nik0Runner",
            time: "6 months ago",
            shortReview: "Personally am very happy with FXCI",
            fullReview: "Technical support will contact you in less than 24 hours. Trading conditions that suit every trader's way of working. Very good company that can be trusted."
        },
        {
            author: "Chris",
            time: "5 months ago",
            shortReview: "Simply the Best!",
            fullReview: "I'm all about news trading, and they provide the perfect platform to profit on that. I've already hit my targets, and the payout come really fast. Can't ask for more!"
        },
        {
            author: "SSSamuel",
            time: "1 year ago",
            shortReview: "FXCI are clear winners to me",
            fullReview: "I spent quite some time researching until I decided to opt for FXCI. Read tons of reviews, and visited numerous websites. FXCI are clear winners to me. They offer unparalleled customer service and their trading conditions are the best."
        },
        {
            author: "TNguyen",
            time: "2 months ago",
            shortReview: "Great community",
            fullReview: "FXCI has a strong community and excellent resources. The challenges are well-designed for trader development, and the profit split is generous. Overall, I'm satisfied with my decision to join."
        },
        {
            author: "Jessie Kim",
            time: "4 months ago",
            shortReview: "Fast payouts!",
            fullReview: "I received my first payout within 24 hours, which is remarkable! Support team is friendly and responsive. Overall, I'd recommend them to anyone looking to trade."
        },
        {
            author: "David23",
            time: "2 weeks ago",
            shortReview: "Amazing experience",
            fullReview: "I really appreciate FXCI's fast payouts—never had to wait more than a day! Highly recommend!"
        },
        {
            author: "Ewan Haynes",
            time: "1 year ago",
            shortReview: "FXCI is a top trading",
            fullReview: "Definitely a top trading company. Just completed the first challenge. Luckily, I didn't have much trouble doing so."
        },
        {
            author: "Christofuur",
            time: "8 months ago",
            shortReview: "One more positive review for FXCI :)",
            fullReview: "I was hesitant at first, still had a lot of questions regarding trading. But I'm really happy with my pick for FXCI."
        },
        {
            author: "JOY893",
            time: "10 months ago",
            shortReview: "I'm here to thank FXCI for nothing but...",
            fullReview: "...but an excellent experience! When it comes to prop firms, it's important to find a good one. And I'm glad I opted for FXCI."
        },
        {
            author: "Jack",
            time: "4 months ago",
            shortReview: "I highly recommend FXCI!",
            fullReview: "My overall impression is definitely positive and I can recommend them to anyone who's looking for a good experience in trading."
        },
        {
            author: "SHERI GILMORE",
            time: "3 weeks ago",
            shortReview: "WANTED TO SAY THANK YOU",
            fullReview: "Just got my account from you and I can't wait to start trading. They have a nice team with wonderful support that attended to all my questions even though they were lots of them, thanks FXCI ❤️"
        },
        {
            author: "Mike1989",
            time: "1 month ago",
            shortReview: "No regrets",
            fullReview: "Been with FXCI for a while now, and I have no regrets. Their instant funding option is a lifesaver. The challenge was easy, and I'm already making profits."
        },
        {
            author: "Sammy",
            time: "7 months ago",
            shortReview: "can't speak for other companies, but...",
            fullReview: "fxci is really great. passed their challenge with no issues and had two payouts for far. never worried about a thing. everything went smoothly. big thanks!"
        },
        {
            author: "TraderTrader",
            time: "1 month ago",
            shortReview: "Will recommend FXCI",
            fullReview: "News trading feature is a game-changer! I made some nice gains from it. Keep it up!"
        },
        {
            author: "Carlos Fernandez",
            time: "1 week ago",
            shortReview: "Fast payouts!",
            fullReview: "I joined FXCI last month and received my first earnings within 24 hours, which is rare in this industry."
        },
        {
            author: "Raj Singh",
            time: "1 month ago",
            shortReview: "Fantastic platform",
            fullReview: "OMG, FXCI has made it so much easier! I was nervous about jumping into prop trading, but here I am. It's nice to find a trading company that truly cares about its users!"
        },
        {
            author: "Lina",
            time: "2 weeks ago",
            shortReview: "Great customer service",
            fullReview: "I had a few questions when I started, and they answered me in less than a minute. This level of service is hard to find in this industry."
        },
        {
            author: "Hawk",
            time: "6 months ago",
            shortReview: "Solid",
            fullReview: "FXCI offers a solid platform with great tools for traders. The variety of payment options is also a good thing to have."
        },
        {
            author: "Chidi Okafor",
            time: "1 year ago",
            shortReview: "99% Split is lit!",
            fullReview: "FXCI's instant funding is dope, and the profit split is unreal. If you want to make serious gains, this is the place!"
        },
        {
            author: "Luka",
            time: "1 month ago",
            shortReview: "Great conditions for traders",
            fullReview: "Low profit targets and no time limits are great. So far, my experience with FXCI has been very positive!"
        },
        {
            author: "Doref_",
            time: "5 months ago",
            shortReview: "transparent and reliable",
            fullReview: "After trying several prop firms, I found FXCI to be the most transparent and reliable. The account reset option is a lifesaver when things go wrong. I've already recommended them to my trading friends!"
        },
        {
            author: "Tomás",
            time: "6 months ago",
            shortReview: "Reliable for my trading needs",
            fullReview: "I feel confident trading with FXCI. They have proven to be a reliable team. I appreciate the transparency of their operations and friendly support."
        },
        {
            author: "Josephpavich",
            time: "3 months ago",
            shortReview: "Not Just Hype!",
            fullReview: "I was skeptical at first due to all the marketing, but FXCI really delivers. The profit splits and withdrawal times are as advertised. I've had a great experience so far"
        },
        {
            author: "Daniel Cody",
            time: "2 weeks ago",
            shortReview: "GOOD TEAM!",
            fullReview: "Very happy with FXCI and can't recommend them enough. I haven't had my payout yet, but what I can tell is that their customer support is really great."
        }
    ];

    // Create refs for each column
    const col1Ref = useRef<HTMLDivElement>(null);
    const col2Ref = useRef<HTMLDivElement>(null);
    const col3Ref = useRef<HTMLDivElement>(null);
    const mobileColRef = useRef<HTMLDivElement>(null);

    // Setup scroll functionality for each column
    useEffect(() => {
        const scrollSpeed = 50; // ms between scroll steps
        const scrollStep = 1; // pixels to scroll each step
        const scrollIntervals: number[] = [];

        // Function to handle scrolling for a column
        const setupScrolling = (columnElement: HTMLDivElement | null) => {
            if (!columnElement) return null;

            const interval = setInterval(() => {
                const scrollTop = columnElement.scrollTop;
                const totalHeight = columnElement.scrollHeight;
                const visibleHeight = columnElement.clientHeight;

                if (scrollTop + visibleHeight >= totalHeight - 1) {
                    // When we reach the bottom, immediately jump back to top
                    columnElement.scrollTop = 1;
                } else {
                    // Normal smooth scrolling
                    columnElement.scrollTop = scrollTop + scrollStep;
                }
            }, scrollSpeed);

            return interval;
        };

        // Set up scrolling for each column
        const interval1 = setupScrolling(col1Ref.current);
        const interval2 = setupScrolling(col2Ref.current);
        const interval3 = setupScrolling(col3Ref.current);
        const interval4 = setupScrolling(mobileColRef.current);

        if (interval1) scrollIntervals.push(interval1);
        if (interval2) scrollIntervals.push(interval2);
        if (interval3) scrollIntervals.push(interval3);
        if (interval4) scrollIntervals.push(interval4);

        // Cleanup intervals on component unmount
        return () => {
            scrollIntervals.forEach(interval => clearInterval(interval));
        };
    }, []);

    // Divide items into columns
    const allItems = feedbackItems; // All items for mobile column

    // Make sure we have enough items in each column for proper scrolling
    const col1Items = [...feedbackItems.slice(0, 9)];
    const col2Items = [...feedbackItems.slice(9, 18)];
    const col3Items = [...feedbackItems.slice(18)];

    // Add extra CSS to enable proper scrolling
    const columnStyle: React.CSSProperties = {
        height: '500px',
        overflowY: 'auto',
        position: 'relative'
    };

    return (
        <section id="trader-feedback">
            <div className="container mb-container-scroll">
                <div className="section-label">TRADERS FEEDBACK</div>
                <h2 className="section-title center">Our Traders Love Us</h2>
                <div className="section-subtitle center">
                    With traders like you, FXCI excels! Read what our users think about our best-in-class prop trading firm
                </div>

                <div className="trader-feedback__list">
                    <div
                        ref={mobileColRef}
                        className="trader-feedback__list-col trader-feedback__list-col-mb lg-none"
                        style={columnStyle}
                    >
                        {/* Mobile feedback items */}
                        {allItems.map((item, index) => (
                            <FeedbackItem
                                key={`mobile-${index}`}
                                author={item.author}
                                time={item.time}
                                shortReview={item.shortReview}
                                fullReview={item.fullReview}
                            />
                        ))}
                    </div>

                    <div
                        ref={col1Ref}
                        className="trader-feedback__list-col mb-none"
                        style={columnStyle}
                    >
                        {/* Desktop column 1 */}
                        {col1Items.map((item, index) => (
                            <FeedbackItem
                                key={`col1-${index}`}
                                author={item.author}
                                time={item.time}
                                shortReview={item.shortReview}
                                fullReview={item.fullReview}
                            />
                        ))}
                    </div>

                    <div
                        ref={col2Ref}
                        className="trader-feedback__list-col mb-none"
                        style={columnStyle}
                    >
                        {/* Desktop column 2 */}
                        {col2Items.map((item, index) => (
                            <FeedbackItem
                                key={`col2-${index}`}
                                author={item.author}
                                time={item.time}
                                shortReview={item.shortReview}
                                fullReview={item.fullReview}
                            />
                        ))}
                    </div>

                    <div
                        ref={col3Ref}
                        className="trader-feedback__list-col mb-none"
                        style={columnStyle}
                    >
                        {/* Desktop column 3 */}
                        {col3Items.map((item, index) => (
                            <FeedbackItem
                                key={`col3-${index}`}
                                author={item.author}
                                time={item.time}
                                shortReview={item.shortReview}
                                fullReview={item.fullReview}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TraderFeedback;