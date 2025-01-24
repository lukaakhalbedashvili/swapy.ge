import { TransactionType } from "@/sections/Transactions";
import Home from "@/views/Home";

export default function HomePage({
  searchParams,
}: {
  searchParams: { tab: TransactionType };
}) {
  return <Home tab={searchParams.tab} />;
}
