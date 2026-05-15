import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ImmersiveSection from "../components/ImmersiveSection";
import FeaturedArrangements from "../components/FeaturedArrangements";
import WeddingSection from "../components/WeddingSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="bg-[#fff8f3] text-[#2d201c]">
      <Navbar />
      <Hero />
      <ImmersiveSection />
      <FeaturedArrangements />
      <WeddingSection />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;