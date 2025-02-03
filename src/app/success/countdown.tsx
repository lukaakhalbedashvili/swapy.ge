"use client";
import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

const Countdown = () => {
  const router = useRouter();
  const second = 60 * 15;
  const [countdown, setCountdown] = useState(second);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const formatCountdown = () => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <>
      <p className="text-main font-semibold my-5">{formatCountdown()}</p>
      <div className="mt-2 w-full bg-header rounded-full h-1">
        <div
          className="h-1 bg-gradient-to-r from-active to-main rounded-full transition-all duration-1000 ease-linear"
          style={{ width: `${(countdown / second) * 100}%` }}
        />
      </div>
    </>
  );
};

export default Countdown;
