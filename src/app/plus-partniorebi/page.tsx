import comps from "@/data/comps.json";
import Link from "next/link";

const page = () => {
  const stores = comps.stores;

  return (
    <div className="p-4 bg-background text-gray-400 flex flex-col items-center py-10">
      <h1 className="text-xl font-bold text-white mb-10">
        Plus ქულების პარტნიორები ბრენდები
      </h1>

      {stores.map((store) => (
        <Link
          href={`/plus-partniorebi/${store.brand_name
            .toLowerCase()
            .replace(/[&+]/g, "and")
            .replace(/[^a-z0-9-]/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "")}`}
          key={store.store_id}
          className="flex items-center justify-between p-4 border-b transition-colors md:w-1/2 cursor-pointer hover:border-main hover:text-main"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">
              {store.brand_name}
            </h3>
            <p className=" text-sm mt-1">
              {store.plus_points_info || "პლუს პარტნიორი კომპანია"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
