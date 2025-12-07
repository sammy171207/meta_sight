import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-16">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black text-[#111318] dark:text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-[#111318] dark:text-white mb-6">Send us a Message</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#111318] dark:text-gray-300">First Name</label>
                <input className="h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#111318] dark:text-gray-300">Last Name</label>
                <input className="h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" type="text" />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-[#111318] dark:text-gray-300">Email Address</label>
                <input className="h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" type="email" />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-[#111318] dark:text-gray-300">Subject</label>
                <input className="h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" type="text" />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-[#111318] dark:text-gray-300">Message</label>
                <textarea className="h-32 px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"></textarea>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full h-12 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-md">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 flex flex-col gap-8 pt-4">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">corporate_fare</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111318] dark:text-white">Corporate Address</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  123 Analytics Avenue, Suite 400<br/>New York, NY 10001, USA
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111318] dark:text-white">Global Contact Numbers</h3>
                <div className="text-gray-600 dark:text-gray-400 mt-1 flex flex-col gap-1">
                  <p><span className="font-semibold">US:</span> +1 (555) 123-4567</p>
                  <p><span className="font-semibold">UK:</span> +44 20 7946 0958</p>
                  <p><span className="font-semibold">APAC:</span> +65 6591 9182</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">email</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111318] dark:text-white">Email Us</h3>
                <a href="mailto:inquiry@metastatinsight.com" className="text-primary hover:underline mt-1 block">
                  inquiry@metastatinsight.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center text-[#111318] dark:text-white mb-8">Our Location</h2>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.620242273418!2d-73.98791998459388!3d40.74844097932789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1678886367448!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;