"use client";

import Loading from "@/components/common/loading";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const WrapperLoading = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/en" || pathname === "/vi") {
      setLoading(false);
      return;
    }

    const handleStart = () => {
      document.body.style.overflow = "hidden";
      setLoading(true);
    };

    const handleComplete = () => {
      document.body.style.overflow = "auto";
      setLoading(false);
    };

    handleStart();

    const timer = setTimeout(() => {
      handleComplete();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <Loading />
        </div>
      )}
      {children}
    </>
  );
};

export default WrapperLoading;
