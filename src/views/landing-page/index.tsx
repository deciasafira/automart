import Container from '@components/container.js';
import { AboutUsView } from '@views/about-us/view/index.js';
import { CategoryOptionsView } from '@views/category-options/view/index.js';
import { DistributorCenterView } from '@views/distributor-center/view/index.js';
import { HomeView } from '@views/home/view/index.js';
import { MobileAppView } from '@views/mobile-app/view/index.js';
import { OurPartnersView } from '@views/our-partners/view/index.js';
import { OurServicesView } from '@views/our-services/view/index.js';

const LandingPage = () => {
  return (
    <>
      <Container>
        <HomeView />
      </Container>
      <Container>
        <AboutUsView />
      </Container>
      <Container>
        <OurServicesView />
      </Container>
      <Container>
        <CategoryOptionsView />
      </Container>
      <Container>
        <DistributorCenterView />
      </Container>
      <Container>
        <OurPartnersView />
      </Container>
      <Container>
        <MobileAppView />
      </Container>
    </>
  );
};

LandingPage.displayName = 'Landing Page';
export default LandingPage;
