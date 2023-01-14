import MainLayout from "../components/layout/mainLayout";
import Hero from "../components/landingpage/hero";

export default function Home() {
  return (
    <MainLayout>
      <div className="h-screen">
        <div id="hero">
          <Hero />
        </div>
      </div>
    </MainLayout>
  )
}
