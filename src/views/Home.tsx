import AreWeScammers from "@/components/AreWeScammers";
import Chat from "@/components/Chat";
import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Team from "@/sections/Team";
import Transactions from "@/sections/Transactions";

const Home = () => {
  return (
    <main className="flex flex-col items-center bg-background text-white w-full">
      <Header />

      <Transactions />

      <FAQ />

      <AboutUs />

      <Team />

      <AreWeScammers />

      <Contact />

      <Footer />

      <Chat />
    </main>
  );
};

export default Home;
