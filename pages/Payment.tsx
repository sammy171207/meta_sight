import React from "react";

const Payment: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111318] dark:text-white mb-3">
            Choose Your Payment Method
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Select a secure payment option to complete your purchase.
          </p>
        </div>

        <div className="w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="cursor-pointer group flex items-center justify-center p-6 rounded-lg border-2 border-primary bg-primary/5 shadow-[0_0_10px_2px_rgba(6,95,249,0.4)] transition-all">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8fZ1TaMvaxXhUg-Htc4b4THN-epYnsCBQTsy0f5BEE71TazdrbN8Zz_L5tMECVATg_3fwTqW8ngAKWsxO5mQq5DehHQ2-dP7nMBoCLsRk-8AO0Gzbr424xLKZNYbxQxngvx9z6_uvAfs1ugvJzaA75AWwPSwHsKVQkLJHLiWGlKDixZG_BXoYgXMWh31WN8q3fn7UTXcvPfFL1ltwmcMjm3rsVf5qa6n9Na1HVYuXI2CxqKNPiPXmqFkG9GGR236E_MLg3O9fbRU"
                alt="Stripe"
                className="h-8 object-contain"
              />
            </div>
            
            <div className="cursor-pointer group flex items-center justify-center p-6 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzDvooj9q7VvvZnxWTX4QS_9isMk5Vad48aoM4EDoQlNv3GjJBAyE4U7hC4gcE_dBGUawakP7H3j-s3uA92ekO_GsrvNc7EkmmDpp_c19mf2pNEBE9EaYnZ1Fs1-pxTd8mnbLZTMdyy1jYdh_Da6jwqdKQiYyyJnRR6Z-PJC5B3k8AlZdBYeYlUdtsuJSazEEOGnjyJXX8_DUiHgb4CX5uJ-CGFd_lPjIXRO9wv3kWkT0Ua_7hXio7OhM0eEQjdfMBaBEYmP7oQrc"
                alt="Razorpay"
                className="h-8 object-contain"
              />
            </div>

            <div className="cursor-pointer group flex items-center justify-center p-6 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIQ7LA20vN52xf9dv3KeKaH0NH0jmtuu8NrXThlHwOmFzqTMbNuRwZ1eMm4y-bYs3YkWp3LVFiTAdEmnMZvLJA5iTdqBAOsqA43f183hjKH1eU5J1TY4m9UFGmA4DxeruW0_pEmOES0mTN81iBRjabe97w-WFnKOM--aiB6XKu2PimnzbNckRQ3dfdxundDmj5NPSfbi53xFmJaZ9SwHxQ12Xv_jj9yng8uk6E4OsyQtBQeBajvXNh63eAJQrysd1o4yBSSR4e4To"
                alt="PayPal"
                className="h-8 object-contain"
              />
            </div>

            <div className="cursor-pointer group flex flex-col items-center justify-center p-6 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all gap-2 text-center">
              <span className="material-symbols-outlined text-primary text-4xl">credit_card</span>
              <span className="text-sm font-medium text-[#111318] dark:text-white">Credit/Debit Cards</span>
            </div>

            <div className="cursor-pointer group flex flex-col items-center justify-center p-6 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all gap-2 text-center">
               <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4HlwvcGWc1yhaWR5PykPZ50mlQlAnTup5hBoPqyGAIObJS-pseMJqv-GIvEn5AN25PR-m7imu_HpHithGyMbe6V_zZ4DLlhU4FTkMsA_mLxnCV_HPBcDqVMWAW8TGXjtG0MIljGW6AW_U19BJwC93rFfcmxQmcQqMeqkSrowKb-KHFQiNWLQgE9sz-_fSXii5ov2NOfNhXSgjRejhIr5R8LLLvxPt9iGcFqwtCBDo8W8l77p8Jd4O0TM_3TU1tlGJpyAA1YBb1eg"
                alt="UPI"
                className="h-8 object-contain mb-1"
              />
              <span className="text-sm font-medium text-[#111318] dark:text-white">UPI Payments</span>
            </div>

            <div className="cursor-pointer group flex flex-col items-center justify-center p-6 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all gap-2 text-center">
              <span className="material-symbols-outlined text-primary text-4xl">public</span>
              <span className="text-sm font-medium text-[#111318] dark:text-white">International Payments</span>
            </div>
          </div>

          <button className="w-full mt-10 h-12 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-md">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;