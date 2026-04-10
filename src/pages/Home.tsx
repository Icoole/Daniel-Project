import { AlertBanner } from '@/components/layout/AlertBanner';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { PromoCards } from '@/components/sections/PromoCards';
import { MembershipCTA } from '@/components/sections/MembershipCTA';
import { PlatinumPromo } from '@/components/sections/PlatinumPromo';
import { ArticleGrid } from '@/components/sections/ArticleGrid';
import { SpotlightSection } from '@/components/sections/SpotlightSection';
import veteransHockeyImage from '@/assets/veterans-hockey.jpg';

// Image URLs - using placeholder images for demo
const images = {
  hero: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  autoLoan: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop',
  membership: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
  platinumCard: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop',
};

export function Home() {
  return (
    <>
      <AlertBanner
        message="Enrollment for Navy Federal's paycheck assistance program remains open for those eligible members who are concerned about any disruption in Federal pay. For more information, please click"
        linkText="here."
        linkHref="#"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection
          title="Just in: TIME names Navy Federal #1 in credit cards"
          ctaText="Explore our award-winning cards"
          ctaHref="/credit-cards"
          imageSrc={images.hero}
          badgeText="TIME America's Best 2026"
        />

        <ProductGrid />

        <FeatureSection
          label="CHECK RATES"
          title="Easily apply online: most decisions in seconds."
          linkText="View our rates"
          linkHref="/auto-loans"
          sideTitle="Good for up to 90 days"
          sideDescription="Apply for preapproval in 5 easy steps and know your budget upfront."
          sideLinkText="Finance it your way"
          sideLinkHref="/auto-loans"
          imageSrc={images.autoLoan}
        />

        <PromoCards />

        <MembershipCTA imageSrc={images.membership} />

        <PlatinumPromo imageSrc={images.platinumCard} />

        <ArticleGrid />

        <SpotlightSection
          label="SUPPORTING VETERANS WITH DISABILITIES"
          headline="Hooked on hockey"
          cardLabel="AIR FORCE VETERAN"
          cardTitle="Craig Fitzpatrick"
          cardSubtitle="Blind hockey player"
          cardDescription="With support from Navy Federal Credit Union and the NHL, a legally blind Air Force Veteran raises awareness and builds support for the fast-growing sport of blind hockey."
          ctaText="Read his story"
          ctaHref="#"
          imageSrc={veteransHockeyImage}
        />
      </div>
    </>
  );
}
