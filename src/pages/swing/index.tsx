import { Hero, Rule, Banner } from '@/components/swing';
import Plans from '@/components/plans';
import { useScrollToPlansLinks } from '@/shared/components';

function SwingPage() {
  useScrollToPlansLinks();

  return (
    <section id="model-swing" className="model-page">
      <Hero />
      <Rule />
      <Plans />
      <Banner />
    </section>
  );
}

export default SwingPage;
