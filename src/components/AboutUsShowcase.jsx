import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const AboutUsShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // About Us page designs
  const aboutUsDesigns = [
    {
      name: "Minimal Team Profile",
      code: `<div className="max-w-6xl mx-auto px-4 py-12">
  <div className="text-center mb-16">
    <h1 className="text-4xl font-bold mb-4">About Our Team</h1>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      We're a passionate group of professionals dedicated to creating amazing digital experiences.
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {teamMembers.map((member) => (
      <div key={member.id} className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-blue-600 mb-3">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    ))}
  </div>
</div>`,
      component: (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Our Team</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're a passionate group of professionals dedicated to creating
              amazing digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                name: "Alex Johnson",
                role: "CEO & Founder",
                bio: "Visionary leader with 15+ years in tech",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                id: 2,
                name: "Sarah Williams",
                role: "Design Director",
                bio: "Creates beautiful, functional interfaces",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                id: 3,
                name: "Michael Chen",
                role: "Lead Developer",
                bio: "Full-stack wizard and problem solver",
                image: "https://randomuser.me/api/portraits/men/22.jpg",
              },
              {
                id: 4,
                name: "Emily Rodriguez",
                role: "Marketing Head",
                bio: "Storyteller and brand strategist",
                image: "https://randomuser.me/api/portraits/women/63.jpg",
              },
            ].map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      name: "Timeline History",
      code: `<div className="max-w-4xl mx-auto px-4 py-16">
  <h1 className="text-4xl font-bold text-center mb-12">Our Journey</h1>
  
  <div className="relative">
    <div className="absolute left-1/2 w-1 bg-gray-200 h-full -ml-px"></div>
    
    {milestones.map((milestone, index) => (
      <div key={index} className={"mb-12 flex " + (index % 2 === 0 ? "flex-row" : "flex-row-reverse")}>
        <div className="w-5/12 px-4">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{milestone.year}</h3>
            <p className="text-gray-600">{milestone.event}</p>
          </div>
        </div>
        <div className="w-2/12 flex justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {index + 1}
          </div>
        </div>
        <div className="w-5/12 px-4 flex items-center">
          {milestone.image && (
            <img src={milestone.image} alt={milestone.event} className="rounded-lg shadow-md max-w-full" />
          )}
        </div>
      </div>
    ))}
  </div>
</div>`,
      component: (
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">
            Our Journey
          </h1>

          <div className="relative">
            <div className="absolute left-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full -ml-px"></div>

            {[
              {
                year: "2010",
                event: "Founded in a small garage with just 3 team members",
                image:
                  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
              {
                year: "2012",
                event: "Launched our first product to market success",
                image: "",
              },
              {
                year: "2015",
                event: "Expanded to international markets",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
              {
                year: "2018",
                event: "Reached 1 million customers worldwide",
                image: "",
              },
              {
                year: "2023",
                event: "Recognized as industry leader with 100+ employees",
                image:
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className={
                  "mb-12 flex " +
                  (index % 2 === 0 ? "flex-row" : "flex-row-reverse")
                }
              >
                <div className="w-5/12 px-4">
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">
                      {milestone.year}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.event}
                    </p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="w-5/12 px-4 flex items-center">
                  {milestone.image && (
                    <img
                      src={milestone.image}
                      alt={milestone.event}
                      className="rounded-lg shadow-md max-w-full"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      name: "Mission & Values",
      code: `<div className="max-w-6xl mx-auto px-4 py-16">
  <div className="text-center mb-16">
    <h1 className="text-4xl font-bold mb-4">Our Mission & Values</h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      What drives us every day to deliver exceptional value to our customers
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-3">Innovation</h3>
      <p className="text-gray-600">
        We constantly push boundaries to create solutions that redefine what's possible in our industry.
      </p>
    </div>
    
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-3">Integrity</h3>
      <p className="text-gray-600">
        We do what's right, not what's easy. Our word is our bond in all dealings.
      </p>
    </div>
    
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-3">Community</h3>
      <p className="text-gray-600">
        We believe in lifting others as we climb and creating value for all stakeholders.
      </p>
    </div>
  </div>
  
  <div className="bg-blue-50 rounded-xl p-8 md:p-12">
    <h2 className="text-2xl font-bold mb-6">Our Mission Statement</h2>
    <p className="text-lg text-gray-700 mb-6">
      To empower businesses and individuals through innovative technology solutions that simplify complexity, 
      enhance productivity, and create meaningful connections in an increasingly digital world.
    </p>
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
      Learn More About Our Work
    </button>
  </div>
</div>`,
      component: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">
              Our Mission & Values
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              What drives us every day to deliver exceptional value to our
              customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly push boundaries to create solutions that redefine
                what's possible in our industry.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">
                Integrity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We do what's right, not what's easy. Our word is our bond in all
                dealings.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in lifting others as we climb and creating value for
                all stakeholders.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">
              Our Mission Statement
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              To empower businesses and individuals through innovative
              technology solutions that simplify complexity, enhance
              productivity, and create meaningful connections in an increasingly
              digital world.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Learn More About Our Work
            </button>
          </div>
        </div>
      ),
    },
    // Add 47 more designs here following the same pattern
    // Each design should have a unique name, code, and component
    {
      name: "Stats Showcase",
      code: `<div className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Trusted by businesses worldwide
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Our numbers speak for themselves
      </p>
    </div>
    
    <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
      <div className="text-center">
        <div className="text-5xl font-extrabold text-blue-600">25K+</div>
        <div className="mt-2 text-lg font-medium text-gray-900">Customers</div>
      </div>
      <div className="text-center">
        <div className="text-5xl font-extrabold text-green-600">120+</div>
        <div className="mt-2 text-lg font-medium text-gray-900">Countries</div>
      </div>
      <div className="text-center">
        <div className="text-5xl font-extrabold text-purple-600">98%</div>
        <div className="mt-2 text-lg font-medium text-gray-900">Satisfaction</div>
      </div>
      <div className="text-center">
        <div className="text-5xl font-extrabold text-yellow-600">24/7</div>
        <div className="mt-2 text-lg font-medium text-gray-900">Support</div>
      </div>
    </div>
  </div>
</div>`,
      component: (
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Trusted by businesses worldwide
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                Our numbers speak for themselves
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
                  25K+
                </div>
                <div className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
                  Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-green-600 dark:text-green-400">
                  120+
                </div>
                <div className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
                  Countries
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-purple-600 dark:text-purple-400">
                  98%
                </div>
                <div className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
                  Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-yellow-600 dark:text-yellow-400">
                  24/7
                </div>
                <div className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Founder's Message",
      code: `<div className="max-w-5xl mx-auto px-4 py-16">
  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
    <div className="md:flex">
      <div className="md:w-1/3 bg-gray-100">
        <img className="h-full w-full object-cover" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Founder" />
      </div>
      <div className="md:w-2/3 p-8 md:p-12">
        <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">From the Founder</div>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">A Message From Our Founder</h1>
        <blockquote className="mt-6 text-gray-600">
          <p className="text-lg leading-relaxed">
            "When I started this company in 2010, I had a simple vision: to create technology that makes people's lives better. 
            What began as a small team in a garage has grown into an international organization, but our core values remain the same. 
            We're still that passionate group of problem-solvers, just on a larger scale."
          </p>
        </blockquote>
        <div className="mt-8">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">John Smith</div>
              <div className="text-sm text-gray-500">Founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
      component: (
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-100 dark:bg-gray-700">
                <img
                  className="h-full w-full object-cover"
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Founder"
                />
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  From the Founder
                </div>
                <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  A Message From Our Founder
                </h1>
                <blockquote className="mt-6 text-gray-600 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">
                    "When I started this company in 2010, I had a simple vision:
                    to create technology that makes people's lives better. What
                    began as a small team in a garage has grown into an
                    international organization, but our core values remain the
                    same. We're still that passionate group of problem-solvers,
                    just on a larger scale."
                  </p>
                </blockquote>
                <div className="mt-8">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        John Smith
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Founder & CEO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Continue adding more designs...
  ];

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            About Us Page Designs
          </motion.h1>
        </header>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xl mb-6 max-w-3xl">
            Explore our collection of meticulously crafted About Us page
            designs. Click the <FiCopy className="inline" /> icon to copy the
            code for any design!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 gap-12">
          {aboutUsDesigns.map((design, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">
                  {design.name}
                </h2>
                <div className="overflow-x-auto">
                  <div className="min-w-max">{design.component}</div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(design.code, index)}
                className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                aria-label="Copy code"
              >
                {copiedIndex === index ? (
                  <FiCheck className="text-green-500" />
                ) : (
                  <FiCopy className="text-gray-600 dark:text-gray-300" />
                )}
              </button>

              {copiedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-12 right-4 bg-gray-800 text-white text-xs px-2 py-1 rounded"
                >
                  Copied!
                </motion.div>
              )}
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsShowcase;
