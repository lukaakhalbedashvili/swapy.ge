import AreWeScammers from "@/components/AreWeScammers";
import AboutPlusPoints from "@/sections/AboutPlusPoints";
import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
import Team from "@/sections/Team";
import Transactions from "@/sections/Transactions";
import { TransactionType } from "@/server-actions/server_actions_types";

const Buy = () => {
  return (
    <main className="flex flex-col items-center bg-background text-white lg:px-[25%] w-full px-2">
      <Transactions tab={TransactionType.BUY} />

      <FAQ />

      <AboutPlusPoints />

      <AboutUs />

      <Team />

      <AreWeScammers />

      <Contact />
    </main>
  );
};

export default Buy;
