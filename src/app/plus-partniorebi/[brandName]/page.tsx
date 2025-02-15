import { Metadata } from "next";
import React from "react";
import comps from "@/data/comps.json";
import Link from "next/link";

interface PageProps {
  params: {
    brandName: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const brand = comps.stores.find(
    (comp) =>
      comp.brand_name.toLowerCase().replace(/ /g, "-") === params.brandName
  );

  return {
    title: `${brand?.brand_name} - Plus ქულების პარტნიორი`,
    description: brand?.plus_points_info,
  };
}

export async function generateStaticParams() {
  return comps.stores.map((comp) => ({
    brandName: comp.brand_name
      .toLowerCase()
      .replace(/[&+]/g, "and")
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, ""),
  }));
}

const Page = async ({ params }: PageProps) => {
  const brand = comps.stores.find(
    (comp) =>
      comp.brand_name
        .toLowerCase()
        .replace(/[&+]/g, "and")
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "") === params.brandName
  );

  if (!brand) {
    throw new Error(`Brand ${params.brandName} not found`);
  }

  const randomStores = comps.stores
    .filter((store) => store.brand_name !== brand.brand_name)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <main className="flex flex-col items-center w-full lg:px-[25%] px-4 py-10 bg-background">
      <section className="text-white w-full text-center py-8 rounded-lg mb-10 flex flex-col items-center">
        <h1 className="text-xl font-bold">
          {brand.brand_name} - Plus ქულების პარტნიორი
        </h1>
        <p className="mt-6 text-md leading-relaxed">{brand.plus_points_info}</p>
      </section>

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm">
        <h2 className="text-xl font-semibold mb-4">ხელმისაწვდომი პროდუქცია</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {brand.items.map((item, index) => (
            <li
              key={index}
              className="p-2 bg-background rounded-lg text-center"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm">
        <h2 className="text-xl font-semibold mb-4">
          Plus ქულების ყიდვა-გაყიდვა
        </h2>
        <p className="mb-4">
          გსურთ Plus ქულების ყიდვა ან გაყიდვა? ჩვენს პლატფორმაზე შეგიძლიათ
          მარტივად იყიდოთ ან გაყიდოთ Plus ქულები საუკეთესო ფასად.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            prefetch={true}
            href="/buy"
            className="bg-primary text-main px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all whitespace-nowrap"
          >
            ქულების ყიდვა
          </Link>
          <Link
            prefetch={true}
            href="/"
            className="text-main px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all whitespace-nowrap"
          >
            ქულების გაყიდვა
          </Link>
        </div>
      </section>

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm">
        <h2 className="text-xl font-semibold mb-4">მაღაზიის შესახებ</h2>
        <p className="leading-relaxed whitespace-pre-line">
          {brand.fulldescription}
        </p>
      </section>

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md mb-8 bg-body text-sm">
        <h2 className="text-xl font-semibold mb-4">დამატებითი ინფორმაცია</h2>
        <ul className="space-y-2">
          <li>
            <span className="font-semibold">კატეგორია:</span> {brand.category}
          </li>
          <li>
            <span className="font-semibold">მომსახურების ტიპი:</span>{" "}
            {brand.location_type}
          </li>
          <li>
            <span className="font-semibold">ბოლოს განახლდა:</span>{" "}
            {new Date(brand.last_updated).toLocaleDateString("ka-GE")}
          </li>
        </ul>
      </section>

      <section className="text-gray-400 w-full p-6 rounded-lg shadow-md bg-body text-sm">
        <h2 className="text-xl font-semibold mb-4">სხვა პარტნიორები</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {randomStores.map((store) => (
            <Link
              prefetch={true}
              key={store.brand_name}
              href={`/plus-partniorebi/${store.brand_name
                .toLowerCase()
                .replace(/[&+]/g, "and")
                .replace(/[^a-z0-9-]/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-|-$/g, "")}`}
              className="p-3 bg-background rounded-lg text-center hover:bg-opacity-80 transition-all text-main"
            >
              {store.brand_name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
