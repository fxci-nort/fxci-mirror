import Hero from '@/components/main/hero';
import TopFeatures from '@/components/main/top-features';
import WhyFXCI from '@/components/main/why-fxci';
import Challenges from '@/components/main/challenges';
import AvailablePayment from '@/components/main/available-payment';
import Plans from '@/components/plans';
import WhyChooseFXCI from '@/components/main/whe-choose';
import TraderFeedback from '@/components/main/trader-feedback';
import Proof from '@/components/main/proof';
import Subscribe from '@/components/main/subscribe';
import Become from '@/components/main/become';
import { useScrollToPlansLinks } from '@/shared/components';

function MainPage() {
  useScrollToPlansLinks();

  return (
    <>
      <Hero />
      <div className="bg-wrap">
        <TopFeatures />
        <WhyFXCI />
        <Challenges />
        <AvailablePayment />
        <Plans />
        <WhyChooseFXCI />
        <TraderFeedback />
        <Proof />
        <Subscribe />
        <Become />
      </div>
    </>
  );
}

export default MainPage;
