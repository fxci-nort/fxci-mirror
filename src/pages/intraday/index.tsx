import Plans from '@/components/plans';
import { Hero, Challenge, Advantages, WhyFxci, Banners } from '@/components/intraday';
import { useScrollToPlansLinks } from '@/shared/components';
function IntradayPage() {
  useScrollToPlansLinks();

  return (
    <section id="model-intraday" className="model-page">
      <Hero />
      <Challenge />
      <Advantages />
      <Plans />
      <WhyFxci />
      <Banners />
    </section>
  );
}

export default IntradayPage;
