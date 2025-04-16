import Plans from '@/components/plans';
import { Hero, Challenge, Advantages, WhyFxci, Banners } from '@/components/intraday';

function IntradayPage() {
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
