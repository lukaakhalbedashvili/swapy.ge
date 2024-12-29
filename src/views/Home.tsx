import AreWeScammers from "@/components/AreWeScammers";
import Chat from "@/components/Chat";
import AboutPlusPoints from "@/sections/AboutPlusPoints";
import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Team from "@/sections/Team";
import Transactions from "@/sections/Transactions";

const Home = () => {
  return (
    <main className="flex flex-col items-center bg-background text-white  pt-[20%] lg:pt-[4%] lg:px-[25%] w-full">
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
