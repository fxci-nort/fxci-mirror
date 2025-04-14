interface PlanFeature {
    name: string;
    value: string | boolean;
    isCheckmark?: boolean;
    isCross?: boolean;
}

export interface Plan {
    account: string;
    accountSize: string;
    fee: string;
    packageId: string;
    features: PlanFeature[];
}

export interface PlanCategory {
    key: string;
    plans: Plan[];
    preferences: PlanPreference[];
}

export interface PlanPreference {
    key: string;
    label: string;
    plans: Plan[];
}

// Helper function to convert HTML checkmark/cross to boolean
const createFeature = (name: string, value: string): PlanFeature => {
    if (value.includes('checkmark.svg')) {
        return { name, value: true, isCheckmark: true };
    } else if (value.includes('cross.svg')) {
        return { name, value: false, isCross: true };
    }
    return { name, value };
};

// Process the HTML data into structured format
const createPlan = (accountSize: string, fee: string, packageId: string, features: Record<string, string>): Plan => {
    const planFeatures: PlanFeature[] = Object.entries(features).map(([name, value]) => createFeature(name, value));

    return {
        account: accountSize.replace(/[^\d]/g, ''),
        accountSize,
        fee,
        packageId,
        features: planFeatures
    };
};

// Swing Plans
export const swingPlans: Plan[] = [
    createPlan('$5,000', '$59', 'fc84432e-81a6-4301-a3f8-1116b59519dd', {
        'Profit Target': '10%',
        'Maximum Daily Loss': '3%',
        'Maximum Overall Loss': '5%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$10,000', '$109', '049bb7c2-d1cb-4bb7-815a-044128949003', {
        'Profit Target': '10%',
        'Maximum Daily Loss': '3%',
        'Maximum Overall Loss': '5%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$25,000', '$199', '88eea233-5492-4386-91fc-dc5840bf629c', {
        'Profit Target': '10%',
        'Maximum Daily Loss': '3%',
        'Maximum Overall Loss': '5%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$50,000', '$309', '7a4560b6-ec43-4bb5-8a70-9d34991c632c', {
        'Profit Target': '10%',
        'Maximum Daily Loss': '3%',
        'Maximum Overall Loss': '5%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$100,000', '$509', '3efb03c5-d854-4064-8257-eddad8014411', {
        'Profit Target': '10%',
        'Maximum Daily Loss': '3%',
        'Maximum Overall Loss': '5%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$200,000', '$959', '8def2b38-922f-4bd4-bb82-11659e577fbc', {
        'Profit Target': '10%',
        'Maximum Daily Loss': '3%',
        'Maximum Overall Loss': '5%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    })
];

// Intraday Plans - Phase 1 Raw Spreads
export const intradayPhase1RawSpreadsPlans: Plan[] = [
    createPlan('$5,000', '$49', 'd67d5691-18a1-4ee4-a006-7378a53b4e0d', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$10,000', '$99', 'e4280d32-90f0-413f-9a59-107dd8fc2348', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$25,000', '$189', '94fb8f00-57f3-4262-8d2a-7deffc72568c', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$50,000', '$299', 'd08b1f64-0ca3-4705-b673-238ec6390077', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$100,000', '$499', '5ab0be44-0cee-4e05-8e03-11348ffb1a6f', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$200,000', '$949', '1f802150-5d4c-4014-93b2-adc9962de54c', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    })
];

// Intraday Plans - Phase 2 Raw Spreads
export const intradayPhase2RawSpreadsPlans: Plan[] = [
    createPlan('$5,000', '$59', '752b65da-e37d-4418-9645-becf563ea0e6', {
        'Profit Target': '10%',
        'Maximum Daily Loss': '3%',
        'Maximum Overall Loss': '5%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$10,000', '$109', '69da193d-df5d-427e-830e-3cfd4c81db93', {
        'Profit Target': '10%',
        'Maximum Daily Loss': '3%',
        'Maximum Overall Loss': '5%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    // Additional plans with similar structure...
];

// Intraday Plans - Phase 1 No Commission
export const intradayPhase1NoCommissionPlans: Plan[] = [
    createPlan('$5,000', '$49', '4adff098-165d-4995-8a0a-e077f37d4a58', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$10,000', '$99', '441e85b1-846b-4e3a-9ed1-412dc6e7f97e', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '3 Days',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    // Additional plans...
];

// Intraday Plans - Phase 2 No Commission  
export const intradayPhase2NoCommissionPlans: Plan[] = [
    // Similar structure to the other plan types
];

// Instant Plans - Raw Spreads
export const instantRawSpreadsPlans: Plan[] = [
    createPlan('$500', '$40', 'bae40281-c680-418e-8515-c5212813a994', {
        'Profit Target': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Maximum Daily Loss': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Profit Split Up To': '50%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '24 Hours'
    }),
    createPlan('$1,500', '$120', '426aa519-5ecb-44c5-a09d-84b1106d2351', {
        'Profit Target': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Maximum Daily Loss': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Profit Split Up To': '50%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '24 Hours'
    }),
    createPlan('$2,500', '$200', 'ca86590a-91ea-4bd2-94eb-2897c610628a', {
        'Profit Target': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Maximum Daily Loss': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Profit Split Up To': '50%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '24 Hours'
    }),
    createPlan('$5,000', '$400', 'edd9e9b4-6d00-45d8-be1b-5d9a0d9bbaf7', {
        'Profit Target': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Maximum Daily Loss': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Profit Split Up To': '50%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '24 Hours'
    }),
    // More plans...
];

// Instant Plans - No Commission
export const instantNoCommissionPlans: Plan[] = [
    createPlan('$500', '$40', '297903c4-5d84-43ce-b793-b0b148f8c368', {
        'Profit Target': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Maximum Daily Loss': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': '<img src="https://fxci.com/assets/img/cross.svg" alt="fxci">',
        'Profit Split Up To': '50%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '24 Hours'
    }),
    // More plans...
];

// Standard Plans
export const standardPlans: Plan[] = [
    createPlan('$5,000', '$69', '17b88955-2f9d-465f-b781-d1c5db83ef0e', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': 'P1: 3, P2: 2',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$10,000', '$147', 'a961dfc5-28d1-412f-8979-192a430d0937', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': 'P1: 3, P2: 2',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$25,000', '$247', '47be4f6c-8d7f-4379-b274-e22aa4e4ac3f', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': 'P1: 3, P2: 2',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$50,000', '$357', '79582945-1bdf-4142-bce4-c9336568e94d', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': 'P1: 3, P2: 2',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$100,000', '$577', '0e19e305-5509-4693-a4e4-248e269f4264', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': 'P1: 3, P2: 2',
        'Profit Split Up To': '99%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    }),
    createPlan('$200,000', '$1097', '9a7a700b-bea5-4fd3-a77f-f074da728de4', {
        'Profit Target': 'P1: 8%, P2: 5%',
        'Maximum Daily Loss': '5%',
        'Maximum Overall Loss': '10%',
        'Balance Based Drawdown': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'Minimum Trading': 'P1: 3, P2: 2',
        'Profit Split Up To': '95%',
        'News Trading': '<img src="https://fxci.com/assets/img/checkmark.svg" alt="fxci">',
        'First Reward': '14 Days'
    })
];

// Export the plan categories with their preferences
export const planCategories: PlanCategory[] = [
    {
        key: 'swing',
        plans: swingPlans,
        preferences: [
            {
                key: 'default',
                label: 'Swing',
                plans: swingPlans
            }
        ]
    },
    {
        key: 'intraday',
        plans: intradayPhase1RawSpreadsPlans,
        preferences: [
            {
                key: 'phase_1_raw_spreads',
                label: '1-Phase Raw spreads',
                plans: intradayPhase1RawSpreadsPlans
            },
            {
                key: 'phase_2_raw_spreads',
                label: '2-Phase Raw spreads',
                plans: intradayPhase2RawSpreadsPlans
            },
            {
                key: 'phase_1_no_commission',
                label: '1-Phase NO Commission',
                plans: intradayPhase1NoCommissionPlans
            },
            {
                key: 'phase_2_no_commission',
                label: '2-Phase NO Commission',
                plans: intradayPhase2NoCommissionPlans
            }
        ]
    },
    {
        key: 'instant',
        plans: instantRawSpreadsPlans,
        preferences: [
            {
                key: 'raw_spreads',
                label: 'Raw spreads',
                plans: instantRawSpreadsPlans
            },
            {
                key: 'no_commission',
                label: 'NO Commission',
                plans: instantNoCommissionPlans
            }
        ]
    },
    {
        key: 'standard',
        plans: standardPlans,
        preferences: [
            {
                key: 'default',
                label: 'Standard',
                plans: standardPlans
            }
        ]
    }
];

export default planCategories; 