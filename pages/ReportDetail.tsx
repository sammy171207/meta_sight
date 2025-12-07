import React from "react";
import { Link } from "react-router-dom";

const ReportDetail: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap gap-2 text-sm font-medium mb-6">
        <Link to="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
        <span className="text-gray-400">/</span>
        <Link to="/reports" className="text-gray-500 hover:text-primary transition-colors">Reports</Link>
        <span className="text-gray-400">/</span>
        <span className="text-[#111318] dark:text-white">Global Autonomous Vehicle Market Report 2024</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111318] dark:text-white leading-tight mb-4">
          Global Autonomous Vehicle Market Research Report 2024
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base">Published Date: Oct 2024 | Report ID: MI-58321</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Market Size", value: "$250 Billion" },
          { label: "CAGR", value: "15.2%" },
          { label: "Forecast Period", value: "2024-2030" },
          { label: "Pages", value: "320" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
            <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 mb-10">
        <button className="flex items-center gap-2 h-12 px-6 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors">
          <span className="material-symbols-outlined">download</span>
          Download Sample
        </button>
        <Link to="/contact" className="flex items-center gap-2 h-12 px-6 border-2 border-primary text-primary bg-transparent rounded-lg font-bold hover:bg-primary/5 transition-colors">
          <span className="material-symbols-outlined">edit_note</span>
          Request Customization
        </Link>
        <Link to="/payment" className="flex items-center gap-2 h-12 px-6 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors ml-auto">
          Buy Now
        </Link>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 my-10"></div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-[#111318] dark:text-white mb-6">Report Summary</h2>
          <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none">
            <p className="mb-4">
              The Global Autonomous Vehicle Market report provides a detailed analysis of the market structure along with a forecast of the various segments and sub-segments of the industry. This report covers the strategic profiling of key players in the market, comprehensively analyzing their core competencies, and drawing a competitive landscape for the market.
            </p>
            <p>
              It tracks and analyzes competitive developments such as joint ventures, strategic alliances, mergers and acquisitions, new product developments, and research and developments in the Global Autonomous Vehicle Market. The report also provides a comprehensive analysis of the market's drivers, restraints, opportunities, and challenges.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-[#111318] dark:text-white mb-6">Table of Contents</h2>
          <div className="flex flex-col gap-4">
            {[
              { id: 1, title: "Executive Summary", desc: "A brief overview of the key findings and market projections." },
              { id: 2, title: "Market Landscape", desc: "Analysis of the current market environment and dynamics." },
              { id: 3, title: "Technology Analysis", desc: "Deep dive into the core technologies driving autonomous vehicles." },
              { id: 4, title: "Competitive Landscape", desc: "Profiling of key market players and their strategies." },
            ].map((chapter) => (
              <div key={chapter.id} className="p-4 bg-white dark:bg-gray-800 border-l-4 border-primary rounded-r-lg shadow-sm">
                <p className="font-bold text-[#111318] dark:text-white text-lg">{chapter.id}. {chapter.title}</p>
                <p className="text-sm text-gray-500 mt-1">{chapter.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;