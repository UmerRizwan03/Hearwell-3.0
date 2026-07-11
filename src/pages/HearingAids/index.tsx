import SEO from '../../components/common/SEO';
import { HearingAidsShowcase } from './components/HearingAidsShowcase';
import { TechFeatures } from './components/TechFeatures';
import { FittingProcess } from './components/FittingProcess';
import { CTABand } from './components/CTABand';

const HearingAids = () => {
  return (
    <div className="hw-bg-studio">
      <SEO
        title="Premium Hearing Aids | Hearwell"
        description="Discover our range of advanced digital hearing aids including IIC, CIC, RIC, and BTE styles. Custom fitted for your unique hearing profile."
        url="https://hearwell.co.in/hearing-aids"
        keywords="buy hearing aids Kerala, invisible hearing aids Perumbavoor, Starkey Phonak Widex Kerala, digital hearing aids Perinjanam"
      />

      <HearingAidsShowcase />
      <TechFeatures />
      <FittingProcess />
      <CTABand />
    </div>
  );
};

export default HearingAids;
