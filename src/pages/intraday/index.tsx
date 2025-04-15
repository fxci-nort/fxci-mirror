import Plans from '@/components/plans';
import { Hero, Challenge, Advantages, WhyFxci, Banners } from '@/components/intraday';

function Intraday() {
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

export default Intraday;
