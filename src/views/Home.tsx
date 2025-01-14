import AreWeScammers from "@/components/AreWeScammers";
import AboutPlusPoints from "@/sections/AboutPlusPoints";
import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
import Team from "@/sections/Team";
import Transactions from "@/sections/Transactions";

const Home = () => {
  return (
    <main className="flex flex-col items-center bg-background text-white  pt-[12%] lg:pt-[4%] lg:px-[25%] w-full px-2">
      <Transactions title="პლუს ქულების გაყიდვა" />

      <FAQ />

      <AboutPlusPoints />

      <AboutUs />

      <Team />

      <AreWeScammers />

      <Contact />
    </main>
  );
};

export default Home;
