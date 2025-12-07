import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-primary/10 to-background-light dark:from-primary/20 dark:to-background-dark py-20 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">
          <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className="text-[#0d121c] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Global Market Research Reports & Consulting Services
            </h1>
            <h2 className="text-[#47679e] dark:text-gray-400 text-lg md:text-xl font-normal leading-normal max-w-2xl mx-auto">
              Providing data-driven insights for strategic business decisions to propel your business forward.
            </h2>
          </div>

          <label className="flex flex-col w-full max-w-[600px]">
            <div className="flex w-full items-stretch rounded-lg h-14 bg-white dark:bg-background-dark shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="text-[#47679e] dark:text-gray-400 flex items-center justify-center pl-4 pr-2">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#0d121c] dark:text-white focus:outline-0 border-0 bg-transparent h-full placeholder:text-[#47679e] dark:placeholder:text-gray-500 px-2 text-base"
                placeholder="Search for reports by keyword or industry..."
              />
              <div className="flex items-center justify-center pr-2">
                <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-blue-600 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </label>
        </div>
      </section>

      {/* Latest Reports Section */}
      <section className="py-20 px-4 max-w-[1200px] mx-auto w-full">
        <h2 className="text-[#0d121c] dark:text-white text-3xl font-bold leading-tight tracking-tight mb-10 text-center">
          Latest Reports
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Global Automotive Market Analysis",
              category: "Automotive Industry",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnPHpfrUp4tCCg94IJyr7xuw55wpt51jDYWAhHnoot36RzdqtjRiTgiQLXQNmJsK0MbTkY7LLsd5BDiyISy2FuVB7MuqiEPWcyVx8XkLkk2PsTRGl9iHUezsThPBI4je0icIwFqRTBnWCqv-f17huMhLIEBGOsfT1J2FnoRbSnocAkPYY-JfoozyNxADE6BXTL62r0T0s3v-NiOw1Y2WR-pzAQVgx61WjJQl9jpzyH46sBwL9tMwul-0GMkpgB8m55zfN1BHmlOUs",
            },
            {
              title: "Future of Renewable Energy Sources",
              category: "Energy Sector",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALwKc4pbiJVpW-zfSEzC7sWFAdK7yxvx3-VMBL1oUo0t8CC15f6I1eluWYk2WHlbDoOUE3JS-Kk6zT_9FxJkaHShrOuFGpMDOEyexpvKg4fULXgJZIfPeg4at87dTaOfMs-ViLQBTQAI_Sptz14G8u854SIslcB9ZGTtU2Ct3xJDI_2b31pmQIc_TOVMUf25ATyU7aTohU88nv0KiYSOd9xHRDQ14ft8Nke_dN6f7_bseuRie3lryTVHk7Q7uxUY4QPMvwfwgr_zo",
            },
            {
              title: "AI in Healthcare: A 2024 Perspective",
              category: "Healthcare & Pharma",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ8fulkohZm4ovsc4-pi4WveHyeYEkbLvJHY-ktK7QrA9J7AVWv4m3tEtFZtZLzwlWtqTphr8mEmKBUYk2GzdcAv9V47-1J8rrHtZfmixayg5BrHvsbbR7NX4DTZBF6-ZJ_D0h6m-35h3lDN7nItHNhmQoTdFtC2_nMlWjZa1Ewhuc2gSMnnc82TmF_GQ8L2AYsGdfa-Hm1vmOnO3vwPonl3-zDxK9DdsgPgBeraVHlHkPrp8SPVpmrob4iJYRX797L92E4jdg_8Q",
            },
            {
              title: "E-commerce Logistics Trends",
              category: "Retail and Consumer Goods",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9PFFdl5uQeHSA-idzgVVQvplQRAtF5zyXCLClOCkc7GB1csjS_N_tQdVgZ3lA5VLLQYdFIw4nHbZeM7biZWXE83UXSExaEO-knCthajxAc1AEaNDZSrrOgy4x7ZPu-uMaXrIna7655OFwhMv_RWMs3MHnYqSH2rrKC9AgA1lxSfa2Nh0OmZA0jrOPaweKipWNRoEiZ6gb3smEBMkcuetgY8Rh-cPq5EbR-n_rLJBYDecC15EqF83naOQCtwrhfKLUW5hRv1rJwzg",
            },
          ].map((report, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 rounded-xl bg-white dark:bg-gray-800/50 p-4 border border-primary/10 hover:border-primary/40 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{ backgroundImage: `url("${report.img}")` }}
              ></div>
              <div className="flex flex-col gap-1 flex-grow">
                <p className="text-[#0d121c] dark:text-white text-base font-semibold leading-normal">
                  {report.title}
                </p>
                <p className="text-[#47679e] dark:text-gray-400 text-sm font-normal">
                  {report.category}
                </p>
              </div>
              <Link
                to="/reports/1"
                className="text-primary text-sm font-medium mt-2 hover:underline flex items-center gap-1"
              >
                View Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/reports"
            className="flex items-center justify-center rounded-lg h-12 px-6 bg-[#e6ebf4] dark:bg-gray-700 text-[#0d121c] dark:text-white text-base font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            View All Reports
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-background-dark/50">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[#0d121c] dark:text-white text-3xl font-bold mb-12 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: "support_agent", title: "24/7 Support", desc: "Dedicated assistance anytime you need it." },
              { icon: "design_services", title: "Custom Study Design", desc: "Tailored research to meet your specific goals." },
              { icon: "security", title: "Data Security", desc: "Your information is protected with top-tier security." },
              { icon: "verified", title: "Quality Assurance", desc: "Rigorous checks ensure data accuracy and reliability." },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0d121c] dark:text-white">{item.title}</h3>
                <p className="text-[#47679e] dark:text-gray-400 text-sm max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 max-w-[1200px] mx-auto w-full px-4">
        <h2 className="text-[#0d121c] dark:text-white text-3xl font-bold mb-10 text-center">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { icon: "local_hospital", name: "Healthcare" },
            { icon: "devices", name: "Technology" },
            { icon: "directions_car", name: "Automotive" },
            { icon: "account_balance", name: "Finance" },
            { icon: "shopping_cart", name: "Retail" },
            { icon: "bolt", name: "Energy" },
            { icon: "flight", name: "Aerospace" },
            { icon: "biotech", name: "Chemicals" },
            { icon: "construction", name: "Construction" },
            { icon: "fastfood", name: "Food & Beverage" },
          ].map((industry, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white dark:bg-gray-800/50 hover:bg-primary/5 dark:hover:bg-primary/20 transition-all cursor-pointer border border-gray-100 dark:border-gray-700"
            >
              <span className="material-symbols-outlined text-primary text-4xl">{industry.icon}</span>
              <p className="text-sm font-medium text-[#0d121c] dark:text-white">{industry.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-transparent">
        <div className="max-w-[900px] mx-auto text-center relative">
          <h2 className="text-[#0d121c] dark:text-white text-3xl font-bold mb-10">
            What Our Clients Say
          </h2>
          <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <p className="text-[#47679e] dark:text-gray-300 text-lg md:text-xl italic leading-relaxed">
              "Metastat Insight provided us with invaluable data that directly informed our market entry strategy. Their team was professional, responsive, and delivered beyond our expectations."
            </p>
            <div className="mt-8">
              <p className="font-bold text-[#0d121c] dark:text-white text-lg">Jane Doe</p>
              <p className="text-sm text-[#47679e] dark:text-gray-500">VP of Strategy, Innovate Corp</p>
            </div>
          </div>
          
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md text-[#0d121c] dark:text-white hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md text-[#0d121c] dark:text-white hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;