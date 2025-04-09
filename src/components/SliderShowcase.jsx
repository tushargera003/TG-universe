import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FiCopy, FiCheck, FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  EffectFade,
  EffectCube,
  EffectCards,
  Zoom,
  Mousewheel,
  Scrollbar,
  Thumbs,
} from "swiper/modules";
const SliderShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [progress, setProgress] = useState(0);
  const swiperRefs = useRef([]);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
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

  const sliderCategories = [
    {
      title: "Basic Sliders",
      description: "Simple yet effective sliders for everyday use",
      sliders: [
        {
          name: "Simple Image Slider",
          code: `<Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  className="h-64 w-full rounded-lg"
>
  <SwiperSlide>
    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
         className="w-full h-full object-cover" 
         alt="Nature" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
         className="w-full h-full object-cover" 
         alt="City" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://images.unsplash.com/random/800x400?people" 
         className="w-full h-full object-cover" 
         alt="People" />
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="h-64 w-full rounded-lg"
            >
              <SwiperSlide>
                <img
                  src="https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-full object-cover"
                  alt="Nature"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-full object-cover"
                  alt="City"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://picsum.photos/800x400?people"
                  className="w-full h-full object-cover"
                  alt="People"
                />
              </SwiperSlide>
            </Swiper>
          ),
        },
        {
          name: "Content Slider with Text",
          code: `<Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  className="h-64 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"
>
  <SwiperSlide className="flex items-center justify-center text-white p-8">
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-2">Slide 1</h3>
      <p>This is some sample content for the first slide</p>
    </div>
  </SwiperSlide>
  <SwiperSlide className="flex items-center justify-center text-white p-8">
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-2">Slide 2</h3>
      <p>Different content for the second slide</p>
    </div>
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="h-64 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"
            >
              <SwiperSlide className="flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Slide 1</h3>
                  <p>This is some sample content for the first slide</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Slide 2</h3>
                  <p>Different content for the second slide</p>
                </div>
              </SwiperSlide>
            </Swiper>
          ),
        },
        {
          name: "Auto-Playing Slider",
          code: `<Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  className="h-64 w-full rounded-lg"
>
  <SwiperSlide>
    <div className="bg-blue-500 h-full flex items-center justify-center text-white text-2xl">
      Slide 1
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-green-500 h-full flex items-center justify-center text-white text-2xl">
      Slide 2
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-red-500 h-full flex items-center justify-center text-white text-2xl">
      Slide 3
    </div>
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="h-64 w-full rounded-lg"
            >
              <SwiperSlide>
                <div className="bg-blue-500 h-full flex items-center justify-center text-white text-2xl">
                  Slide 1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-green-500 h-full flex items-center justify-center text-white text-2xl">
                  Slide 2
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-red-500 h-full flex items-center justify-center text-white text-2xl">
                  Slide 3
                </div>
              </SwiperSlide>
            </Swiper>
          ),
        },
        {
          name: "Multi-item Slider",
          code: `<Swiper
  modules={[Navigation]}
  spaceBetween={20}
  slidesPerView={3}
  navigation
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
  className="h-48 w-full"
>
  {[1, 2, 3, 4, 5, 6].map((item) => (
    <SwiperSlide key={item}>
      <div className="bg-indigo-100 h-full flex items-center justify-center rounded-lg border border-indigo-200">
        <span className="text-indigo-700 font-medium">Item {item}</span>
      </div>
    </SwiperSlide>
  ))}
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="h-48 w-full"
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <SwiperSlide key={item}>
                  <div className="bg-indigo-100 h-full flex items-center justify-center rounded-lg border border-indigo-200">
                    <span className="text-indigo-700 font-medium">
                      Item {item}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ),
        },
        {
          name: "Vertical Slider",
          code: `<Swiper
  modules={[Navigation, Pagination]}
  direction="vertical"
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  className="h-64 w-full rounded-lg"
>
  <SwiperSlide>
    <div className="bg-gradient-to-b from-blue-400 to-blue-600 h-full flex items-center justify-center text-white text-2xl">
      Vertical Slide 1
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-gradient-to-b from-purple-400 to-purple-600 h-full flex items-center justify-center text-white text-2xl">
      Vertical Slide 2
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-gradient-to-b from-pink-400 to-pink-600 h-full flex items-center justify-center text-white text-2xl">
      Vertical Slide 3
    </div>
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Pagination]}
              direction="vertical"
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="h-64 w-full rounded-lg"
            >
              <SwiperSlide>
                <div className="bg-gradient-to-b from-blue-400 to-blue-600 h-full flex items-center justify-center text-white text-2xl">
                  Vertical Slide 1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradient-to-b from-purple-400 to-purple-600 h-full flex items-center justify-center text-white text-2xl">
                  Vertical Slide 2
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradient-to-b from-pink-400 to-pink-600 h-full flex items-center justify-center text-white text-2xl">
                  Vertical Slide 3
                </div>
              </SwiperSlide>
            </Swiper>
          ),
        },
      ],
    },
    {
      title: "Card Sliders",
      description:
        "Beautiful card-style sliders for showcasing products or features",
      sliders: [
        {
          name: "Testimonial Slider",
          code: `<Swiper
  modules={[Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
  className="w-full h-64"
>
  {[
    {
      quote: "This product changed my life! I can't imagine going back to the old way.",
      author: "John Doe",
      role: "CEO, Company Inc."
    },
    {
      quote: "Absolutely amazing service. The team went above and beyond my expectations.",
      author: "Jane Smith",
      role: "Marketing Director"
    },
    {
      quote: "The best investment I've made this year. Worth every penny!",
      author: "Robert Johnson",
      role: "Entrepreneur"
    }
  ].map((testimonial, index) => (
    <SwiperSlide key={index}>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md h-full flex flex-col justify-center items-center text-center border border-gray-200 dark:border-gray-700">
        <blockquote className="text-lg italic mb-6 text-gray-700 dark:text-gray-300">
          "{testimonial.quote}"
        </blockquote>
        <div className="text-gray-800 dark:text-gray-200">
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>`,
          component: (
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="w-full h-64"
            >
              {[
                {
                  quote:
                    "This product changed my life! I can't imagine going back to the old way.",
                  author: "John Doe",
                  role: "CEO, Company Inc.",
                },
                {
                  quote:
                    "Absolutely amazing service. The team went above and beyond my expectations.",
                  author: "Jane Smith",
                  role: "Marketing Director",
                },
                {
                  quote:
                    "The best investment I've made this year. Worth every penny!",
                  author: "Robert Johnson",
                  role: "Entrepreneur",
                },
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md h-full flex flex-col justify-center items-center text-center border border-gray-200 dark:border-gray-700">
                    <blockquote className="text-lg italic mb-6 text-gray-700 dark:text-gray-300">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-gray-800 dark:text-gray-200">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ),
        },
        {
          name: "Team Member Slider",
          code: `<Swiper
  modules={[Navigation]}
  spaceBetween={30}
  slidesPerView={4}
  navigation
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 }
  }}
  className="w-full py-8"
>
  {[
    { name: "Alex Johnson", role: "Designer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Sam Wilson", role: "Developer", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Taylor Smith", role: "Marketer", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Jordan Lee", role: "Manager", img: "https://randomuser.me/api/portraits/men/75.jpg" },
    { name: "Casey Brown", role: "Support", img: "https://randomuser.me/api/portraits/women/63.jpg" }
  ].map((member, index) => (
    <SwiperSlide key={index}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 text-center p-4">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
          <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{member.role}</p>
        <div className="flex justify-center space-x-2">
          <button className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-blue-500 dark:text-blue-400 text-sm">FB</span>
          </button>
          <button className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-blue-500 dark:text-blue-400 text-sm">TW</span>
          </button>
          <button className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-blue-500 dark:text-blue-400 text-sm">IN</span>
          </button>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={4}
              navigation
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="w-full py-8"
            >
              {[
                {
                  name: "Alex Johnson",
                  role: "Designer",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "Sam Wilson",
                  role: "Developer",
                  img: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  name: "Taylor Smith",
                  role: "Marketer",
                  img: "https://randomuser.me/api/portraits/women/68.jpg",
                },
                {
                  name: "Jordan Lee",
                  role: "Manager",
                  img: "https://randomuser.me/api/portraits/men/75.jpg",
                },
                {
                  name: "Casey Brown",
                  role: "Support",
                  img: "https://randomuser.me/api/portraits/women/63.jpg",
                },
              ].map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 text-center p-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {member.role}
                    </p>
                    <div className="flex justify-center space-x-2">
                      <button className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-blue-500 dark:text-blue-400 text-sm">
                          FB
                        </span>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-blue-500 dark:text-blue-400 text-sm">
                          TW
                        </span>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-blue-500 dark:text-blue-400 text-sm">
                          IN
                        </span>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ),
        },
        {
          name: "Feature Card Slider",
          code: `<Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={30}
  slidesPerView={3}
  navigation
  pagination={{ clickable: true }}
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
  className="w-full py-8"
>
  {[
    { icon: "🚀", title: "Fast Performance", desc: "Optimized for speed and efficiency" },
    { icon: "🎨", title: "Customizable", desc: "Easily customize to match your brand" },
    { icon: "🔒", title: "Secure", desc: "Built with security in mind" },
    { icon: "📱", title: "Responsive", desc: "Works on all devices" },
    { icon: "🔄", title: "Updates", desc: "Regular updates with new features" }
  ].map((feature, index) => (
    <SwiperSlide key={index}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
        <div className="text-4xl mb-4">{feature.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full py-8"
            >
              {[
                {
                  icon: "🚀",
                  title: "Fast Performance",
                  desc: "Optimized for speed and efficiency",
                },
                {
                  icon: "🎨",
                  title: "Customizable",
                  desc: "Easily customize to match your brand",
                },
                {
                  icon: "🔒",
                  title: "Secure",
                  desc: "Built with security in mind",
                },
                {
                  icon: "📱",
                  title: "Responsive",
                  desc: "Works on all devices",
                },
                {
                  icon: "🔄",
                  title: "Updates",
                  desc: "Regular updates with new features",
                },
              ].map((feature, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ),
        },
        {
          name: "Blog Post Slider",
          code: `<Swiper
  modules={[Navigation]}
  spaceBetween={30}
  slidesPerView={3}
  navigation
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
  className="w-full py-8"
>
  {[
    { 
      title: "Getting Started with React", 
      excerpt: "Learn the basics of React and how to build your first application.", 
      date: "May 15, 2023",
      category: "Development"
    },
    { 
      title: "CSS Grid Layout Guide", 
      excerpt: "Master CSS Grid with this comprehensive guide to modern layouts.", 
      date: "June 2, 2023",
      category: "Design"
    },
    { 
      title: "JavaScript Best Practices", 
      excerpt: "Improve your JavaScript code with these essential best practices.", 
      date: "June 10, 2023",
      category: "Development"
    },
    { 
      title: "Responsive Design Principles", 
      excerpt: "Key principles for creating websites that work on any device.", 
      date: "June 18, 2023",
      category: "Design"
    }
  ].map((post, index) => (
    <SwiperSlide key={index}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col">
        <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Featured Image</span>
        </div>
        <div className="p-6 flex-grow">
          <span className="text-sm text-blue-500 dark:text-blue-400 font-medium">{post.category}</span>
          <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
          <button className="float-right text-sm font-medium text-blue-500 dark:text-blue-400 hover:underline">
            Read More
          </button>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              navigation
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full py-8"
            >
              {[
                {
                  title: "Getting Started with React",
                  excerpt:
                    "Learn the basics of React and how to build your first application.",
                  date: "May 15, 2023",
                  category: "Development",
                },
                {
                  title: "CSS Grid Layout Guide",
                  excerpt:
                    "Master CSS Grid with this comprehensive guide to modern layouts.",
                  date: "June 2, 2023",
                  category: "Design",
                },
                {
                  title: "JavaScript Best Practices",
                  excerpt:
                    "Improve your JavaScript code with these essential best practices.",
                  date: "June 10, 2023",
                  category: "Development",
                },
                {
                  title: "Responsive Design Principles",
                  excerpt:
                    "Key principles for creating websites that work on any device.",
                  date: "June 18, 2023",
                  category: "Design",
                },
              ].map((post, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                    <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400">
                        Featured Image
                      </span>
                    </div>
                    <div className="p-6 flex-grow">
                      <span className="text-sm text-blue-500 dark:text-blue-400 font-medium">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-semibold mt-2 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.date}
                      </span>
                      <button className="float-right text-sm font-medium text-blue-500 dark:text-blue-400 hover:underline">
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ),
        },
      ],
    },
    {
      title: "Creative Sliders",
      description: "Unique and creative slider designs for special projects",
      sliders: [
        {
          name: "Parallax Slider",
          code: `<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000 }}
  speed={1000}
  parallax={true}
  className="h-96 w-full rounded-xl overflow-hidden"
>
  <div
    slot="container-start"
    className="parallax-bg"
    data-swiper-parallax="-23%"
    style={{
      backgroundImage: "url('https://picsum.photos/1600/1900')",
      position: "absolute",
      left: 0,
      top: 0,
      width: "130%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  ></div>
  <SwiperSlide className="flex items-center justify-center text-white p-8 relative z-10">
    <div className="text-center" data-swiper-parallax="-100">
      <h2 className="text-4xl font-bold mb-4">Explore Nature</h2>
      <p className="text-xl mb-6 max-w-2xl mx-auto" data-swiper-parallax="-200">
        Discover the beauty of untouched landscapes and breathtaking views.
      </p>
      <button className="px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold shadow-lg">
        Learn More
      </button>
    </div>
  </SwiperSlide>
  <SwiperSlide className="flex items-center justify-center text-white p-8 relative z-10">
    <div className="text-center" data-swiper-parallax="-100">
      <h2 className="text-4xl font-bold mb-4">Adventure Awaits</h2>
      <p className="text-xl mb-6 max-w-2xl mx-auto" data-swiper-parallax="-200">
        Experience thrilling adventures in the most beautiful places on Earth.
      </p>
      <button className="px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold shadow-lg">
        Get Started
      </button>
    </div>
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              speed={1000}
              parallax={true}
              className="h-96 w-full rounded-xl overflow-hidden"
            >
              <div
                slot="container-start"
                className="parallax-bg"
                data-swiper-parallax="-23%"
                style={{
                  backgroundImage: "url('https://picsum.photos/1600/1900')",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "130%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <SwiperSlide className="flex items-center justify-center text-white p-8 relative z-10">
                <div className="text-center" data-swiper-parallax="-100">
                  <h2 className="text-4xl font-bold mb-4">Explore Nature</h2>
                  <p
                    className="text-xl mb-6 max-w-2xl mx-auto"
                    data-swiper-parallax="-200"
                  >
                    Discover the beauty of untouched landscapes and breathtaking
                    views.
                  </p>
                  <button className="px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold shadow-lg">
                    Learn More
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center text-white p-8 relative z-10">
                <div className="text-center" data-swiper-parallax="-100">
                  <h2 className="text-4xl font-bold mb-4">Adventure Awaits</h2>
                  <p
                    className="text-xl mb-6 max-w-2xl mx-auto"
                    data-swiper-parallax="-200"
                  >
                    Experience thrilling adventures in the most beautiful places
                    on Earth.
                  </p>
                  <button className="px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold shadow-lg">
                    Get Started
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          ),
        },
        {
          name: "3D Cube Effect",
          code: `<Swiper
  modules={[Navigation, Pagination, EffectCube]}
  effect="cube"
  grabCursor={true}
  cubeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
  pagination={{ clickable: true }}
  navigation
  className="h-64 w-64 mx-auto"
>
  <SwiperSlide className="bg-blue-500 flex items-center justify-center text-white text-2xl">
    Slide 1
  </SwiperSlide>
  <SwiperSlide className="bg-green-500 flex items-center justify-center text-white text-2xl">
    Slide 2
  </SwiperSlide>
  <SwiperSlide className="bg-red-500 flex items-center justify-center text-white text-2xl">
    Slide 3
  </SwiperSlide>
  <SwiperSlide className="bg-yellow-500 flex items-center justify-center text-white text-2xl">
    Slide 4
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Pagination, EffectCube]}
              effect="cube"
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={{ clickable: true }}
              navigation
              className="h-64 w-64 mx-auto"
            >
              <SwiperSlide className="bg-blue-500 flex items-center justify-center text-white text-2xl">
                Slide 1
              </SwiperSlide>
              <SwiperSlide className="bg-green-500 flex items-center justify-center text-white text-2xl">
                Slide 2
              </SwiperSlide>
              <SwiperSlide className="bg-red-500 flex items-center justify-center text-white text-2xl">
                Slide 3
              </SwiperSlide>
              <SwiperSlide className="bg-yellow-500 flex items-center justify-center text-white text-2xl">
                Slide 4
              </SwiperSlide>
            </Swiper>
          ),
        },
        {
          name: "Coverflow Slider",
          code: `<Swiper
  modules={[Navigation, Pagination, EffectCoverflow]}
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto"
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  navigation
  className="h-64 w-full"
>
  <SwiperSlide className="bg-blue-500 flex items-center justify-center text-white text-2xl w-64">
    Slide 1
  </SwiperSlide>
  <SwiperSlide className="bg-green-500 flex items-center justify-center text-white text-2xl w-64">
    Slide 2
  </SwiperSlide>
  <SwiperSlide className="bg-red-500 flex items-center justify-center text-white text-2xl w-64">
    Slide 3
  </SwiperSlide>
  <SwiperSlide className="bg-purple-500 flex items-center justify-center text-white text-2xl w-64">
    Slide 4
  </SwiperSlide>
  <SwiperSlide className="bg-yellow-500 flex items-center justify-center text-white text-2xl w-64">
    Slide 5
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              navigation
              className="h-64 w-full"
            >
              <SwiperSlide className="bg-blue-500 flex items-center justify-center text-white text-2xl w-64">
                Slide 1
              </SwiperSlide>
              <SwiperSlide className="bg-green-500 flex items-center justify-center text-white text-2xl w-64">
                Slide 2
              </SwiperSlide>
              <SwiperSlide className="bg-red-500 flex items-center justify-center text-white text-2xl w-64">
                Slide 3
              </SwiperSlide>
              <SwiperSlide className="bg-purple-500 flex items-center justify-center text-white text-2xl w-64">
                Slide 4
              </SwiperSlide>
              <SwiperSlide className="bg-yellow-500 flex items-center justify-center text-white text-2xl w-64">
                Slide 5
              </SwiperSlide>
            </Swiper>
          ),
        },
        {
          name: "Creative Card Stack",
          code: `<Swiper
  modules={[EffectCards]}
  effect="cards"
  grabCursor={true}
  className="h-64 w-64 mx-auto"
>
  <SwiperSlide className="bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl rounded-xl shadow-xl">
    Card 1
  </SwiperSlide>
  <SwiperSlide className="bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-2xl rounded-xl shadow-xl">
    Card 2
  </SwiperSlide>
  <SwiperSlide className="bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center text-white text-2xl rounded-xl shadow-xl">
    Card 3
  </SwiperSlide>
  <SwiperSlide className="bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-2xl rounded-xl shadow-xl">
    Card 4
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[EffectCards]}
              effect="cards"
              grabCursor={true}
              className="h-64 w-64 mx-auto"
            >
              <SwiperSlide className="bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl rounded-xl shadow-xl">
                Card 1
              </SwiperSlide>
              <SwiperSlide className="bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-2xl rounded-xl shadow-xl">
                Card 2
              </SwiperSlide>
              <SwiperSlide className="bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center text-white text-2xl rounded-xl shadow-xl">
                Card 3
              </SwiperSlide>
              <SwiperSlide className="bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-2xl rounded-xl shadow-xl">
                Card 4
              </SwiperSlide>
            </Swiper>
          ),
        },
        {
          name: "Fade Transition Slider",
          code: `<Swiper
  modules={[Navigation, Pagination, EffectFade, Autoplay]}
  effect="fade"
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  slidesPerView={1}
  className="h-96 w-full rounded-xl overflow-hidden"
>
  <SwiperSlide>
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full flex items-center justify-center text-white">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bold mb-4">Welcome Slide</h2>
        <p className="text-xl mb-6">This is a beautiful fade transition slider</p>
        <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-gradient-to-r from-pink-500 to-red-500 h-full flex items-center justify-center text-white">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bold mb-4">Second Slide</h2>
        <p className="text-xl mb-6">Smooth fade effect between slides</p>
        <button className="px-6 py-3 bg-white text-pink-600 rounded-lg font-semibold">
          Learn More
        </button>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-full flex items-center justify-center text-white">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bold mb-4">Final Slide</h2>
        <p className="text-xl mb-6">Perfect for hero sections</p>
        <button className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold">
          Contact Us
        </button>
      </div>
    </div>
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              effect="fade"
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              slidesPerView={1}
              className="h-96 w-full rounded-xl overflow-hidden"
            >
              <SwiperSlide>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full flex items-center justify-center text-white">
                  <div className="text-center p-8">
                    <h2 className="text-4xl font-bold mb-4">Welcome Slide</h2>
                    <p className="text-xl mb-6">
                      This is a beautiful fade transition slider
                    </p>
                    <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold">
                      Get Started
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradient-to-r from-pink-500 to-red-500 h-full flex items-center justify-center text-white">
                  <div className="text-center p-8">
                    <h2 className="text-4xl font-bold mb-4">Second Slide</h2>
                    <p className="text-xl mb-6">
                      Smooth fade effect between slides
                    </p>
                    <button className="px-6 py-3 bg-white text-pink-600 rounded-lg font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradient-to-r from-green-500 to-teal-500 h-full flex items-center justify-center text-white">
                  <div className="text-center p-8">
                    <h2 className="text-4xl font-bold mb-4">Final Slide</h2>
                    <p className="text-xl mb-6">Perfect for hero sections</p>
                    <button className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold">
                      Contact Us
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          ),
        },
      ],
    },
    {
      title: "Advanced Sliders",
      description: "Feature-rich sliders with advanced functionality",
      sliders: [
        {
          name: "Thumbnail Gallery",
          code: `<div className="space-y-4">
  {/* Main slider */}
  <Swiper
    modules={[Navigation, Thumbs]}
    spaceBetween={10}
    navigation
    thumbs={{ swiper: thumbsSwiper }}
    className="h-96 w-full rounded-lg mb-4"
  >
    <SwiperSlide>
      <img src="https://picsum.photos/800x600?nature" 
           className="w-full h-full object-cover" 
           alt="Nature" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/800x600?city" 
           className="w-full h-full object-cover" 
           alt="City" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/800x600?people" 
           className="w-full h-full object-cover" 
           alt="People" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/800x600?animals" 
           className="w-full h-full object-cover" 
           alt="Animals" />
    </SwiperSlide>
  </Swiper>

  {/* Thumbnail slider */}
  <Swiper
    onSwiper={setThumbsSwiper}
    spaceBetween={10}
    slidesPerView={4}
    freeMode={true}
    watchSlidesProgress={true}
    className="h-24 w-full"
  >
    <SwiperSlide>
      <img src="https://picsum.photos/200x150?nature" 
           className="w-full h-full object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity" 
           alt="Nature thumb" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/200x150?city" 
           className="w-full h-full object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity" 
           alt="City thumb" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/200x150?people" 
           className="w-full h-full object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity" 
           alt="People thumb" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/200x150?animals" 
           className="w-full h-full object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity" 
           alt="Animals thumb" />
    </SwiperSlide>
  </Swiper>
</div>`,
          component: (
            <div className="space-y-4">
              {/* Main slider */}
              <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={10}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
                className="h-96 w-full rounded-lg mb-4"
              >
                <SwiperSlide>
                  <img
                    src="https://picsum.photos/800x600?nature"
                    className="w-full h-full object-cover"
                    alt="Nature"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://picsum.photos/800x600?city"
                    className="w-full h-full object-cover"
                    alt="City"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://picsum.photos/800x600?people"
                    className="w-full h-full object-cover"
                    alt="People"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://picsum.photos/800x600?animals"
                    className="w-full h-full object-cover"
                    alt="Animals"
                  />
                </SwiperSlide>
              </Swiper>

              {/* Thumbnail slider */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="h-24 w-full"
              >
                <SwiperSlide>
                  <img
                    src="https://picsum.photos/200x150?nature"
                    className="w-full h-full object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                    alt="Nature thumb"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://picsum.photos/200x150?city"
                    className="w-full h-full object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                    alt="City thumb"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://picsum.photos/200x150?people"
                    className="w-full h-full object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                    alt="People thumb"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://picsum.photos/200x150?animals"
                    className="w-full h-full object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                    alt="Animals thumb"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          ),
        },
        {
          name: "Nested Sliders",
          code: `<div className="space-y-8">
  {/* Main slider */}
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    className="h-96 w-full rounded-xl"
  >
    <SwiperSlide>
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-full flex items-center justify-center text-white">
        <div className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Main Slide 1</h2>
          <p className="text-xl mb-6">This is the first main slide</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-full flex items-center justify-center text-white">
        <div className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Main Slide 2</h2>
          <p className="text-xl mb-6">This is the second main slide</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  {/* Nested slider */}
  <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={3}
    navigation
    breakpoints={{
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
    className="h-48 w-full"
  >
    <SwiperSlide>
      <div className="bg-gradient-to-r from-green-500 to-green-700 h-full flex items-center justify-center text-white rounded-lg">
        Nested Slide 1
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 h-full flex items-center justify-center text-white rounded-lg">
        Nested Slide 2
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-gradient-to-r from-red-500 to-red-700 h-full flex items-center justify-center text-white rounded-lg">
        Nested Slide 3
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-gradient-to-r from-pink-500 to-pink-700 h-full flex items-center justify-center text-white rounded-lg">
        Nested Slide 4
      </div>
    </SwiperSlide>
  </Swiper>
</div>`,
          component: (
            <div className="space-y-8">
              {/* Main slider */}
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="h-96 w-full rounded-xl"
              >
                <SwiperSlide>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-full flex items-center justify-center text-white">
                    <div className="text-center p-8">
                      <h2 className="text-4xl font-bold mb-4">Main Slide 1</h2>
                      <p className="text-xl mb-6">
                        This is the first main slide
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-full flex items-center justify-center text-white">
                    <div className="text-center p-8">
                      <h2 className="text-4xl font-bold mb-4">Main Slide 2</h2>
                      <p className="text-xl mb-6">
                        This is the second main slide
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* Nested slider */}
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="h-48 w-full"
              >
                <SwiperSlide>
                  <div className="bg-gradient-to-r from-green-500 to-green-700 h-full flex items-center justify-center text-white rounded-lg">
                    Nested Slide 1
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 h-full flex items-center justify-center text-white rounded-lg">
                    Nested Slide 2
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-gradient-to-r from-red-500 to-red-700 h-full flex items-center justify-center text-white rounded-lg">
                    Nested Slide 3
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-gradient-to-r from-pink-500 to-pink-700 h-full flex items-center justify-center text-white rounded-lg">
                    Nested Slide 4
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          ),
        },
        {
          name: "Lazy Loading Slider",
          code: `<Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  loading="lazy"
  
  className="h-96 w-full rounded-lg"
>
  <SwiperSlide>
    <div className="swiper-lazy-preloader"></div>
    <img
      data-src="https://picsum.photos/800x600?nature"
      className="swiper-lazy w-full h-full object-cover"
      alt="Nature"
    />
    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="swiper-lazy-preloader"></div>
    <img
      data-src="https://picsum.photos/800x600?city"
      className="swiper-lazy w-full h-full object-cover"
      alt="City"
    />
    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="swiper-lazy-preloader"></div>
    <img
      data-src="https://picsum.photos/800x600?people"
      className="swiper-lazy w-full h-full object-cover"
      alt="People"
    />
    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loading="lazy"
              className="h-96 w-full rounded-lg"
            >
              <SwiperSlide>
                <div className="swiper-lazy-preloader"></div>
                <img
                  data-src="https://picsum.photos/800x600?nature"
                  className="swiper-lazy w-full h-full object-cover"
                  alt="Nature"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-lazy-preloader"></div>
                <img
                  data-src="https://picsum.photos/800x600?city"
                  className="swiper-lazy w-full h-full object-cover"
                  alt="City"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-lazy-preloader"></div>
                <img
                  data-src="https://picsum.photos/800x600"
                  className="swiper-lazy w-full h-full object-cover"
                  alt="People"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            </Swiper>
          ),
        },
        {
          name: "Zoom Slider",
          code: `<Swiper
  modules={[Navigation, Pagination, Zoom]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  zoom={true}
  className="h-96 w-full rounded-lg"
>
  <SwiperSlide>
    <div className="swiper-zoom-container">
      <img src="https://picsum.photos/1600/900" 
           className="w-full h-full object-cover" 
           alt="Nature" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="swiper-zoom-container">
      <img src="https://picsum.photos/1600/1900" 
           className="w-full h-full object-cover" 
           alt="Architecture" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="swiper-zoom-container">
      <img src="https://picsum.photos/1600/1900" 
           className="w-full h-full object-cover" 
           alt="Technology" />
    </div>
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Pagination, Zoom]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              zoom={true}
              className="h-96 w-full rounded-lg"
            >
              <SwiperSlide>
                <div className="swiper-zoom-container">
                  <img
                    src="https://picsum.photos/1600/1900"
                    className="w-full h-full object-cover"
                    alt="Nature"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-zoom-container">
                  <img
                    src="https://picsum.photos/1600/1900"
                    className="w-full h-full object-cover"
                    alt="Architecture"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-zoom-container">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="w-full h-full object-cover"
                    alt="Technology"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          ),
        },
        {
          name: "Mousewheel Control Slider",
          code: `<Swiper
  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  mousewheel={true}
  keyboard={true}
  className="h-96 w-full rounded-lg"
>
  <SwiperSlide>
    <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-full flex items-center justify-center text-white text-2xl">
      Slide 1 (Scroll with mousewheel)
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-full flex items-center justify-center text-white text-2xl">
      Slide 2 (Scroll with mousewheel)
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-gradient-to-r from-pink-500 to-pink-700 h-full flex items-center justify-center text-white text-2xl">
      Slide 3 (Scroll with mousewheel)
    </div>
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              mousewheel={true}
              keyboard={true}
              className="h-96 w-full rounded-lg"
            >
              <SwiperSlide>
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-full flex items-center justify-center text-white text-2xl">
                  Slide 1 (Scroll with mousewheel)
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-full flex items-center justify-center text-white text-2xl">
                  Slide 2 (Scroll with mousewheel)
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gradient-to-r from-pink-500 to-pink-700 h-full flex items-center justify-center text-white text-2xl">
                  Slide 3 (Scroll with mousewheel)
                </div>
              </SwiperSlide>
            </Swiper>
          ),
        },
      ],
    },
    {
      title: "Interactive Sliders",
      description: "Sliders with enhanced user interaction features",
      sliders: [
        {
          name: "Slider with Custom Navigation",
          code: `<div className="relative">
  <Swiper
    modules={[Navigation]}
    spaceBetween={30}
    slidesPerView={1}
    navigation={{
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    }}
    onSwiper={(swiper) => {
      swiperRefs.current[0] = swiper;
    }}
    className="h-64 w-full rounded-lg"
  >
    <SwiperSlide>
      <div className="bg-blue-500 h-full flex items-center justify-center text-white text-2xl">
        Slide 1
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-green-500 h-full flex items-center justify-center text-white text-2xl">
        Slide 2
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-red-500 h-full flex items-center justify-center text-white text-2xl">
        Slide 3
      </div>
    </SwiperSlide>
  </Swiper>

  {/* Custom navigation buttons */}
  <button
    onClick={() => swiperRefs.current[0]?.slidePrev()}
    className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
  >
    <FiChevronLeft size={24} />
  </button>
  <button
    onClick={() => swiperRefs.current[0]?.slideNext()}
    className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
  >
    <FiChevronRight size={24} />
  </button>
</div>`,
          component: (
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                onSwiper={(swiper) => {
                  swiperRefs.current[0] = swiper;
                }}
                className="h-64 w-full rounded-lg"
              >
                <SwiperSlide>
                  <div className="bg-blue-500 h-full flex items-center justify-center text-white text-2xl">
                    Slide 1
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-green-500 h-full flex items-center justify-center text-white text-2xl">
                    Slide 2
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-red-500 h-full flex items-center justify-center text-white text-2xl">
                    Slide 3
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* Custom navigation buttons */}
              <button
                onClick={() => swiperRefs.current[0]?.slidePrev()}
                className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={() => swiperRefs.current[0]?.slideNext()}
                className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          ),
        },
        {
          name: "Slider with Progress Bar",
          code: `<div className="space-y-4">
  {/* Progress bar */}
  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
    <div
      className="bg-blue-500 h-2 rounded-full"
      style={{ width: \`\${progress}%\` }}
    ></div>
  </div>

  {/* Slider */}
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    onSlideChange={(swiper) => {
      const newProgress = ((swiper.activeIndex + 1) / swiper.slides.length) * 100;
      setProgress(newProgress);
    }}
    className="h-64 w-full rounded-lg"
  >
    <SwiperSlide>
      <div className="bg-blue-500 h-full flex items-center justify-center text-white text-2xl">
        Slide 1
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-green-500 h-full flex items-center justify-center text-white text-2xl">
        Slide 2
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-red-500 h-full flex items-center justify-center text-white text-2xl">
        Slide 3
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-yellow-500 h-full flex items-center justify-center text-white text-2xl">
        Slide 4
      </div>
    </SwiperSlide>
  </Swiper>
</div>`,
          component: (
            <div className="space-y-4">
              {/* Progress bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Slider */}
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => {
                  const newProgress =
                    ((swiper.activeIndex + 1) / swiper.slides.length) * 100;
                  setProgress(newProgress);
                }}
                className="h-64 w-full rounded-lg"
              >
                <SwiperSlide>
                  <div className="bg-blue-500 h-full flex items-center justify-center text-white text-2xl">
                    Slide 1
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-green-500 h-full flex items-center justify-center text-white text-2xl">
                    Slide 2
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-red-500 h-full flex items-center justify-center text-white text-2xl">
                    Slide 3
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-yellow-500 h-full flex items-center justify-center text-white text-2xl">
                    Slide 4
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          ),
        },
        {
          name: "Slider with Scrollbar",
          code: `<Swiper
  modules={[Navigation, Scrollbar]}
  spaceBetween={30}
  slidesPerView={3}
  navigation
  scrollbar={{ draggable: true }}
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
  className="h-64 w-full"
>
  <SwiperSlide>
    <div className="bg-blue-500 h-full flex items-center justify-center text-white text-2xl">
      Slide 1
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-green-500 h-full flex items-center justify-center text-white text-2xl">
      Slide 2
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-red-500 h-full flex items-center justify-center text-white text-2xl">
      Slide 3
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-yellow-500 h-full flex items-center justify-center text-white text-2xl">
      Slide 4
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="bg-purple-500 h-full flex items-center justify-center text-white text-2xl">
      Slide 5
    </div>
  </SwiperSlide>
</Swiper>`,
          component: (
            <Swiper
              modules={[Navigation, Scrollbar]}
              spaceBetween={30}
              slidesPerView={3}
              navigation
              scrollbar={{ draggable: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="h-64 w-full"
            >
              <SwiperSlide>
                <div className="bg-blue-500 h-full flex items-center justify-center text-white text-2xl">
                  Slide 1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-green-500 h-full flex items-center justify-center text-white text-2xl">
                  Slide 2
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-red-500 h-full flex items-center justify-center text-white text-2xl">
                  Slide 3
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-yellow-500 h-full flex items-center justify-center text-white text-2xl">
                  Slide 4
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-purple-500 h-full flex items-center justify-center text-white text-2xl">
                  Slide 5
                </div>
              </SwiperSlide>
            </Swiper>
          ),
        },

        {
          name: "Slider with Dynamic Slides",
          code: `const [slides, setSlides] = useState([
  { id: 1, color: 'bg-blue-500', text: 'Slide 1' },
  { id: 2, color: 'bg-green-500', text: 'Slide 2' },
  { id: 3, color: 'bg-red-500', text: 'Slide 3' }
]);

const addSlide = () => {
  const newId = slides.length > 0 ? Math.max(...slides.map(s => s.id)) + 1 : 1;
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
  const newColor = colors[Math.floor(Math.random() * colors.length)];
  setSlides([...slides, { id: newId, color: newColor, text: \`Slide \${newId}\` }]);
};

const removeSlide = () => {
  if (slides.length > 1) {
    setSlides(slides.slice(0, -1));
  }
};

return (
  <div className="space-y-4">
    <div className="flex space-x-4">
      <button
        onClick={addSlide}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Slide
      </button>
      <button
        onClick={removeSlide}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Remove Slide
      </button>
    </div>

    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="h-64 w-full rounded-lg"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={\`\${slide.color} h-full flex items-center justify-center text-white text-2xl\`}>
            {slide.text}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);`,
          component: () => {
            const [slides, setSlides] = useState([
              { id: 1, color: "bg-blue-500", text: "Slide 1" },
              { id: 2, color: "bg-green-500", text: "Slide 2" },
              { id: 3, color: "bg-red-500", text: "Slide 3" },
            ]);

            const addSlide = () => {
              const newId =
                slides.length > 0
                  ? Math.max(...slides.map((s) => s.id)) + 1
                  : 1;
              const colors = [
                "bg-blue-500",
                "bg-green-500",
                "bg-red-500",
                "bg-yellow-500",
                "bg-purple-500",
                "bg-pink-500",
              ];
              const newColor =
                colors[Math.floor(Math.random() * colors.length)];
              setSlides([
                ...slides,
                { id: newId, color: newColor, text: `Slide ${newId}` },
              ]);
            };

            const removeSlide = () => {
              if (slides.length > 1) {
                setSlides(slides.slice(0, -1));
              }
            };

            return (
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button
                    onClick={addSlide}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Add Slide
                  </button>
                  <button
                    onClick={removeSlide}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove Slide
                  </button>
                </div>

                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  className="h-64 w-full rounded-lg"
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div
                        className={`${slide.color} h-full flex items-center justify-center text-white text-2xl`}
                      >
                        {slide.text}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          },
        },
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900`}
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
            Slider Universe
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
            Explore our collection of 50+ meticulously crafted sliders with
            modern animations, responsive designs, and interactive features.
            Click the <FiCopy className="inline" /> icon to copy the code for
            any slider!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Category Navigation */}
        <motion.div
          className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex space-x-2">
            {sliderCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Current Category */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-2">
            {sliderCategories[activeCategory].title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {sliderCategories[activeCategory].description}
          </p>
        </motion.div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 gap-8">
          {sliderCategories[activeCategory].sliders.map((slider, index) => {
            const globalIndex = activeCategory * 10 + index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group relative"
              >
                <h3 className="text-xl font-semibold mb-4">{slider.name}</h3>
                <div className="mb-6">{slider.component}</div>
                <button
                  onClick={() => copyToClipboard(slider.code, globalIndex)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                  aria-label="Copy code"
                >
                  {copiedIndex === globalIndex ? (
                    <FiCheck className="text-green-500" />
                  ) : (
                    <FiCopy className="text-gray-600 dark:text-gray-300" />
                  )}
                </button>
                {copiedIndex === globalIndex && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-12 right-4 bg-gray-800 text-white text-xs px-2 py-1 rounded"
                  >
                    Copied!
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderShowcase;
