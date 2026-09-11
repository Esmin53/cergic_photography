"use client"

import AboutMe from "@/components/AboutMe";
import Banner from "@/components/banner";
import Footer from "@/components/Footer";
import HomepageDisplayCards from "@/components/HomepageDisplayCards";
import Navbar from "@/components/Navbar";
import Prices from "@/components/Prices";
import { HOMEPAGE_DISPLAY_ARRAYS } from "@/utils/data";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark")

  return (
    <div className={`flex flex-col flex-1 bg-background text-text text-base font-mono min-h-screen ${theme}`}>
        
        <Navbar setTheme={setTheme} theme={theme}/>
        <Banner />
        <AboutMe />
        <Prices />
        <div className="flex flex-col flex-1 py-6 items-center">
          <HomepageDisplayCards images_array={HOMEPAGE_DISPLAY_ARRAYS.weddings.images} banner={HOMEPAGE_DISPLAY_ARRAYS.weddings.banner} inverted={false} title="Svadbe" _id="svadbe"/>
          <HomepageDisplayCards images_array={HOMEPAGE_DISPLAY_ARRAYS.portraits.images} banner={HOMEPAGE_DISPLAY_ARRAYS.portraits.banner} inverted={true} title="Portreti" _id="portreti"/>
          <HomepageDisplayCards images_array={HOMEPAGE_DISPLAY_ARRAYS.nature.images} banner={HOMEPAGE_DISPLAY_ARRAYS.nature.banner} inverted={false} title="Eventi" _id="eventi"/>
        </div>
        <Footer />

    </div>
  );
}
