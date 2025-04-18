import { TrackingLink } from '@/shared/components';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from '@/shared/params/useParams';
import { BASE_URL } from '@/shared/config/base-url';

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      setMatches(media.matches);

      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
    return undefined;
  }, [query]);

  return matches;
};

interface PlanData {
  accountSize: string;
  fee: string;
  profitTarget: string;
  maxDailyLoss: string;
  maxOverallLoss: string;
  balanceBasedDrawdown: boolean;
  minTradingDays: string;
  profitSplitUpTo: string;
  newsTrading: boolean;
  firstReward: string;
}

// Define types for preference keys
type SwingPreferenceKey = 'default';
type IntradayPreferenceKey =
  | 'phase_1_raw_spreads'
  | 'phase_2_raw_spreads'
  | 'phase_1_no_commission'
  | 'phase_2_no_commission';
type InstantPreferenceKey = 'raw_spreads' | 'no_commission';
type PreferenceKey = SwingPreferenceKey | IntradayPreferenceKey | InstantPreferenceKey;

// Default empty data structure with proper typing
const defaultPlansData = {
  swing: {
    default: [
      {
        accountSize: '$5,000',
        fee: '$69',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: 'P1: 3, P2: 2',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$10,000',
        fee: '$147',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: 'P1: 3, P2: 2',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$25,000',
        fee: '$247',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: 'P1: 3, P2: 2',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$50,000',
        fee: '$357',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: 'P1: 3, P2: 2',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$100,000',
        fee: '$577',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: 'P1: 3, P2: 2',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$200,000',
        fee: '$1097',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: 'P1: 3, P2: 2',
        profitSplitUpTo: '95%',
        newsTrading: true,
        firstReward: '14 Days',
      },
    ],
  },
  intraday: {
    phase_1_raw_spreads: [
      {
        accountSize: '$5,000',
        fee: '$59',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$10,000',
        fee: '$109',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$25,000',
        fee: '$199',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$50,000',
        fee: '$309',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$100,000',
        fee: '$509',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$200,000',
        fee: '$959',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
    ],
    phase_2_raw_spreads: [
      {
        accountSize: '$5,000',
        fee: '$49',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$10,000',
        fee: '$99',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$25,000',
        fee: '$189',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$50,000',
        fee: '$299',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$100,000',
        fee: '$499',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$200,000',
        fee: '$949',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
    ],
    phase_1_no_commission: [
      {
        accountSize: '$5,000',
        fee: '$59',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$10,000',
        fee: '$109',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$25,000',
        fee: '$199',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$50,000',
        fee: '$309',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$100,000',
        fee: '$509',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$200,000',
        fee: '$959',
        profitTarget: '10%',
        maxDailyLoss: '3%',
        maxOverallLoss: '5%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
    ],
    phase_2_no_commission: [
      {
        accountSize: '$5,000',
        fee: '$49',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$10,000',
        fee: '$99',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$25,000',
        fee: '$189',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$50,000',
        fee: '$299',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$100,000',
        fee: '$499',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
      {
        accountSize: '$200,000',
        fee: '$949',
        profitTarget: 'P1: 8%, P2: 5%',
        maxDailyLoss: '5%',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '3 Days',
        profitSplitUpTo: '99%',
        newsTrading: true,
        firstReward: '14 Days',
      },
    ],
  },
  instant: {
    raw_spreads: [
      {
        accountSize: '$500',
        fee: '$40',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$1,500',
        fee: '$120',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$2,500',
        fee: '$200',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$5,000',
        fee: '$400',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$10,000',
        fee: '$700',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$25,000',
        fee: '$1,600',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$50,000',
        fee: '$3,000',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$100,000',
        fee: '$6,000',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$200,000',
        fee: '$12,000',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$300,000',
        fee: '$15,000',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
    ],
    no_commission: [
      {
        accountSize: '$500',
        fee: '$40',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$1,500',
        fee: '$120',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$2,500',
        fee: '$200',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$5,000',
        fee: '$400',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$10,000',
        fee: '$700',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$25,000',
        fee: '$1,600',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$50,000',
        fee: '$3,000',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$100,000',
        fee: '$6,000',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$200,000',
        fee: '$12,000',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
      {
        accountSize: '$300,000',
        fee: '$15,000',
        profitTarget: '×',
        maxDailyLoss: '×',
        maxOverallLoss: '10%',
        balanceBasedDrawdown: true,
        minTradingDays: '×',
        profitSplitUpTo: '50%',
        newsTrading: true,
        firstReward: '24 Hours',
      },
    ],
  },
};

interface PlanProps {
  plansData?: {
    swing: Record<SwingPreferenceKey, PlanData[]>;
    intraday: Record<IntradayPreferenceKey, PlanData[]>;
    instant: Record<InstantPreferenceKey, PlanData[]>;
  };
  onPlanSelect?: (plan: PlanData) => void;
}

const PlanSection: React.FC<PlanProps> = ({ plansData = defaultPlansData }) => {
  const { addParamsToUrl } = useParams();
  // Определяем, является ли устройство мобильным
  const isMobile = useMediaQuery('(max-width: 768px)');

  // State for active tab (swing, intraday, instant)
  const [activeTab, setActiveTab] = useState<'swing' | 'intraday' | 'instant'>('swing');

  // State for active preferences with proper typing
  const [swingPreference, setSwingPreference] = useState<SwingPreferenceKey>('default');
  const [intradayPreference, setIntradayPreference] =
    useState<IntradayPreferenceKey>('phase_1_raw_spreads');
  const [instantPreference, setInstantPreference] = useState<InstantPreferenceKey>('raw_spreads');

  // Selected account size for mobile view
  const [selectedAccount, setSelectedAccount] = useState('5000');

  // Refs для скролла
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const plansListRef = useRef<HTMLDivElement>(null);

  // Получаем текущие планы на основе активной вкладки и предпочтения
  const getCurrentPlans = (): PlanData[] => {
    // Safely access data with fallbacks at each level
    if (!plansData) return [];

    const tabData = plansData[activeTab];
    if (!tabData) return [];

    let preferenceKey: PreferenceKey;

    if (activeTab === 'swing') {
      preferenceKey = swingPreference;
    } else if (activeTab === 'intraday') {
      preferenceKey = intradayPreference;
    } else {
      preferenceKey = instantPreference;
    }

    // Now TypeScript knows this is a valid key for the specific tab type
    // @ts-expect-error - Still need this because TypeScript can't narrow the type correctly
    return tabData[preferenceKey] || [];
  };

  // Устанавливаем первый счет из списка при изменении таба или предпочтения
  useEffect(() => {
    const plans = getCurrentPlans();
    if (plans.length > 0) {
      const firstAccountSizeValue = plans[0].accountSize.replace(/[^\d]/g, '');
      setSelectedAccount(firstAccountSizeValue);
    }
  }, [activeTab, swingPreference, intradayPreference, instantPreference]);

  // Обеспечиваем скролл к выбранному элементу на мобильных устройствах
  useEffect(() => {
    if (isMobile && plansListRef.current) {
      const selectedItem = plansListRef.current.querySelector(
        `[data-account="${selectedAccount}"]`
      );
      if (selectedItem) {
        const container = plansListRef.current;
        const itemLeft = (selectedItem as HTMLElement).offsetLeft;
        const containerWidth = container.offsetWidth;
        const itemWidth = (selectedItem as HTMLElement).offsetWidth;

        // Центрируем элемент в контейнере
        container.scrollLeft = itemLeft - containerWidth / 2 + itemWidth / 2;
      }
    }
  }, [selectedAccount, isMobile]);

  // Обработчик горизонтального скролла для мобильных устройств
  const handleTouchScroll = () => {
    if (!plansListRef.current) return;

    const container = plansListRef.current;
    const centerX = container.scrollLeft + container.offsetWidth / 2;

    // Находим элемент, который сейчас в центре экрана
    let closestItemAccount = '';
    let minDistance = Infinity;

    const items = container.querySelectorAll('.mb-plans-list-item');
    items.forEach(item => {
      const itemElem = item as HTMLElement;
      const itemLeft = itemElem.offsetLeft;
      const itemWidth = itemElem.offsetWidth;
      const itemCenter = itemLeft + itemWidth / 2;
      const distance = Math.abs(centerX - itemCenter);

      const account = itemElem.dataset.account;

      if (distance < minDistance && account) {
        minDistance = distance;
        closestItemAccount = account;
      }
    });

    if (closestItemAccount) {
      setSelectedAccount(closestItemAccount);
    }
  };

  // Handler для выбора плана
  const handlePlanSelection = (): void => {
    window.location.href = addParamsToUrl(BASE_URL);
  };

  return (
    <section id="plans">
      <div className="container mb-container-scroll">
        <div className="plans__title-wrap">
          <h2 className="section-title">CHOOSE THE BEST PLAN</h2>
          <TrackingLink
            href="https://fxci.com/compare-challenges"
            className="compare_challenges link-class"
          >
            Compare Challenges
          </TrackingLink>
        </div>

        {/* Desktop View */}
        <div className="scroll-wrap mb-none">
          <div className="plans-wrap">
            <div className="plans-header">
              {/* Plan Tabs */}
              <div className="plans-tabs">
                <div
                  className={`plans-tab tab-name ${activeTab === 'swing' ? 'active' : ''}`}
                  onClick={() => setActiveTab('swing')}
                >
                  <img src="/assets/img/swing-logo.png" alt="" /> Swing
                </div>
                <div
                  className={`plans-tab tab-name ${activeTab === 'intraday' ? 'active' : ''}`}
                  onClick={() => setActiveTab('intraday')}
                >
                  <img src="/assets/img/intraday-logo.png" alt="" /> Intraday
                </div>
                <div
                  className={`plans-tab tab-name ${activeTab === 'instant' ? 'active' : ''}`}
                  onClick={() => setActiveTab('instant')}
                >
                  <img src="/assets/img/instant-logo.png" alt="" /> Instant
                </div>
              </div>

              {/* Intraday Filters */}
              <div
                className={`plans__filters plans__filters-intraday ${
                  activeTab === 'intraday' ? 'active' : ''
                }`}
                style={{ display: activeTab === 'intraday' ? 'flex' : 'none' }}
              >
                <div className="plans__filters-title">Select Preference</div>
                <div className="plans__filters-list plans__filters-list-intraday">
                  <div
                    className={`plans__filters-item plans__filters-item-intraday ${
                      intradayPreference === 'phase_1_raw_spreads' ? 'active' : ''
                    }`}
                    onClick={() => setIntradayPreference('phase_1_raw_spreads')}
                  >
                    <input
                      type="radio"
                      name="intraday_preference"
                      id="phase_1_raw_spreads"
                      checked={intradayPreference === 'phase_1_raw_spreads'}
                      onChange={() => {}}
                    />
                    <label htmlFor="phase_1_raw_spreads">
                      1-Phase
                      <br />
                      Raw spreads
                    </label>
                  </div>
                  <div
                    className={`plans__filters-item plans__filters-item-intraday ${
                      intradayPreference === 'phase_2_raw_spreads' ? 'active' : ''
                    }`}
                    onClick={() => setIntradayPreference('phase_2_raw_spreads')}
                  >
                    <input
                      type="radio"
                      name="intraday_preference"
                      id="phase_2_raw_spreads"
                      checked={intradayPreference === 'phase_2_raw_spreads'}
                      onChange={() => {}}
                    />
                    <label htmlFor="phase_2_raw_spreads">
                      2-Phase
                      <br />
                      Raw spreads
                    </label>
                  </div>
                  <div
                    className={`plans__filters-item plans__filters-item-intraday ${
                      intradayPreference === 'phase_1_no_commission' ? 'active' : ''
                    }`}
                    onClick={() => setIntradayPreference('phase_1_no_commission')}
                  >
                    <input
                      type="radio"
                      name="intraday_preference"
                      id="phase_1_no_commission"
                      checked={intradayPreference === 'phase_1_no_commission'}
                      onChange={() => {}}
                    />
                    <label htmlFor="phase_1_no_commission">
                      1-Phase
                      <br />
                      NO Commission
                    </label>
                  </div>
                  <div
                    className={`plans__filters-item plans__filters-item-intraday ${
                      intradayPreference === 'phase_2_no_commission' ? 'active' : ''
                    }`}
                    onClick={() => setIntradayPreference('phase_2_no_commission')}
                  >
                    <input
                      type="radio"
                      name="intraday_preference"
                      id="phase_2_no_commission"
                      checked={intradayPreference === 'phase_2_no_commission'}
                      onChange={() => {}}
                    />
                    <label htmlFor="phase_2_no_commission">
                      2-Phase
                      <br />
                      NO Commission
                    </label>
                  </div>
                </div>
              </div>

              {/* Swing Filters */}
              <div
                className={`plans__filters plans__filters-swing ${
                  activeTab === 'swing' ? 'active' : ''
                }`}
                style={{ display: 'none' }}
              >
                <div className="plans__filters-title">Select Preference</div>
                <div className="plans__filters-list plans__filters-list-swing">
                  <div
                    className={`plans__filters-item plans__filters-item-swing ${
                      swingPreference === 'default' ? 'active' : ''
                    }`}
                    onClick={() => setSwingPreference('default')}
                  >
                    <input
                      type="radio"
                      name="swing_preference"
                      id="swing_default"
                      checked={swingPreference === 'default'}
                      onChange={() => {}}
                    />
                    <label htmlFor="swing_default">Swing</label>
                  </div>
                </div>
              </div>

              {/* Instant Filters */}
              <div
                className={`plans__filters plans__filters-instant ${
                  activeTab === 'instant' ? 'active' : ''
                }`}
                style={{ display: activeTab === 'instant' ? 'flex' : 'none' }}
              >
                <div className="plans__filters-title">Select Preference</div>
                <div className="plans__filters-list plans__filters-list-instant">
                  <div
                    className={`plans__filters-item plans__filters-item-instant ${
                      instantPreference === 'raw_spreads' ? 'active' : ''
                    }`}
                    onClick={() => setInstantPreference('raw_spreads')}
                  >
                    <input
                      type="radio"
                      name="instant_preference"
                      id="instant_raw_spreads"
                      checked={instantPreference === 'raw_spreads'}
                      onChange={() => {}}
                    />
                    <label htmlFor="instant_raw_spreads">Raw spreads</label>
                  </div>
                  <div
                    className={`plans__filters-item plans__filters-item-instant ${
                      instantPreference === 'no_commission' ? 'active' : ''
                    }`}
                    onClick={() => setInstantPreference('no_commission')}
                  >
                    <input
                      type="radio"
                      name="instant_preference"
                      id="instant_no_commission"
                      checked={instantPreference === 'no_commission'}
                      onChange={() => {}}
                    />
                    <label htmlFor="instant_no_commission">NO Commission</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Plans Table */}
            <div className="plans-table">
              <div
                className={`plans-table__detail plans-table__detail-upd ${
                  activeTab === 'instant' ? 'big-table' : ''
                }`}
                id="plan-name"
              >
                <div className="plans-table__row head" id="desktop-accounts-row">
                  <div className="plans-table__col title left col-padding-title">Account Size</div>

                  {/* Table columns will be generated from data */}
                  {getCurrentPlans().map((plan: PlanData, index: number) => (
                    <div
                      key={index}
                      className={`plans-table__col title center ${
                        activeTab === 'instant' ? 'instant-account' : 'standard-account'
                      }`}
                    >
                      {plan.accountSize}
                      <button
                        className="plans-table__btn submit-plan-btn"
                        onClick={() => handlePlanSelection()}
                        style={{
                          border: 'none',
                          fontSize: activeTab === 'instant' ? '14px' : '18px',
                        }}
                      >
                        Get plan <span>Fee: {plan.fee}</span>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Table rows */}
                <div className="plans-table__row">
                  <div className="plans-table__col border title-2 col-padding-title">
                    Profit Target
                  </div>
                  {getCurrentPlans().map((plan: PlanData, index: number) => (
                    <div
                      key={index}
                      className="plans-table__col border-dashed center standard-cell"
                    >
                      {plan.profitTarget}
                    </div>
                  ))}
                </div>

                <div className="plans-table__row">
                  <div className="plans-table__col border title-2 col-padding-title">
                    Maximum Daily Loss
                  </div>
                  {getCurrentPlans().map((plan: PlanData, index: number) => (
                    <div
                      key={index}
                      className="plans-table__col border-dashed center standard-cell"
                    >
                      {plan.maxDailyLoss}
                    </div>
                  ))}
                </div>

                <div className="plans-table__row">
                  <div className="plans-table__col border title-2 col-padding-title">
                    Maximum Overall Loss
                  </div>
                  {getCurrentPlans().map((plan: PlanData, index: number) => (
                    <div
                      key={index}
                      className="plans-table__col border-dashed center standard-cell"
                    >
                      {plan.maxOverallLoss}
                    </div>
                  ))}
                </div>

                <div className="plans-table__row">
                  <div className="plans-table__col border title-2 col-padding-title">
                    Balance Based Drawdown
                  </div>
                  {getCurrentPlans().map((plan: PlanData, index: number) => (
                    <div
                      key={index}
                      className="plans-table__col border-dashed center standard-cell"
                    >
                      {plan.balanceBasedDrawdown && (
                        <img src="/assets/img/checkmark.svg" alt="fxci" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="plans-table__row">
                  <div className="plans-table__col border title-2 col-padding-title">
                    Minimum Trading Days
                  </div>
                  {getCurrentPlans().map((plan: PlanData, index: number) => (
                    <div
                      key={index}
                      className="plans-table__col border-dashed center standard-cell"
                    >
                      {plan.minTradingDays}
                    </div>
                  ))}
                </div>

                <div className="plans-table__row">
                  <div className="plans-table__col border title-2 col-padding-title">
                    Profit Split Up To
                  </div>
                  {getCurrentPlans().map((plan: PlanData, index: number) => (
                    <div
                      key={index}
                      className="plans-table__col border-dashed center standard-cell"
                    >
                      {plan.profitSplitUpTo}
                    </div>
                  ))}
                </div>

                <div className="plans-table__row">
                  <div className="plans-table__col border title-2 col-padding-title">
                    News Trading
                  </div>
                  {getCurrentPlans().map((plan: PlanData, index: number) => (
                    <div
                      key={index}
                      className="plans-table__col border-dashed center standard-cell"
                    >
                      {plan.newsTrading && <img src="/assets/img/checkmark.svg" alt="fxci" />}
                    </div>
                  ))}
                </div>

                <div className="plans-table__row">
                  <div className="plans-table__col border title-2 col-padding-title">
                    First Reward
                  </div>
                  {getCurrentPlans().map((plan: PlanData, index: number) => (
                    <div
                      key={index}
                      className="plans-table__col border-dashed center standard-cell"
                    >
                      {plan.firstReward}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="mb-plans-section lg-none" ref={mobileScrollRef}>
          <div className="mb-pd-r-20">
            <div className="mb-plan-list-tab">
              <div
                className={`mb-plans-tab ${activeTab === 'swing' ? 'active' : ''}`}
                onClick={() => setActiveTab('swing')}
              >
                Swing
              </div>
              <div
                className={`mb-plans-tab ${activeTab === 'intraday' ? 'active' : ''}`}
                onClick={() => setActiveTab('intraday')}
              >
                Intraday
              </div>
              <div
                className={`mb-plans-tab ${activeTab === 'instant' ? 'active' : ''}`}
                onClick={() => setActiveTab('instant')}
              >
                Instant
              </div>
            </div>
          </div>

          {/* Mobile Intraday Preferences */}
          <div
            className={`mb-plan-reference mb-plan-reference-intraday ${
              activeTab === 'intraday' ? 'active' : 'd-none'
            }`}
          >
            <div className="mb-plan-reference-title">Select Preference</div>
            <div className="scroll-wrap">
              <div className="mb-plan-reference-list">
                <div
                  className={`mb-plans__filters-item mb-plans__filters-item-intraday ${
                    intradayPreference === 'phase_1_raw_spreads' ? 'active' : ''
                  }`}
                  onClick={() => setIntradayPreference('phase_1_raw_spreads')}
                >
                  <input
                    type="radio"
                    name="mb_intraday_preference"
                    id="mb_phase_1_raw_spreads"
                    checked={intradayPreference === 'phase_1_raw_spreads'}
                    onChange={() => {}}
                  />
                  <label htmlFor="mb_phase_1_raw_spreads">
                    1-Phase
                    <br />
                    Raw spreads
                  </label>
                </div>
                <div
                  className={`mb-plans__filters-item mb-plans__filters-item-intraday ${
                    intradayPreference === 'phase_2_raw_spreads' ? 'active' : ''
                  }`}
                  onClick={() => setIntradayPreference('phase_2_raw_spreads')}
                >
                  <input
                    type="radio"
                    name="mb_intraday_preference"
                    id="mb_phase_2_raw_spreads"
                    checked={intradayPreference === 'phase_2_raw_spreads'}
                    onChange={() => {}}
                  />
                  <label htmlFor="mb_phase_2_raw_spreads">
                    2-Phase
                    <br />
                    Raw spreads
                  </label>
                </div>
                <div
                  className={`mb-plans__filters-item mb-plans__filters-item-intraday ${
                    intradayPreference === 'phase_1_no_commission' ? 'active' : ''
                  }`}
                  onClick={() => setIntradayPreference('phase_1_no_commission')}
                >
                  <input
                    type="radio"
                    name="mb_intraday_preference"
                    id="mb_phase_1_no_commission"
                    checked={intradayPreference === 'phase_1_no_commission'}
                    onChange={() => {}}
                  />
                  <label htmlFor="mb_phase_1_no_commission">
                    1-Phase
                    <br />
                    NO Commission
                  </label>
                </div>
                <div
                  className={`mb-plans__filters-item mb-plans__filters-item-intraday ${
                    intradayPreference === 'phase_2_no_commission' ? 'active' : ''
                  }`}
                  onClick={() => setIntradayPreference('phase_2_no_commission')}
                >
                  <input
                    type="radio"
                    name="mb_intraday_preference"
                    id="mb_phase_2_no_commission"
                    checked={intradayPreference === 'phase_2_no_commission'}
                    onChange={() => {}}
                  />
                  <label htmlFor="mb_phase_2_no_commission">
                    2-Phase
                    <br />
                    NO Commission
                  </label>
                </div>
              </div>
            </div>
            <div className="scroll-wrap plan-price-filter">
              {getCurrentPlans().map((plan: PlanData) => {
                const accountSizeValue = plan.accountSize.replace(/[^\d]/g, '');
                return (
                  <div
                    key={accountSizeValue}
                    className={`plan-price-filter-item ${
                      selectedAccount === accountSizeValue ? 'active' : ''
                    }`}
                    data-target-account={accountSizeValue}
                    onClick={() => setSelectedAccount(accountSizeValue)}
                  >
                    {plan.accountSize}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Swing Preferences */}
          <div
            className={`mb-plan-reference mb-plan-reference-swing ${
              activeTab === 'swing' ? 'active' : 'd-none'
            }`}
          >
            <div className="scroll-wrap plan-price-filter">
              {getCurrentPlans().map((plan: PlanData) => {
                const accountSizeValue = plan.accountSize.replace(/[^\d]/g, '');
                return (
                  <div
                    key={accountSizeValue}
                    className={`plan-price-filter-item ${
                      selectedAccount === accountSizeValue ? 'active' : ''
                    }`}
                    data-target-account={accountSizeValue}
                    onClick={() => setSelectedAccount(accountSizeValue)}
                  >
                    {plan.accountSize}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Instant Preferences */}
          <div
            className={`mb-plan-reference mb-plan-reference-instant ${
              activeTab === 'instant' ? 'active' : 'd-none'
            }`}
          >
            <div className="mb-plan-reference-title">Select Preference</div>
            <div className="scroll-wrap">
              <div className="mb-plan-reference-list">
                <div
                  className={`mb-plans__filters-item mb-plans__filters-item-instant ${
                    instantPreference === 'raw_spreads' ? 'active' : ''
                  }`}
                  onClick={() => setInstantPreference('raw_spreads')}
                >
                  <input
                    type="radio"
                    name="mb_instant_preference"
                    id="mb_instant_raw_spreads"
                    checked={instantPreference === 'raw_spreads'}
                    onChange={() => {}}
                  />
                  <label htmlFor="mb_instant_raw_spreads">Raw spreads</label>
                </div>
                <div
                  className={`mb-plans__filters-item mb-plans__filters-item-instant ${
                    instantPreference === 'no_commission' ? 'active' : ''
                  }`}
                  onClick={() => setInstantPreference('no_commission')}
                >
                  <input
                    type="radio"
                    name="mb_instant_preference"
                    id="mb_instant_no_commission"
                    checked={instantPreference === 'no_commission'}
                    onChange={() => {}}
                  />
                  <label htmlFor="mb_instant_no_commission">NO Commission</label>
                </div>
              </div>
            </div>
            <div className="scroll-wrap plan-price-filter">
              {getCurrentPlans().map((plan: PlanData) => {
                const accountSizeValue = plan.accountSize.replace(/[^\d]/g, '');
                return (
                  <div
                    key={accountSizeValue}
                    className={`plan-price-filter-item ${
                      selectedAccount === accountSizeValue ? 'active' : ''
                    } ${Number(accountSizeValue) < 5000 ? 'plan-price-filter-item-instant' : ''}`}
                    data-target-account={accountSizeValue}
                    onClick={() => setSelectedAccount(accountSizeValue)}
                  >
                    {plan.accountSize}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile plans list */}
          <div className="mb-container-scroll">
            <div
              className="mb-plans-list scroll-wrap"
              ref={plansListRef}
              onScroll={handleTouchScroll}
            >
              {getCurrentPlans().map((plan: PlanData, index: number) => {
                const accountSizeValue = plan.accountSize.replace(/[^\d]/g, '');
                return (
                  <div
                    key={index}
                    data-account={accountSizeValue}
                    className={`mb-plans-list-item ${
                      activeTab === 'instant' ? 'plan-instant' : ''
                    }`}
                    style={{ display: 'block' }} // Показываем все планы для скролла
                  >
                    <div className="mb-plans-list-item-header">
                      <div className="mb-plans-list-item-header-title">Account Size</div>
                      <div className="mb-plans-list-item-price">{plan.accountSize}</div>
                      <button
                        className="mb-plans-list-item-btn"
                        onClick={() => handlePlanSelection()}
                        style={{ border: 'none' }}
                      >
                        Get plan <span>Fee: {plan.fee}</span>
                      </button>
                    </div>
                    <div className="mb-plans-list-item-body">
                      <div className="mb-plans-list-item-body-row">
                        <div className="lft">Profit Target</div>
                        <div className="riht">{plan.profitTarget}</div>
                      </div>
                      <div className="mb-plans-list-item-body-row">
                        <div className="lft">Maximum Daily Loss</div>
                        <div className="riht">{plan.maxDailyLoss}</div>
                      </div>
                      <div className="mb-plans-list-item-body-row">
                        <div className="lft">Maximum Overall Loss</div>
                        <div className="riht">{plan.maxOverallLoss}</div>
                      </div>
                      <div className="mb-plans-list-item-body-row">
                        <div className="lft">Balance Based Drawdown</div>
                        <div className="riht">
                          {plan.balanceBasedDrawdown && (
                            <img src="/assets/img/checkmark.svg" alt="fxci" />
                          )}
                        </div>
                      </div>
                      <div className="mb-plans-list-item-body-row">
                        <div className="lft">Minimum Trading Days</div>
                        <div className="riht">{plan.minTradingDays}</div>
                      </div>
                      <div className="mb-plans-list-item-body-row">
                        <div className="lft">Profit Split Up To</div>
                        <div className="riht">{plan.profitSplitUpTo}</div>
                      </div>
                      <div className="mb-plans-list-item-body-row">
                        <div className="lft">News Trading</div>
                        <div className="riht">
                          {plan.newsTrading && <img src="/assets/img/checkmark.svg" alt="fxci" />}
                        </div>
                      </div>
                      <div className="mb-plans-list-item-body-row">
                        <div className="lft">First Reward</div>
                        <div className="riht">{plan.firstReward}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
