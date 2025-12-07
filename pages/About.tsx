import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Mission Hero */}
      <div className="w-full px-4 py-16">
        <div
          className="max-w-[1200px] mx-auto rounded-2xl overflow-hidden min-h-[480px] relative flex items-center justify-center text-center p-8 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 95, 249, 0.85), rgba(10, 42, 91, 0.95)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoSb9d2iUeFdLGbUH7MPo8ZCiBhapS1IfiXyfsyp61NkRjI2nvR7MDt7zsZL6_ceiu3Q9dgasGdbwB3RMyLHUgNW3T891h-5EqPLh2oAmM1qfstU7zB_bYxRb1oo69c35d0ssGAp1_4HHPO87S2Pql2fLGGcCR_C4scSP72psWzpWYrpqsFYyP36aZtpwN0AIodI5v-uIgZ4bQM5ezGNRypXDAxyW8yLJP_UscN6VAP7K7B6OhCkzDwc9FqNvHVwniWUTMxdF0vhA")`,
          }}
        >
          <div className="relative z-10 max-w-4xl flex flex-col gap-6">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Our Mission: To empower global businesses with precise, actionable market insights.
            </h1>
            <p className="text-blue-100 text-lg md:text-xl">
              Learn more about our journey, values, and the people driving innovation in global market research.
            </p>
            <button className="mx-auto mt-4 px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Our Journey */}
      <section className="py-16 px-4 max-w-[800px] mx-auto w-full">
        <h2 className="text-[#0d121c] dark:text-white text-4xl font-bold text-center mb-4">Our Journey</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg">
          Tracing our path from a visionary startup to a global leader in market research and data analytics.
        </p>

        <div className="flex flex-col">
          {[
            { year: "2010", title: "Company Founded", icon: "flag" },
            { year: "2014", title: "First International Office", icon: "public" },
            { year: "2018", title: "Launch of InsightPlatform", icon: "rocket_launch" },
            { year: "2023", title: "100th Global Partner", icon: "handshake" },
          ].map((item, idx, arr) => (
            <div key={idx} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                {idx < arr.length - 1 && <div className="w-[2px] bg-gray-200 dark:bg-gray-700 h-full min-h-[40px] my-1"></div>}
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-[#0d121c] dark:text-white">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-transparent">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[#0d121c] dark:text-white text-4xl font-bold text-center mb-4">Our Core Values</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg max-w-3xl mx-auto">
            Our values are the foundation of our identity, guiding our actions and defining our commitment to excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Precision", icon: "target", desc: "We are committed to the highest standards of accuracy and detail in our data collection." },
              { title: "Professionalism", icon: "business_center", desc: "Our team operates with unwavering integrity, maintaining confidentiality." },
              { title: "Analytics", icon: "analytics", desc: "We leverage cutting-edge analytical techniques to transform complex data into intelligence." },
            ].map((val, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl">{val.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0d121c] dark:text-white">{val.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 px-4 max-w-[1200px] mx-auto w-full text-center">
        <h2 className="text-[#0d121c] dark:text-white text-4xl font-bold mb-4">Our Global Presence</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-3xl mx-auto">
          With a network spanning continents, we provide localized expertise on a global scale.
        </p>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ6anXT4JQAydrJ07hmgUrEFIbWFHGJASB_pSJFII25RzIs0oZswVb-_y9tHCF5YJJdq8l7iuixbiYWUNwuv8H_4AJ35wqDFp8y1jtBB6QJKKfGt8Ei5r1dFHDGiifwNc6fnyvmdTVAcWKrWKgSg9KtWIjg2sAx90ExvJ2MsxngfI7VkXfcJDpyoT5WF9MT5R-1jY7e1gFIS0gA37qFT93TSa1GB5D4uTGAToqIwjX2RgLGj99Crb9ITBCbVyDb-YJEKrVEKFHy4I"
          alt="World Map"
          className="w-full h-auto object-contain max-h-[600px] mx-auto"
        />
      </section>
    </div>
  );
};

export default About;