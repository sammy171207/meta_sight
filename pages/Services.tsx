import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";

const Services: React.FC = () => {
    const services = [
        {
            icon: "construction",
            title: "Custom Study Design",
            description: "We collaborate with you to design and execute tailored research studies that address your unique business questions and strategic objectives.",
            features: ["Tailored methodology", "Expert consultation", "Flexible timelines"]
        },
        {
            icon: "bar_chart",
            title: "Data Analytics & Visualization",
            description: "Transform complex datasets into clear, actionable insights with our advanced analytics and intuitive data visualization services.",
            features: ["Advanced analytics", "Interactive dashboards", "Custom reports"]
        },
        {
            icon: "trending_up",
            title: "Market Entry Strategies",
            description: "Navigate new markets with confidence. We provide in-depth analysis of market size, competition, and regulatory landscapes to build your entry strategy.",
            features: ["Market analysis", "Competitor mapping", "Risk assessment"]
        },
        {
            icon: "people",
            title: "Competitive Intelligence",
            description: "Stay ahead of the competition with continuous monitoring and analysis of your competitors' strategies, products, and market performance.",
            features: ["Competitor tracking", "Market positioning", "Strategic insights"]
        },
        {
            icon: "psychology",
            title: "Consumer Insights",
            description: "Understand your target audience on a deeper level. We uncover consumer behaviors, motivations, and unmet needs to inform product development and marketing.",
            features: ["Behavioral analysis", "Consumer profiling", "Trend identification"]
        },
        {
            icon: "lightbulb",
            title: "Strategic Consulting",
            description: "Leverage our industry expertise to develop robust business strategies. From market positioning to long-term growth planning, we're here to guide you.",
            features: ["Strategy development", "Growth planning", "Market positioning"]
        }
    ];

    const benefits = [
        { icon: "verified", title: "Data-Driven Decisions", desc: "Make informed business decisions backed by comprehensive research and analytics." },
        { icon: "speed", title: "Faster Time-to-Market", desc: "Accelerate your product launches and market entry with actionable insights." },
        { icon: "trending_up", title: "Competitive Advantage", desc: "Gain strategic insights that give you an edge over competitors." },
        { icon: "shield", title: "Risk Mitigation", desc: "Identify and mitigate risks before they impact your business." },
        { icon: "groups", title: "Expert Team", desc: "Work with experienced market research and data analysis professionals." },
        { icon: "handshake", title: "Long-term Partnership", desc: "Build lasting relationships with a partner invested in your success." }
    ];

    return (
        <div className="w-full bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <motion.section
                className="py-20 px-4 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/20 dark:to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="max-w-7xl mx-auto text-center"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111318] dark:text-white mb-6"
                        variants={fadeInUp}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                        variants={fadeInUp}
                    >
                        Providing comprehensive research and analytics to empower your business with strategic insights and a competitive edge.
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Services Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow group"
                                variants={scaleIn}
                                whileHover={{ y: -8 }}
                            >
                                <motion.div
                                    className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <span className="material-symbols-outlined text-4xl text-primary">{service.icon}</span>
                                </motion.div>
                                <h3 className="text-2xl font-bold text-[#111318] dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex flex-col gap-2">
                                    {service.features.map((feature, featureIdx) => (
                                        <motion.div
                                            key={featureIdx}
                                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: featureIdx * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                            {feature}
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.div
                                    className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        to="/contact"
                                        className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                                    >
                                        Learn More
                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-black text-[#111318] dark:text-white mb-4"
                            variants={fadeInUp}
                        >
                            Why Choose Metastat Insight?
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                            variants={fadeInUp}
                        >
                            We combine deep industry expertise, cutting-edge technology, and a client-first approach to deliver exceptional results.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                >
                                    <span className="material-symbols-outlined text-2xl text-primary">{benefit.icon}</span>
                                </motion.div>
                                <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {benefit.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-black text-[#111318] dark:text-white mb-4"
                            variants={fadeInUp}
                        >
                            Our Process
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                            variants={fadeInUp}
                        >
                            We follow a structured approach to ensure quality, accuracy, and actionable insights.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {[
                            { step: "01", title: "Discovery", description: "We understand your business goals, challenges, and research needs." },
                            { step: "02", title: "Planning", description: "We develop a tailored research plan and methodology." },
                            { step: "03", title: "Execution", description: "We conduct research and collect data using best practices." },
                            { step: "04", title: "Analysis & Delivery", description: "We analyze findings and deliver actionable insights." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="relative"
                                variants={fadeInUp}
                            >
                                <motion.div
                                    className="p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-primary/20 hover:border-primary transition-colors h-full"
                                    whileHover={{ y: -5 }}
                                >
                                    <motion.div
                                        className="text-5xl font-black text-primary/20 mb-4"
                                        whileHover={{ scale: 1.2, color: "#2563eb" }}
                                    >
                                        {item.step}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {item.description}
                                    </p>
                                </motion.div>
                                {idx < 3 && (
                                    <motion.div
                                        className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/40"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ delay: 0.3 }}
                                        viewport={{ once: true }}
                                    ></motion.div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="py-20 px-4 bg-primary text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-black mb-6"
                        variants={fadeInUp}
                    >
                        Ready to Transform Your Business?
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl mb-8 text-blue-100"
                        variants={fadeInUp}
                    >
                        Get in touch with our team to discuss your research needs and discover how Metastat Insight can help you make better decisions.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        variants={fadeInUp}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/contact"
                                className="inline-block h-12 px-8 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors"
                            >
                                Get in Touch
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/reports"
                                className="inline-block h-12 px-8 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors"
                            >
                                View Our Reports
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default Services;
