const Plans = () => {
    // State hooks would be added here to manage active tabs, preferences, etc.
    const submitPlan = (element) => {
        // Plan submission logic
    };

    const setupRedirects = (className, page) => {
        // Redirect logic
    };

    return (
        <section id="plans">
            <div className="container mb-container-scroll">
                <div className="plans__title-wrap">
                    <h2 className="section-title">CHOOSE THE BEST PLAN</h2>
                    <a className="compare_challenges link-class" onClick={() => setupRedirects('link-class', 'compare-challenges')}>
                        Compare Challenges
                    </a>
                </div>

                <div className="scroll-wrap mb-none">
                    <div className="plans-wrap">
                        <div className="plans-header">
                            <div className="plans-tabs">
                                <div data-key="swing" className="plans-tab tab-name active">
                                    <img src="/img/swing-logo.png" alt="" /> Swing
                                </div>
                                <div data-key="intraday" className="plans-tab tab-name">
                                    <img src="/img/intraday-logo.png" alt="" /> Intraday
                                </div>
                                <div data-key="instant" className="plans-tab tab-name">
                                    <img src="/img/instant-logo.png" alt="" /> Instant
                                </div>
                            </div>

                            <div data-ref-plans="intraday" className="plans__filters plans__filters-intraday">
                                <div className="plans__filters-title">Select Preference</div>
                                <div className="plans__filters-list plans__filters-list-intraday">
                                    <div data-preference-key="phase_1_raw_spreads" className="plans__filters-item plans__filters-item-intraday active">
                                        <input type="radio" name="intraday_preference" id="phase_1_raw_spreads" defaultChecked />
                                        <label htmlFor="phase_1_raw_spreads">1-Phase<br />Raw spreads</label>
                                    </div>
                                    <div data-preference-key="phase_2_raw_spreads" className="plans__filters-item plans__filters-item-intraday">
                                        <input type="radio" name="intraday_preference" id="phase_2_raw_spreads" />
                                        <label htmlFor="phase_2_raw_spreads">2-Phase<br />Raw spreads</label>
                                    </div>
                                    <div data-preference-key="phase_1_no_commission" className="plans__filters-item plans__filters-item-intraday">
                                        <input type="radio" name="intraday_preference" id="phase_1_no_commission" />
                                        <label htmlFor="phase_1_no_commission">1-Phase<br />NO Commission</label>
                                    </div>
                                    <div data-preference-key="phase_2_no_commission" className="plans__filters-item plans__filters-item-intraday">
                                        <input type="radio" name="intraday_preference" id="phase_2_no_commission" />
                                        <label htmlFor="phase_2_no_commission">2-Phase<br />NO Commission</label>
                                    </div>
                                </div>
                            </div>

                            <div data-ref-plans="swing" className="plans__filters plans__filters-swing">
                                <div className="plans__filters-title">Select Preference</div>
                                <div className="plans__filters-list plans__filters-list-swing">
                                    <div data-preference-key="default" className="plans__filters-item plans__filters-item-swing active">
                                        <input type="radio" name="swing_preference" id="swing_default" defaultChecked />
                                        <label htmlFor="swing_default">Swing</label>
                                    </div>
                                </div>
                            </div>

                            <div data-ref-plans="instant" className="plans__filters plans__filters-instant">
                                <div className="plans__filters-title">Select Preference</div>
                                <div className="plans__filters-list plans__filters-list-instant">
                                    <div data-preference-key="raw_spreads" className="plans__filters-item plans__filters-item-instant active">
                                        <input type="radio" name="instant_preference" id="instant_raw_spreads" defaultChecked />
                                        <label htmlFor="instant_raw_spreads">Raw spreads</label>
                                    </div>
                                    <div data-preference-key="no_commission" className="plans__filters-item plans__filters-item-instant">
                                        <input type="radio" name="instant_preference" id="instant_no_commission" />
                                        <label htmlFor="instant_no_commission">NO Commission</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="plans-table">
                            <div className="plans-table__detail plans-table__detail-upd" id="plan-name">
                                <div className="plans-table__row head" id="desktop-accounts-row">
                                    <div className="plans-table__col title left col-padding-title">Account Size</div>

                                    {/* Standard accounts */}
                                    <div className="plans-table__col title center standard-account">
                                        $5,000
                                        <button className="plans-table__btn submit-plan-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                            Get plan <span>Fee: $69</span>
                                        </button>
                                    </div>
                                    <div className="plans-table__col title center standard-account">
                                        $10,000
                                        <button className="plans-table__btn submit-plan-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                            Get plan <span>Fee: $147</span>
                                        </button>
                                    </div>
                                    <div className="plans-table__col title center standard-account">
                                        $25,000
                                        <button className="plans-table__btn submit-plan-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                            Get plan <span>Fee: $247</span>
                                        </button>
                                    </div>
                                    <div className="plans-table__col title center standard-account">
                                        $50,000
                                        <button className="plans-table__btn submit-plan-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                            Get plan <span>Fee: $357</span>
                                        </button>
                                    </div>
                                    <div className="plans-table__col title center standard-account">
                                        $100,000
                                        <button className="plans-table__btn submit-plan-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                            Get plan <span>Fee: $577</span>
                                        </button>
                                    </div>
                                    <div className="plans-table__col title center standard-account">
                                        $200,000
                                        <button className="plans-table__btn submit-plan-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                            Get plan <span>Fee: $1097</span>
                                        </button>
                                    </div>

                                    {/* Additional accounts for Instant */}
                                    <div className="plans-table__col title center instant-account d-none">
                                        $500
                                        <button className="plans-table__btn submit-plan-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                            Get plan <span>Fee: $40</span>
                                        </button>
                                    </div>
                                    <div className="plans-table__col title center instant-account d-none">
                                        $1,500
                                        <button className="plans-table__btn submit-plan-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                            Get plan <span>Fee: $120</span>
                                        </button>
                                    </div>
                                    <div className="plans-table__col title center instant-account d-none">
                                        $2,500
                                        <button className="plans-table__btn submit-plan-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                            Get plan <span>Fee: $200</span>
                                        </button>
                                    </div>
                                    <div className="plans-table__col title center instant-account d-none">
                                        $300,000
                                        <button className="plans-table__btn submit-plan-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                            Get plan <span>Fee: $15,000</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Table rows for features */}
                                <div className="plans-table__row">
                                    <div className="plans-table__col border title-2 col-padding-title">Profit Target</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 8%, P2: 5%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 8%, P2: 5%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 8%, P2: 5%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 8%, P2: 5%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 8%, P2: 5%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 8%, P2: 5%</div>

                                    {/* Cells for Instant accounts */}
                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                </div>

                                <div className="plans-table__row">
                                    <div className="plans-table__col border title-2 col-padding-title">Maximum Daily Loss</div>
                                    <div className="plans-table__col border-dashed center standard-cell">5%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">5%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">5%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">5%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">5%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">5%</div>

                                    {/* Cells for Instant accounts */}
                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                </div>

                                {/* Additional rows follow the same pattern */}
                                <div className="plans-table__row">
                                    <div className="plans-table__col border title-2 col-padding-title">Maximum Overall Loss</div>
                                    <div className="plans-table__col border-dashed center standard-cell">10%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">10%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">10%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">10%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">10%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">10%</div>

                                    <div className="plans-table__col border-dashed center instant-cell d-none">10%</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">10%</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">10%</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">10%</div>
                                </div>

                                <div className="plans-table__row">
                                    <div className="plans-table__col border title-2 col-padding-title">Balance Based Drawdown</div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>

                                    <div className="plans-table__col border-dashed center instant-cell d-none"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                </div>

                                <div className="plans-table__row">
                                    <div className="plans-table__col border title-2 col-padding-title">Minimum Trading Days</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 3, P2: 2</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 3, P2: 2</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 3, P2: 2</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 3, P2: 2</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 3, P2: 2</div>
                                    <div className="plans-table__col border-dashed center standard-cell">P1: 3, P2: 2</div>

                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">×</div>
                                </div>

                                <div className="plans-table__row">
                                    <div className="plans-table__col border title-2 col-padding-title">Profit Split Up To</div>
                                    <div className="plans-table__col border-dashed center standard-cell">99%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">99%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">99%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">99%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">99%</div>
                                    <div className="plans-table__col border-dashed center standard-cell">95%</div>

                                    <div className="plans-table__col border-dashed center instant-cell d-none">50%</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">50%</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">50%</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">50%</div>
                                </div>

                                <div className="plans-table__row">
                                    <div className="plans-table__col border title-2 col-padding-title">News Trading</div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center standard-cell"><img src="/img/checkmark.svg" alt="fxci" /></div>

                                    <div className="plans-table__col border-dashed center instant-cell d-none"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                </div>

                                <div className="plans-table__row">
                                    <div className="plans-table__col border title-2 col-padding-title">First Reward</div>
                                    <div className="plans-table__col border-dashed center standard-cell">14 Days</div>
                                    <div className="plans-table__col border-dashed center standard-cell">14 Days</div>
                                    <div className="plans-table__col border-dashed center standard-cell">14 Days</div>
                                    <div className="plans-table__col border-dashed center standard-cell">14 Days</div>
                                    <div className="plans-table__col border-dashed center standard-cell">14 Days</div>
                                    <div className="plans-table__col border-dashed center standard-cell">14 Days</div>

                                    <div className="plans-table__col border-dashed center instant-cell d-none">24 Hours</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">24 Hours</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">24 Hours</div>
                                    <div className="plans-table__col border-dashed center instant-cell d-none">24 Hours</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile plans section */}
                <div className="mb-plans-section lg-none">
                    <div className="mb-pd-r-20">
                        <div className="mb-plan-list-tab">
                            <div data-key="swing" className="mb-plans-tab active">Swing</div>
                            <div data-key="intraday" className="mb-plans-tab">Intraday</div>
                            <div data-key="instant" className="mb-plans-tab">Instant</div>
                        </div>
                    </div>

                    {/* Mobile preference selectors */}
                    <div className="mb-plan-reference mb-plan-reference-intraday">
                        <div className="mb-plan-reference-title">Select Preference</div>
                        <div className="">
                            <div className="mb-plan-reference-list">
                                <div data-preference-key="phase_1_raw_spreads" className="mb-plans__filters-item mb-plans__filters-item-intraday active">
                                    <input type="radio" name="mb_intraday_preference" id="mb_phase_1_raw_spreads" defaultChecked />
                                    <label htmlFor="mb_phase_1_raw_spreads">1-Phase<br />Raw spreads</label>
                                </div>
                                <div data-preference-key="phase_2_raw_spreads" className="mb-plans__filters-item mb-plans__filters-item-intraday">
                                    <input type="radio" name="mb_intraday_preference" id="mb_phase_2_raw_spreads" />
                                    <label htmlFor="mb_phase_2_raw_spreads">2-Phase<br />Raw spreads</label>
                                </div>
                                <div data-preference-key="phase_1_no_commission" className="mb-plans__filters-item mb-plans__filters-item-intraday">
                                    <input type="radio" name="mb_intraday_preference" id="mb_phase_1_no_commission" />
                                    <label htmlFor="mb_phase_1_no_commission">1-Phase<br />NO Commission</label>
                                </div>
                                <div data-preference-key="phase_2_no_commission" className="mb-plans__filters-item mb-plans__filters-item-intraday">
                                    <input type="radio" name="mb_intraday_preference" id="mb_phase_2_no_commission" />
                                    <label htmlFor="mb_phase_2_no_commission">2-Phase<br />NO Commission</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-plan-reference mb-plan-reference-swing d-none">
                        <div className="mb-plan-reference-title">Select Preference</div>
                        <div className="">
                            <div className="mb-plan-reference-list">
                                <div data-preference-key="default" className="mb-plans__filters-item mb-plans__filters-item-swing active">
                                    <input type="radio" name="mb_swing_preference" id="mb_swing_default" defaultChecked />
                                    <label htmlFor="mb_swing_default">Swing</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-plan-reference mb-plan-reference-instant d-none">
                        <div className="mb-plan-reference-title">Select Preference</div>
                        <div className="">
                            <div className="mb-plan-reference-list">
                                <div data-preference-key="raw_spreads" className="mb-plans__filters-item mb-plans__filters-item-instant active">
                                    <input type="radio" name="mb_instant_preference" id="mb_instant_raw_spreads" defaultChecked />
                                    <label htmlFor="mb_instant_raw_spreads">Raw spreads</label>
                                </div>
                                <div data-preference-key="no_commission" className="mb-plans__filters-item mb-plans__filters-item-instant">
                                    <input type="radio" name="mb_instant_preference" id="mb_instant_no_commission" />
                                    <label htmlFor="mb_instant_no_commission">NO Commission</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-plan-reference">
                        <div className="scroll-wrap plan-price-filter">
                            <div className="plan-price-filter-item" data-target-account="5000">$5K</div>
                            <div className="plan-price-filter-item" data-target-account="10000">$10K</div>
                            <div className="plan-price-filter-item" data-target-account="25000">$25K</div>
                            <div className="plan-price-filter-item" data-target-account="50000">$50K</div>
                            <div className="plan-price-filter-item" data-target-account="100000">$100K</div>
                            <div className="plan-price-filter-item" data-target-account="200000">$200K</div>
                            <div className="plan-price-filter-item plan-price-filter-item-instant d-none" data-target-account="300000">$300K</div>
                            <div className="plan-price-filter-item plan-price-filter-item-instant d-none" data-target-account="500">$500</div>
                            <div className="plan-price-filter-item plan-price-filter-item-instant d-none" data-target-account="1500">$1.5K</div>
                            <div className="plan-price-filter-item plan-price-filter-item-instant d-none" data-target-account="2500">$2.5K</div>
                        </div>
                    </div>

                    <div className="mb-container-scroll">
                        <div className="mb-plans-list scroll-wrap">
                            {/* Mobile plan items */}
                            {/* Only showing a few examples as there are many similar items */}
                            <div data-account="500" className="mb-plans-list-item plan-instant d-none">
                                <div className="mb-plans-list-item-header">
                                    <div className="mb-plans-list-item-header-title">Account Size</div>
                                    <div className="mb-plans-list-item-price">$500</div>
                                    <button className="mb-plans-list-item-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                        Get plan <span>Fee: $40</span>
                                    </button>
                                </div>
                                <div className="mb-plans-list-item-body">
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Profit Target</div>
                                        <div className="riht">×</div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Maximum Daily Loss</div>
                                        <div className="riht">×</div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Maximum Overall Loss</div>
                                        <div className="riht">10%</div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Balance Based Drawdown</div>
                                        <div className="riht"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Minimum Trading</div>
                                        <div className="riht">×</div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Profit Split Up To</div>
                                        <div className="riht">50%</div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">News Trading</div>
                                        <div className="riht"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">First Reward</div>
                                        <div className="riht">24 Hours</div>
                                    </div>
                                </div>
                            </div>

                            <div data-account="5000" className="mb-plans-list-item">
                                <div className="mb-plans-list-item-header">
                                    <div className="mb-plans-list-item-header-title">Account Size</div>
                                    <div className="mb-plans-list-item-price">$5,000</div>
                                    <button className="mb-plans-list-item-btn" onClick={(e) => submitPlan(e.target)} style={{ border: 'none' }}>
                                        Get plan <span>Fee: $69</span>
                                    </button>
                                </div>
                                <div className="mb-plans-list-item-body">
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Profit Target</div>
                                        <div className="riht">P1: 8%, P2: 5%</div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Maximum Daily Loss</div>
                                        <div className="riht">5%</div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Maximum Overall Loss</div>
                                        <div className="riht">10%</div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Balance Based Drawdown</div>
                                        <div className="riht"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Minimum Trading</div>
                                        <div className="riht">P1: 3, P2: 2</div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">Profit Split Up To</div>
                                        <div className="riht">99%</div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">News Trading</div>
                                        <div className="riht"><img src="/img/checkmark.svg" alt="fxci" /></div>
                                    </div>
                                    <div className="mb-plans-list-item-body-row">
                                        <div className="lft">First Reward</div>
                                        <div className="riht">14 Days</div>
                                    </div>
                                </div>
                            </div>

                            {/* Other mobile plan items would be included here */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;