import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCopy, FiCheck, FiSun, FiMoon } from "react-icons/fi";

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
    <h1 className="text-4xl font-bold mb-4 dark:text-white">About Our Team</h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      We're a passionate group of professionals dedicated to creating amazing digital experiences.
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {teamMembers.map((member) => (
      <div key={member.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold mb-1 dark:text-white">{member.name}</h3>
        <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
        <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
      </div>
    ))}
  </div>
</div>`,
      component: (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">
              About Our Team
            </h1>
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
  <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Our Journey</h1>
  
  <div className="relative">
    <div className="absolute left-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full -ml-px"></div>
    
    {milestones.map((milestone, index) => (
      <div key={index} className={"mb-12 flex " + (index % 2 === 0 ? "flex-row" : "flex-row-reverse")}>
        <div className="w-5/12 px-4">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 dark:text-white">{milestone.year}</h3>
            <p className="text-gray-600 dark:text-gray-300">{milestone.event}</p>
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
    <h1 className="text-4xl font-bold mb-4 dark:text-white">Our Mission & Values</h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      What drives us every day to deliver exceptional value to our customers
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">Innovation</h3>
      <p className="text-gray-600 dark:text-gray-300">
        We constantly push boundaries to create solutions that redefine what's possible in our industry.
      </p>
    </div>
    
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">Integrity</h3>
      <p className="text-gray-600 dark:text-gray-300">
        We do what's right, not what's easy. Our word is our bond in all dealings.
      </p>
    </div>
    
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">Community</h3>
      <p className="text-gray-600 dark:text-gray-300">
        We believe in lifting others as we climb and creating value for all stakeholders.
      </p>
    </div>
  </div>
  
  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 md:p-12">
    <h2 className="text-2xl font-bold mb-6 dark:text-white">Our Mission Statement</h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
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
    {
      name: "Stats Showcase",
      code: `<div className="py-16 bg-gray-50 dark:bg-gray-800">
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
        <div className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">25K+</div>
        <div className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Customers</div>
      </div>
      <div className="text-center">
        <div className="text-5xl font-extrabold text-green-600 dark:text-green-400">120+</div>
        <div className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Countries</div>
      </div>
      <div className="text-center">
        <div className="text-5xl font-extrabold text-purple-600 dark:text-purple-400">98%</div>
        <div className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Satisfaction</div>
      </div>
      <div className="text-center">
        <div className="text-5xl font-extrabold text-yellow-600 dark:text-yellow-400">24/7</div>
        <div className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Support</div>
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
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
    <div className="md:flex">
      <div className="md:w-1/3 bg-gray-100 dark:bg-gray-700">
        <img className="h-full w-full object-cover" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Founder" />
      </div>
      <div className="md:w-2/3 p-8 md:p-12">
        <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">From the Founder</div>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">A Message From Our Founder</h1>
        <blockquote className="mt-6 text-gray-600 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            "When I started this company in 2010, I had a simple vision: to create technology that makes people's lives better. 
            What began as a small team in a garage has grown into an international organization, but our core values remain the same. 
            We're still that passionate group of problem-solvers, just on a larger scale."
          </p>
        </blockquote>
        <div className="mt-8">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900 dark:text-white">John Smith</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Founder & CEO</div>
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
    {
      name: "Company Culture",
      code: `<div className="max-w-7xl mx-auto px-4 py-16">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Culture</h2>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      We believe that great work comes from great people in a great environment
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="p-8">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovation First</h3>
        <p className="text-gray-600 dark:text-gray-300">
          We encourage creative thinking and provide the resources to turn ideas into reality.
        </p>
      </div>
    </div>
    
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="p-8">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Team Spirit</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Collaboration is at the heart of everything we do. We win together, learn together.
        </p>
      </div>
    </div>
    
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="p-8">
        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Growth Mindset</h3>
        <p className="text-gray-600 dark:text-gray-300">
          We invest in our people's development and celebrate continuous learning.
        </p>
      </div>
    </div>
  </div>
  
  <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join Our Team</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Ready to be part of something amazing? We're always looking for talented individuals who share our passion for innovation.
      </p>
      <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
        View Open Positions
      </button>
    </div>
  </div>
</div>`,
      component: (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We believe that great work comes from great people in a great
              environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Innovation First
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We encourage creative thinking and provide the resources to
                  turn ideas into reality.
                </p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400"
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Team Spirit
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Collaboration is at the heart of everything we do. We win
                  together, learn together.
                </p>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Growth Mindset
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We invest in our people's development and celebrate continuous
                  learning.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Join Our Team
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to be part of something amazing? We're always looking for
                talented individuals who share our passion for innovation.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Awards & Recognition",
      code: `<div className="max-w-6xl mx-auto px-4 py-16">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Awards & Recognition</h2>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      Our commitment to excellence has been recognized by industry leaders
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
      <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Best Innovation Award</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Tech Excellence Awards 2023</p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Recognized for breakthrough technology solutions
      </div>
    </div>
    
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
      <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Top Employer</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Great Place to Work 2023</p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Certified as one of the best companies to work for
      </div>
    </div>
    
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
      <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sustainability Leader</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Green Business Awards 2023</p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Leading environmental responsibility initiatives
      </div>
    </div>
  </div>
  
  <div className="mt-16 text-center">
    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full">
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <span className="font-semibold">15+ Industry Awards Since 2020</span>
    </div>
  </div>
</div>`,
      component: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry
              leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-yellow-600 dark:text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Best Innovation Award
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Tech Excellence Awards 2023
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Recognized for breakthrough technology solutions
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Top Employer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Great Place to Work 2023
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Certified as one of the best companies to work for
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Sustainability Leader
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Green Business Awards 2023
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Leading environmental responsibility initiatives
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="font-semibold">
                15+ Industry Awards Since 2020
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Office Locations",
      code: `<div className="max-w-7xl mx-auto px-4 py-16">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Global Presence</h2>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      With offices around the world, we're always close to our customers
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold">New York</h3>
          <p className="text-blue-100">Headquarters</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
          </svg>
          <span className="text-gray-600 dark:text-gray-300">123 Business Ave, NY 10001</span>
        </div>
        <div className="flex items-center mb-4">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Our main headquarters with 200+ employees
        </div>
      </div>
    </div>
    
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold">London</h3>
          <p className="text-green-100">European Hub</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
          </svg>
          <span className="text-gray-600 dark:text-gray-300">456 Tech Street, London EC1A 1BB</span>
        </div>
        <div className="flex items-center mb-4">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          <span className="text-gray-600 dark:text-gray-300">+44 20 7123 4567</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Serving our European customers with 150+ staff
        </div>
      </div>
    </div>
    
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold">Tokyo</h3>
          <p className="text-orange-100">Asia Pacific</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
          </svg>
          <span className="text-gray-600 dark:text-gray-300">789 Innovation Blvd, Tokyo 100-0001</span>
        </div>
        <div className="flex items-center mb-4">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          <span className="text-gray-600 dark:text-gray-300">+81 3-1234-5678</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Our fastest-growing office with 100+ team members
        </div>
      </div>
    </div>
  </div>
  
  <div className="mt-16 text-center">
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Visit Us</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
        We'd love to meet you in person! Schedule a visit to any of our offices and see how we work.
      </p>
      <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
        Schedule a Visit
      </button>
    </div>
  </div>
</div>`,
      component: (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Global Presence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              With offices around the world, we're always close to our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">New York</h3>
                  <p className="text-blue-100">Headquarters</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    123 Business Ave, NY 10001
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Our main headquarters with 200+ employees
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">London</h3>
                  <p className="text-green-100">European Hub</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    456 Tech Street, London EC1A 1BB
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    +44 20 7123 4567
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Serving our European customers with 150+ staff
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Tokyo</h3>
                  <p className="text-orange-100">Asia Pacific</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    789 Innovation Blvd, Tokyo 100-0001
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    +81 3-1234-5678
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Our fastest-growing office with 100+ team members
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Visit Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                We'd love to meet you in person! Schedule a visit to any of our
                offices and see how we work.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Interactive FAQ",
      code: `<div className="max-w-4xl mx-auto px-4 py-16">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      Everything you need to know about our company and services
    </p>
  </div>
  
  <div className="space-y-6">
    {faqs.map((faq, index) => (
      <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <button
          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          onClick={() => toggleFAQ(index)}
        >
          <span className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</span>
          <svg
            className={"w-5 h-5 text-gray-500 transform transition-transform duration-200 " + (openFAQ === index ? "rotate-180" : "")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {openFAQ === index && (
          <div className="px-6 pb-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
          </div>
        )}
      </div>
    ))}
  </div>
  
  <div className="mt-16 text-center">
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still Have Questions?</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Can't find the answer you're looking for? Our team is here to help.
      </p>
      <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
        Contact Support
      </button>
    </div>
  </div>
</div>`,
      component: (
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our company and services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long has your company been in business?",
                answer:
                  "We've been proudly serving our customers since 2010, with over 13 years of experience in the industry. Our journey began with a simple vision to create innovative solutions that make a real difference.",
              },
              {
                question: "What makes your company different from competitors?",
                answer:
                  "Our unique combination of cutting-edge technology, personalized service, and deep industry expertise sets us apart. We focus on building long-term relationships with our clients and delivering solutions that exceed expectations.",
              },
              {
                question: "Do you offer international services?",
                answer:
                  "Yes! We have offices in New York, London, and Tokyo, allowing us to serve customers across North America, Europe, and Asia-Pacific. Our global presence ensures we can provide local support wherever you are.",
              },
              {
                question: "How can I join your team?",
                answer:
                  "We're always looking for talented individuals who share our passion for innovation. Check our careers page for current openings, or send us your resume - we'd love to hear from you!",
              },
              {
                question: "What's your company culture like?",
                answer:
                  "Our culture is built on innovation, collaboration, and continuous learning. We believe in work-life balance, celebrate diversity, and encourage our team members to take ownership of their projects and grow professionally.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-500 transform transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Can't find the answer you're looking for? Our team is here to
                help.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900
      `}
    >
      <div className="max-w-7xl mx-auto p-8">
        {/* Header with Dark Mode Toggle */}
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
          <p className="text-xl mb-6 max-w-3xl text-gray-700 dark:text-gray-300">
            Explore our collection of meticulously crafted About Us page
            designs. Each component is fully responsive and compatible with both
            light and dark modes. Click the <FiCopy className="inline" /> icon
            to copy the code for any design!
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
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {design.name}
                  </h2>
                  <button
                    onClick={() => copyToClipboard(design.code, index)}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
                    aria-label="Copy code"
                  >
                    {copiedIndex === index ? (
                      <FiCheck className="text-green-500" />
                    ) : (
                      <FiCopy className="text-gray-600 dark:text-gray-300" />
                    )}
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <div className="min-w-max">{design.component}</div>
                </div>
              </div>

              {copiedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-4 right-16 bg-gray-800 text-white text-xs px-2 py-1 rounded z-10"
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
