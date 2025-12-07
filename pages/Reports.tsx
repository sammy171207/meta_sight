import React from "react";
import { Link } from "react-router-dom";

const Reports: React.FC = () => {
  return (
    <div className="flex flex-1 w-full max-w-[1440px] mx-auto">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col gap-6 p-6 border-r border-[#E0E0E0] dark:border-gray-700 bg-white dark:bg-background-dark">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Categories</h3>
        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-3 rounded-lg bg-primary/10 dark:bg-primary/20 px-4 py-3 text-primary font-medium">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            <span>All Reports</span>
          </button>
          {[
            { name: "Healthcare & Life Sciences", icon: "health_and_safety" },
            { name: "Technology & Media", icon: "devices" },
            { name: "Consumer Goods", icon: "shopping_cart" },
            { name: "Financial Services", icon: "account_balance" },
            { name: "Energy & Resources", icon: "bolt" },
          ].map((cat, idx) => (
            <button
              key={idx}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-[#333333] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
            >
              <span className="material-symbols-outlined text-primary">{cat.icon}</span>
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-[#111318] dark:text-white mb-6">
            Industry Market Research Reports
          </h1>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {["Industry: All", "Region: Global", "Date: Last Year"].map((filter, idx) => (
              <button
                key={idx}
                className="flex h-10 items-center gap-2 rounded-lg bg-white dark:bg-gray-800 border border-[#E0E0E0] dark:border-gray-600 px-4 text-sm font-medium text-[#333333] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {filter}
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
            ))}
            <button className="ml-auto text-sm font-medium text-primary hover:underline">
              Clear Filters
            </button>
          </div>
        </div>

        {/* Report Cards */}
        <div className="flex flex-col gap-6">
          {[
            {
              id: 1,
              title: "Global Artificial Intelligence in Healthcare Market 2024",
              desc: "A comprehensive analysis of the AI market in the healthcare sector, covering trends, key players, and future projections.",
              date: "Jan 2024",
              tags: ["TECHNOLOGY", "HEALTHCARE"],
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8jyfOAgI0TrpBQ-B3Ym3IhIcTE2rPpsBfN_T2DSAZK4h7E8Nd9YmKhwk4R_gi7zHZKX5QAh_3vkLdWMeRHfeKRzyBMvDiqZyAaCS3o8soByuzCbs2b0TG1sWKaz5WSlf1Gb8XOBdlYxOw38_VbOry0EqRSLVLC0VRNEq0yBJ94lzpZ6JyG171Sgk7QK8qbEdsZXy9kx_kiK1Oi2JErrZEYu66-xUbWnOy0BPhhBxEy12bhnow8dnMSfbjTaCzguPEb8xTgh32C6w",
            },
            {
              id: 2,
              title: "Renewable Energy Market Outlook 2024-2030",
              desc: "In-depth analysis of solar, wind, and hydroelectric power markets. Includes policy impacts and investment opportunities.",
              date: "Dec 2023",
              tags: ["ENERGY & RESOURCES"],
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKem0y-DgY-MfLGFqiiI5iBBJur4J1Ht8K9bcN_rPQLgF5xQf_snOAtigasvCctQ4pcS0gmC65p3bhMwyAMsct3uC_68ieBvMrHFguXgtZhrVjssI0oj6x7eAYeWLjNoKRRaCOO_ImOhPWa1STyzHQpr3UQW1pOSEJhRGFEaNOLBizIHJnn84DyDRU2aYsZeg0fhS0nQe2IXUvKBSVk4VK4YcqHc8Sx4Scm8ielQ_IqZcmg4oN1jJebY4BFEc6xUu1DrtC7Dn9zzo",
            },
            {
              id: 3,
              title: "Future of Fintech: A Regional Analysis",
              desc: "Exploring the growth of digital banking, blockchain, and insuretech across North America, Europe, and APAC regions.",
              date: "Nov 2023",
              tags: ["FINANCIAL SERVICES"],
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsuztExPvB5Y60K7hAL5EDi16nLOnka_BD2TOvD2_y-C71uExJZqkUoJEwI2cy4tI2wChGecFw1c_nMVmMXgRXTzy7yzw3FOgJ9kaPBkvg7hHDpZN4lf568woD9l8evxwFAeQn83V_3u2gNSiYNa-AyXRxtjThrwuWUBySiB6XyD7okTegi5SszS8vuFnyNh1bYfLu--1hXGiqdVETLQo5UJuI4AsXkvz6mJbmoJ7x5U-heY7i1XnT5LsNt5YSI-4cCpBQEcrnMMw",
            },
          ].map((report) => (
            <div
              key={report.id}
              className="flex flex-col md:flex-row rounded-xl border border-[#E0E0E0] dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div
                className="w-full md:w-1/3 h-48 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url("${report.img}")` }}
              ></div>
              <div className="flex-1 p-6 flex flex-col justify-center gap-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  {report.tags.map((tag, i) => (
                    <React.Fragment key={i}>
                      <span className="text-primary">{tag}</span>
                      {i < report.tags.length - 1 && <span className="text-gray-400">•</span>}
                    </React.Fragment>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#111318] dark:text-white leading-tight">
                  {report.title}
                </h3>
                <p className="text-[#333333] dark:text-gray-300 leading-relaxed">
                  {report.desc}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Published: {report.date}</p>
                <div className="flex gap-3 mt-2">
                  <Link
                    to={`/reports/${report.id}`}
                    className="h-10 px-5 rounded-lg bg-primary text-white text-sm font-medium flex items-center hover:bg-blue-600 transition-colors"
                  >
                    View Report
                  </Link>
                  <button className="h-10 px-5 rounded-lg border-2 border-primary text-primary bg-transparent text-sm font-medium hover:bg-primary/5 transition-colors">
                    Download Sample
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">1</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm">2</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm">3</button>
          <span className="px-2 text-gray-500">...</span>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm">12</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;