import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogService } from "../services/blogService";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const blog = id ? blogService.getBlogById(id) : undefined;
    const relatedBlogs = id ? blogService.getRelatedBlogs(id) : [];

    // Helper function to render content with proper heading tags
    const renderContent = () => {
        return blog?.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)?.[0].length || 1;
                const text = paragraph.replace(/^#+\s/, '');
                const headingLevel = Math.min(level, 6) as 1 | 2 | 3 | 4 | 5 | 6;
                const headingClasses = {
                    1: "text-3xl font-bold mt-8 mb-4 text-[#111318] dark:text-white",
                    2: "text-2xl font-bold mt-8 mb-4 text-[#111318] dark:text-white",
                    3: "text-xl font-bold mt-6 mb-3 text-[#111318] dark:text-white",
                    4: "text-lg font-bold mt-6 mb-3 text-[#111318] dark:text-white",
                    5: "text-base font-bold mt-4 mb-2 text-[#111318] dark:text-white",
                    6: "text-sm font-bold mt-4 mb-2 text-[#111318] dark:text-white",
                };

                const HeadingComponent = {
                    1: 'h1',
                    2: 'h2',
                    3: 'h3',
                    4: 'h4',
                    5: 'h5',
                    6: 'h6',
                }[headingLevel];

                return React.createElement(HeadingComponent, {
                    key: idx,
                    className: headingClasses[headingLevel] as string,
                    children: text,
                });
            }
            return paragraph.trim() ? (
                <p key={idx} className="text-base leading-relaxed">
                    {paragraph}
                </p>
            ) : null;
        });
    };

    if (!blog) {
        return (
            <motion.div
                className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Blog Not Found</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">The blog post you're looking for doesn't exist.</p>
                <Link to="/blogs" className="inline-block h-12 px-6 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors">
                    Back to Blogs
                </Link>
            </motion.div>
        );
    }

    return (
        <div className="w-full bg-white dark:bg-gray-900">
            {/* Breadcrumbs */}
            <motion.div
                className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <nav className="flex flex-wrap gap-2 text-sm font-medium">
                    <Link to="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
                    <span className="text-gray-400">/</span>
                    <Link to="/blogs" className="text-gray-500 hover:text-primary transition-colors">Blog</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-[#111318] dark:text-white truncate">{blog.title}</span>
                </nav>
            </motion.div>

            {/* Hero Section with Image */}
            <motion.div
                className="w-full h-96 md:h-[500px] bg-cover bg-center"
                style={{ backgroundImage: `url("${blog.image}")` }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            ></motion.div>

            {/* Main Content */}
            <motion.div
                className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {/* Header */}
                <motion.div
                    className="max-w-3xl mb-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="flex flex-wrap gap-2 mb-4" variants={fadeInUp}>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase">
                            {blog.category}
                        </span>
                    </motion.div>
                    <motion.h1
                        className="text-4xl md:text-5xl font-black text-[#111318] dark:text-white leading-tight mb-4"
                        variants={fadeInUp}
                    >
                        {blog.title}
                    </motion.h1>
                    <motion.div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400" variants={fadeInUp}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="text-lg font-bold text-primary">{blog.author.charAt(0)}</span>
                            </div>
                            <div>
                                <p className="font-semibold text-[#111318] dark:text-white">{blog.author}</p>
                                <p className="text-sm">{blog.date}</p>
                            </div>
                        </div>
                        <span className="text-sm">•</span>
                        <span className="text-sm">{blog.readTime}</span>
                    </motion.div>
                </motion.div>

                {/* Main Article Content */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {/* Article */}
                    <motion.div
                        className="lg:col-span-2"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <div className="text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
                                {renderContent()}
                            </div>

                            {/* Tags */}
                            <motion.div
                                className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map((tag) => (
                                        <motion.div
                                            key={tag}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                to={`/blogs?tag=${tag}`}
                                                className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                                            >
                                                #{tag}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Share & CTA */}
                            <motion.div
                                className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-6">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Share This Article:</p>
                                        <div className="flex gap-3">
                                            <motion.button
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <span className="material-symbols-outlined text-sm">share</span>
                                            </motion.button>
                                            <motion.button
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <span className="material-symbols-outlined text-sm">mail</span>
                                            </motion.button>
                                            <motion.button
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <span className="material-symbols-outlined text-sm">link</span>
                                            </motion.button>
                                        </div>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            to="/contact"
                                            className="h-12 px-6 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors flex items-center gap-2"
                                        >
                                            <span className="material-symbols-outlined">mail</span>
                                            Get in Touch
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* Author Bio */}
                        <motion.div
                            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-4">About the Author</h3>
                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4"
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                >
                                    <span className="text-3xl font-bold text-primary">{blog.author.charAt(0)}</span>
                                </motion.div>
                                <h4 className="font-bold text-[#111318] dark:text-white mb-2">{blog.author}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Market research expert and data analyst with a passion for uncovering consumer insights and market trends.
                                </p>
                            </div>
                        </motion.div>

                        {/* Related Posts */}
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-4">Related Articles</h3>
                            <div className="flex flex-col gap-4">
                                {relatedBlogs.length > 0 ? (
                                    relatedBlogs.map((relatedBlog) => (
                                        <motion.div
                                            key={relatedBlog.id}
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Link
                                                to={`/blogs/${relatedBlog.id}`}
                                                className="group p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                            >
                                                <h4 className="font-semibold text-sm text-[#111318] dark:text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">
                                                    {relatedBlog.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{relatedBlog.date}</p>
                                            </Link>
                                        </motion.div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">No related articles found.</p>
                                )}
                            </div>
                        </motion.div>

                        {/* Newsletter CTA */}
                        <motion.div
                            className="bg-primary/10 dark:bg-primary/20 rounded-xl p-6 border border-primary/20"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-3">Subscribe to Our Blog</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Get the latest insights and market research trends delivered to your inbox.
                            </p>
                            <form className="flex flex-col gap-3" onSubmit={(e) => {
                                e.preventDefault();
                                alert('Thank you for subscribing!');
                            }}>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-[#111318] dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />
                                <motion.button
                                    type="submit"
                                    className="w-full h-10 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Subscribe
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Related/Recommended Articles */}
                {relatedBlogs.length > 0 && (
                    <motion.div
                        className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-[#111318] dark:text-white mb-8"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Related Posts
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {relatedBlogs.map((relatedPost) => (
                                <motion.div
                                    key={relatedPost.id}
                                    variants={scaleIn}
                                >
                                    <Link
                                        to={`/blogs/${relatedPost.id}`}
                                        className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                                    >
                                        <motion.div
                                            className="w-full h-48 bg-cover bg-center"
                                            style={{ backgroundImage: `url("${relatedPost.image}")` }}
                                            whileHover={{ scale: 1.05 }}
                                        ></motion.div>
                                        <div className="p-6 flex flex-col gap-3 flex-grow">
                                            <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase">
                                                {relatedPost.category}
                                            </span>
                                            <h3 className="text-lg font-bold text-[#111318] dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                By {relatedPost.author} - {relatedPost.date}
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                                                {relatedPost.snippet}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default BlogDetail;
