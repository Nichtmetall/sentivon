import MainLayout from "../components/layout/mainLayout";
import Hero from "../components/landingpage/hero";
import ServiceSection from "../components/landingpage/services";
import Hero2 from "../components/landingpage/hero-2";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <div id="hero">
          <Hero2 />
        </div>
        <div id="services">
          <ServiceSection />
        </div>
      </div>
    </MainLayout>
  )
}
