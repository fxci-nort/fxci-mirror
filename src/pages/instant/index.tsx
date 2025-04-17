import Plans from '@/components/plans';
import { Hero, Rule, Challenge, WhyFxci } from '@/components/instant';
import { useScrollToPlansLinks } from '@/shared/components';

function InstantPage() {
  useScrollToPlansLinks();

  return (
    <section id="model-instant" className="model-page">
      <Hero />
      <Rule />
      <Challenge />
      <Plans />
      <WhyFxci />
    </section>
  );
}

export default InstantPage;
