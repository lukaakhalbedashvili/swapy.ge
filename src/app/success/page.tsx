"use client";
import { CheckCircle, ArrowRight } from "lucide-react";
import Countdown from "./countdown";

export default function PaymentSuccess({
  searchParams,
}: {
  searchParams: { govId: string };
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-body to-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-body backdrop-blur-lg rounded-2xl p-8 text-center animate-fade-up border border-body">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-success/10 p-3 ring-4 ring-success/20">
              <CheckCircle className="w-12 h-12 text-success animate-bounce" />
            </div>
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-main to-secondary bg-clip-text text-transparent mb-4">
            გადახდა წარმატებულია!
          </h1>

          <p className="text-gray-400 mb-8">
            მადლობა შენაძენისთვის. ტრანზაქცია წარმატებით დასრულდა.
          </p>

          <div className="space-y-4">
            <div className="bg-body/50 backdrop-blur rounded-xl p-4 border border-header">
              <p className="text-sm text-gray-400">
                პლუს ქულები მობაილ ბანკში პირად ნომერზე {searchParams.govId} 15
                წუთის განმავლობაში აგესახებათ
              </p>

              <Countdown />
            </div>

            <a
              href="/"
              className="w-full group bg-gradient-to-r from-main to-secondary text-white rounded-xl py-4 px-6 font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              დაბრუნება მთავარ გვერდზე
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
