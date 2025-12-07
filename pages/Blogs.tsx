import React from "react";
import { Link } from "react-router-dom";
import { blogService } from "../services/blogService";

const Blogs: React.FC = () => {
  const allBlogs = blogService.getAllBlogs();
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
          {allBlogs.map((post) => (
            <Link
              key={post.id}
              to={`/blogs/${post.id}`}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: `url("${post.image}")` }}
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
            </Link>
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