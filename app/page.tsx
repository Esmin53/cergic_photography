import AboutMe from "@/components/AboutMe";
import Banner from "@/components/banner";
import Footer from "@/components/Footer";
import HomepageDisplayCards from "@/components/HomepageDisplayCards";
import Navbar from "@/components/Navbar";
import { HOMEPAGE_DISPLAY_ARRAYS } from "@/utils/data";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background text-text text-base font-mono min-h-screen">
        
        <Navbar />
        <Banner />

        <AboutMe />
        <div className="flex flex-col flex-1 py-6 items-center">
          <HomepageDisplayCards images_array={HOMEPAGE_DISPLAY_ARRAYS.weddings.images} banner={HOMEPAGE_DISPLAY_ARRAYS.weddings.banner} inverted={false} title="Weddings"/>
          <HomepageDisplayCards images_array={HOMEPAGE_DISPLAY_ARRAYS.portraits.images} banner={HOMEPAGE_DISPLAY_ARRAYS.portraits.banner} inverted={true} title="Portraits"/>
          <HomepageDisplayCards images_array={HOMEPAGE_DISPLAY_ARRAYS.nature.images} banner={HOMEPAGE_DISPLAY_ARRAYS.nature.banner} inverted={false} title="Nature"/>
        </div>
        <Footer />

    </div>
  );
}
