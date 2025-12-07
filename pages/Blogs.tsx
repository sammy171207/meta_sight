import React from "react";

const Blogs: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap justify-between items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-[#111318] dark:text-white tracking-tight mb-3">
              Metastat Insight Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Your source for the latest in market research, data analysis, and consumer trends.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3">
          <button className="h-10 px-5 rounded-full bg-primary/10 text-primary font-bold text-sm">All</button>
          {["Market Trends", "Data Analysis", "Case Studies", "Technology"].map((cat) => (
            <button
              key={cat}
              className="h-10 px-5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "The Future of AI in Data Analysis",
              author: "John Doe",
              date: "Oct 26, 2023",
              snippet: "Discover how artificial intelligence is revolutionizing the way we interpret complex datasets and drive business decisions.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD96A0b5M2KnIAJswlUr1kETX8WFoMTKqI8nYlF3fCn0QlyHAoCzKJjidkdf2StpQ71SAJcoADhWBlWcB0cxpyZu7sR7RQ5ANcekkAFBETxRHDKLmqKjNg6q603eCuYcThVQ3G3OUQ8b4CVYSFZS2e8mbIFAAQJb6tktTQFWLNQoaVFHBDB6CZuI7Ki2_d4efdaoI545QdRE5wycGFAwdkVGX-MpDKMMl8kFqk1rXBS-3CWgFafy1EfL5BVF0BITmD_MPUiivBZNS8",
            },
            {
              title: "Consumer Behavior Trends for 2024",
              author: "Jane Smith",
              date: "Oct 22, 2023",
              snippet: "A deep dive into the shifting priorities and purchasing habits of the modern consumer in a post-pandemic world.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCABE_JakN4Q4TtiOeH9Zlm5wAZgRmNLm2VgNwgOAQfIwiuWp2Qd50oCekkYVnidwt17DSFBnljgVslNMRJMgjZ-JLtAWUv338Ya7K4QMVJJRY-4KO8-lgby_wEeOAIDBdazsHvexWG46eNtTeLwAdYTlIqfl4e8j3XdsuU7h4vNNM7f2I9sit4Cbi8Wom2FEkB6zZBvNVJzfaGuaPiFeCW7QEcIJIzFWnqmj3P932ELe4YVRxA_M-zDBPxCgbOzOnGCb3yQlq3g0",
            },
            {
              title: "Case Study: Unlocking Growth with Competitive Intelligence",
              author: "Admin",
              date: "Oct 19, 2023",
              snippet: "Learn how Metastat Insight helped a leading tech firm identify new market opportunities and gain a competitive edge.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsssTijpRvPeL3cuYymC7FF7H4nO4JtF6WVLm51fe_YFCOTzH1iIrXSTbCti6OnwIR9TA_n-ZOO3BTXqwNPNpehWFE254PxHXlwcBzp_9fF_Te30LR9Pg0XosEKyWG10V5D87ibxz4aHi_aD-eDE4tvo9eiQ94WnP7rbQR5xlTCxh6ARRztyPukbpMdi1cMpxoONnqYLdeH8YOJZjHebotC1wyOSr5sVWnW1AblGFXC-QfuT5ui0OpZcXjLuPXhjFUDYK4LEYwS5k",
            },
            {
              title: "Navigating B2B Research Complexities",
              author: "John Doe",
              date: "Oct 15, 2023",
              snippet: "Strategies for effective and insightful research in the business-to-business sector, from SMEs to enterprise-level.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5BPIINM_O9bUdb-_GHvJaFWEMkIRb7YC63fJ-bnIgQPuZk_skLb9HF9EkN-T32VrDDBVflJ6oKo7p2iFO_cj9DAjPhB8sbX89pSzYHN6-ggq8qI8B5a6ruOCU-xqRSPsgS3dQbu5XqqlJGDNZebk_cU6JW8Tfn3o80FkJ_LFQv6RVV9Sx1oTzF8IqNMDM8IJ1Z3PBnpRgk4TJ4Z5z5CrWOp68GHYyDujW3FJsJMUZ-fD3YITLvzK8ss_HOioHhwg4b5KDG4Gv1JU",
            },
            {
              title: "The Rise of Sustainable Consumerism",
              author: "Emily White",
              date: "Oct 11, 2023",
              snippet: "Exploring the impact of environmental consciousness on brand loyalty and market dynamics across industries.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHZbFhZJe9yF6KAkzJl1bc_BEH4Gk9aT_TxeceFT575yhc0OIo_TwikID2pHFXGJ57CIisX4JvxzWCqEw3m1pAzKPOUQyhpG9X6BIVlZRAY_TSERHj8FNS5j8OC_5mLXt8YHoy5brzeVC4PlE43teoXfatG5tZv_cpWpIPPNGNAmU7D3ePAOFBQA5zgK5MBCZy-BxARxNnNcSlUTh_GKAgqZoRtFjb3FI8g1ABFJ5PdDYKIw05AzIuydqmnqFt-UpbmdpokX9tZ60",
            },
            {
              title: "Data Visualization: Telling a Story with Numbers",
              author: "Admin",
              date: "Oct 08, 2023",
              snippet: "Best practices for creating compelling and clear data visualizations that drive action and understanding.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADcRgDIOrTNtvKWoIs6wdIaEd6XuBlhfwFfGGavdqOS85SWhVTfkoHWHscBuWT4xvtYl9uQODgru5Bim8HTrzt2XfwCuHLGPfIR0O71jCnOQbx5ujvd8enK8kcYItHGwGMerbMoqce2yfMS-sNqm0lNknfOB3C8NlY0d9_Sp0OmcJJZnDZiCg5p4g7q10zL6depVDGKPZPa5HwpaHpilze2LSAzCWuSWpJB-zs74rL04iXdJ6BmM6ryOUVnnxGXWR-jZtcm-bEIv8",
            },
          ].map((post, idx) => (
            <div key={idx} className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: `url("${post.img}")` }}
              ></div>
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <h3 className="text-xl font-bold text-[#111318] dark:text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">By {post.author} - {post.date}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {post.snippet}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">3</button>
          <span className="px-1 text-gray-500">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">10</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;