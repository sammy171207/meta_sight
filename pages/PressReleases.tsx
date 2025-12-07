import React from "react";

const PressReleases: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="border-b border-gray-200 dark:border-gray-800 pb-8 mb-10">
        <h1 className="text-4xl font-black text-[#111318] dark:text-white mb-4">Press Releases</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore our latest announcements, research findings, and corporate news.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Feed */}
        <div className="lg:col-span-2">
          {/* Sorting */}
          <div className="flex gap-4 mb-8">
            <button className="flex items-center gap-2 h-9 px-4 rounded-full bg-primary/10 text-primary font-medium text-sm">
              Most Recent <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
            <button className="flex items-center gap-2 h-9 px-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-sm hover:bg-gray-200 dark:hover:bg-gray-700">
              Most Relevant <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
          </div>

          <div className="flex flex-col gap-10">
            {[
              {
                date: "October 26, 2024",
                title: "Metastat Insight Unveils Groundbreaking AI-Powered Market Forecasting Model",
                desc: "New predictive analytics platform leverages machine learning to deliver unprecedented accuracy in trend analysis for the tech sector.",
                tags: ["#MarketTrends", "#AI", "#Technology"],
              },
              {
                date: "September 15, 2024",
                title: "New Report on Consumer Goods Highlights Shift Towards Sustainability",
                desc: "Our latest industry analysis reveals a significant pivot in consumer purchasing behavior, with a growing preference for eco-friendly products.",
                tags: ["#ConsumerGoods", "#Sustainability"],
              },
              {
                date: "August 02, 2024",
                title: "Metastat Insight Expands Operations into Asia-Pacific Market",
                desc: "The opening of our new Singapore office marks a key milestone in our global expansion strategy, enhancing our service delivery in the region.",
                tags: ["#CorporateNews", "#Expansion"],
              },
              {
                date: "July 21, 2024",
                title: "Breakthrough in Pharmaceutical Research Analytics Announced",
                desc: "Our life sciences division has developed a new data model that accelerates drug discovery timelines by identifying promising compounds with greater efficiency.",
                tags: ["#Healthcare", "#Pharma"],
              },
            ].map((pr, idx) => (
              <div key={idx} className="flex flex-col gap-3 pb-8 border-b border-gray-200 dark:border-gray-800 last:border-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">{pr.date}</p>
                <a href="#" className="text-2xl font-bold text-[#111318] dark:text-white hover:text-primary transition-colors leading-tight">
                  {pr.title}
                </a>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {pr.desc}
                </p>
                <div className="flex gap-2 flex-wrap mt-2">
                  {pr.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 text-gray-500 disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">1</button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">2</button>
            <span className="px-2 text-gray-500">...</span>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">12</button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="font-bold text-lg mb-4 text-[#111318] dark:text-white">Filter by Year</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="font-semibold text-primary">2024</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">2023</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">2022</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">2021</a>
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="font-bold text-lg mb-4 text-[#111318] dark:text-white">Filter by Topic</h3>
            <div className="flex flex-col gap-2 text-sm">
              {["Technology", "Healthcare", "Consumer Goods", "Finance", "Corporate News"].map((topic) => (
                <a key={topic} href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  {topic}
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="font-bold text-lg mb-4 text-[#111318] dark:text-white">Featured Insights</h3>
            <div className="flex flex-col gap-4">
              <div className="group cursor-pointer">
                <p className="text-xs font-bold text-primary uppercase mb-1 group-hover:underline">REPORT</p>
                <p className="text-sm font-medium text-[#111318] dark:text-white group-hover:text-primary">The Future of AI in Market Research</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-xs font-bold text-primary uppercase mb-1 group-hover:underline">ARTICLE</p>
                <p className="text-sm font-medium text-[#111318] dark:text-white group-hover:text-primary">Navigating Economic Headwinds: A 2024 Outlook</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PressReleases;