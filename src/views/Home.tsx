import AreWeScammers from "@/components/AreWeScammers";
import AboutPlusPoints from "@/sections/AboutPlusPoints";
import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
import Team from "@/sections/Team";
import Transactions, { TransactionType } from "@/sections/Transactions";

const Home = ({ tab }: { tab: TransactionType }) => {
  return (
    <main className="flex flex-col items-center bg-background text-white lg:px-[25%] w-full px-2">
      <Transactions title="პლუს ქულების ყიდვა / გაყიდვა" tab={tab} />

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
