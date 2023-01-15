import MainLayout from "../components/layout/mainLayout";
import Hero from "../components/landingpage/hero";
import ServiceSection from "../components/landingpage/services";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <div id="hero">
          <Hero />
        </div>
        <div id="services">
          <ServiceSection />
        </div>
      </div>
    </MainLayout>
  )
}
