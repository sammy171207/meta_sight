import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollProgress } from "../hooks/useScrollLoading";

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const scrollProgress = useScrollProgress();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-primary dark:text-primary font-bold"
      : "text-[#0d121c] dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium";
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-primary z-50"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.3 }}
        origin="left"
      />

      <header className="sticky top-0 z-40 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6ebf4] dark:border-b-gray-800 bg-white dark:bg-background-dark px-4 sm:px-10 lg:px-20 py-4 shadow-sm">
        <motion.div
          className="flex items-center gap-4 text-[#0d121c] dark:text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-3 text-primary hover:scale-105 transition-transform">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0d121c] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
              Metastat Insight
            </h2>
          </Link>
        </motion.div>

        <motion.div
          className="hidden lg:flex flex-1 justify-end items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <nav className="flex items-center gap-9">
            {[
              { path: "/", label: "Home" },
              { path: "/reports", label: "Reports" },
              { path: "/services", label: "Services" },
              { path: "/about", label: "About Us" },
              { path: "/blogs", label: "Blog" },
              { path: "/press-releases", label: "Press Releases" },
            ].map((item, idx) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
              >
                <Link to={item.path} className={`text-sm leading-normal transition-all ${isActive(item.path)}`}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/contact"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.button
          className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </motion.button>
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 p-4 z-40 flex flex-col gap-4 shadow-lg ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        {[
          { path: "/", label: "Home" },
          { path: "/reports", label: "Reports" },
          { path: "/services", label: "Services" },
          { path: "/about", label: "About Us" },
          { path: "/blogs", label: "Blog" },
          { path: "/press-releases", label: "Press Releases" },
        ].map((item, idx) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.2, delay: isMenuOpen ? idx * 0.05 : 0 }}
          >
            <Link
              to={item.path}
              className="text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 10 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <Link
            to="/contact"
            className="flex w-full items-center justify-center rounded-lg h-10 bg-primary text-white text-sm font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">analytics</span>
                <h2 class="text-xl font-bold">Metastat Insight</h2>
              </div>
              <p className="text-sm text-blue-100">
                Providing data-driven insights for strategic business decisions to propel your business forward.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-blue-200"><span className="material-symbols-outlined">public</span></a>
                <a href="#" className="hover:text-blue-200"><span className="material-symbols-outlined">share</span></a>
                <a href="#" className="hover:text-blue-200"><span className="material-symbols-outlined">mail</span></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="flex flex-col gap-2 text-sm text-blue-100">
                <li><Link to="/reports" className="hover:text-white hover:underline">Reports</Link></li>
                <li><Link to="/services" className="hover:text-white hover:underline">Services</Link></li>
                <li><Link to="/about" className="hover:text-white hover:underline">About Us</Link></li>
                <li><Link to="/blogs" className="hover:text-white hover:underline">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Industries</h4>
              <ul className="flex flex-col gap-2 text-sm text-blue-100">
                <li><a href="#" className="hover:text-white hover:underline">Healthcare</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Technology</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Automotive</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Finance</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Retail</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="flex flex-col gap-2 text-sm text-blue-100">
                <li>contact@metastat.com</li>
                <li>+1 (555) 123-4567</li>
                <li className="mt-2">123 Insight Avenue, Suite 400<br />New York, NY 10001, USA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-400 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <p>© 2024 Metastat Insight. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;