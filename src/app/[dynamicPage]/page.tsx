import Home from "@/views/Home";
import { Metadata } from "next";
import React from "react";

const pages = [
  {
    slug: "plus-qulebis-gayidva",
    title: "plus qulebis gayidva",
    description: "plus qulebis gayidva",
  },
  {
    slug: "plus-qulebis-gakidva",
    title: "plus qulebis gakidva",
    description: "plus qulebis gakidva",
  },
  {
    slug: "plus-qulebis-gacvla",
    title: "plus qulebis gacvla",
    description: "plus qulebis gacvla",
  },
  {
    slug: "plus-qulebis-gadacvla",
    title: "plus qulebis gadacvla",
    description: "PLUS qulebis gadacvla",
  },
  {
    slug: "qulebis-gadacvla",
    title: "qulebis gadacvla",
    description: "qulebis gadacvla",
  },
  {
    slug: "ქულების-გადაცვლა",
    title: "ქულების გადაცვლა",
    description: "ქულების გადაცვლა",
  },
  {
    slug: "პლუს-ქულების-გადაცვლა",
    title: "პლუს ქულების გადაცვლა",
    description: "პლუს ქულების გადაცვლა",
  },
];

export async function generateStaticParams() {
  return pages.map((page) => ({
    dynamicPage: page.slug,
  }));
}

export const generateMetadata = ({
  params,
}: {
  params: { dynamicPage: string };
}): Metadata => {
  const page = pages.find((p) => p.slug === params.dynamicPage);
  return {
    title: page?.title,
    description: page?.description,
  };
};

const Page = () => {
  return <Home />;
};

export default Page;
