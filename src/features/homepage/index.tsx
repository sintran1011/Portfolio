"use client";

import Wrapper from "@/components/common/wrapper";
import useLenis from "@/hooks/useLenis";

const HomePage = () => {
  useLenis();

  return <h1 className="text-red-600">Hi I am Sin</h1>;
};

export default HomePage;
