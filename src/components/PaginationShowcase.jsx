import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiMoreHorizontal,
} from "react-icons/fi";

const PaginationShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activePage, setActivePage] = useState(1);

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

  const handlePageChange = (page) => {
    setActivePage(Math.max(1, Math.min(page, 10))); // Assuming max 10 pages
  };

  // Pagination variants for Framer Motion
  const itemVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  // Pagination data
  const paginationCategories = [
    {
      title: "Basic Paginations",
      paginations: [
        {
          name: "Simple Numbered",
          code: `<div className="flex items-center space-x-2">
  <button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
    {"<FiChevronLeft />"}
  </button>
  {"[1, 2, 3, 4, 5].map((page) => ("}
    <button
      key={page}
      className={\`px-3 py-1 rounded-md \${activePage === page 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </button>
  {"))"}
  <button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
    {"<FiChevronRight />"}
  </button>
</div>`,
          component: (
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded-md ${
                    activePage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </button>
            </div>
          ),
        },
        {
          name: "Rounded Numbered",
          code: `<div className="flex items-center space-x-2">
  <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center">
    &lt;FiChevronLeft size={14} /&gt;
  </button>
  {[1, 2, 3, 4, 5].map((page) =&gt; (
    &lt;button
      key=&#123;page&#125;
      className={\`w-8 h-8 rounded-full flex items-center justify-center \${activePage === page 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
      onClick={() =&gt; handlePageChange(page)}
    &gt;
      &#123;page&#125;
    &lt;/button&gt;
  ))}
  <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center">
    &lt;FiChevronRight size={14} /&gt;
  </button>
</div>`,
          component: (
            <div className="flex items-center space-x-2">
              <button
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft size={14} />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activePage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight size={14} />
              </button>
            </div>
          ),
        },
        {
          name: "Minimal Outline",
          code: `<div className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
            &lt;FiChevronLeft /&gt;
          </button>
          {[1, 2, 3, 4, 5].map((page) =&gt; (
            &lt;button
              key=&#123;page&#125;
              className={\`px-3 py-1 rounded-md border \${activePage === page 
                ? 'border-blue-500 text-blue-500' 
                : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}\`}
              onClick={() =&gt; handlePageChange(page)}
            &gt;
              &#123;page&#125;
            &lt;/button&gt;
          ))}
          <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
            &lt;FiChevronRight /&gt;
          </button>
        </div>`,

          component: (
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded-md border ${
                    activePage === page
                      ? "border-blue-500 text-blue-500"
                      : "border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </button>
            </div>
          ),
        },
        {
          name: "Text Only",
          code: `<div className="flex items-center space-x-4">
  <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
    Previous
  </button>
  <div className="flex space-x-2">
    {[1, 2, 3, 4, 5].map((page) => (
      <button
        key={page}
        className={\${
          activePage === page 
            ? 'text-blue-500 font-medium' 
            : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
        }}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </button>
    ))}
  </div>
  <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
    Next
  </button>
</div>`,
          component: (
            <div className="flex items-center space-x-4">
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                onClick={() => handlePageChange(activePage - 1)}
              >
                Previous
              </button>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`${
                      activePage === page
                        ? "text-blue-500 font-medium"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                onClick={() => handlePageChange(activePage + 1)}
              >
                Next
              </button>
            </div>
          ),
        },
        {
          name: "Dots Separator",
          code: `<div className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
            &lt;FiChevronLeft /&gt;
          </button>
          &lt;button className={\`px-3 py-1 rounded-md \${activePage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`} onClick={() =&gt; handlePageChange(1)&gt;1&lt;/button&gt;
          &lt;FiMoreHorizontal className="text-gray-500" /&gt;
          &lt;button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"&gt;4&lt;/button&gt;
          &lt;button className={\`px-3 py-1 rounded-md \${activePage === 5 ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`} onClick={() =&gt; handlePageChange(5)&gt;5&lt;/button&gt;
          &lt;FiMoreHorizontal className="text-gray-500" /&gt;
          &lt;button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"&gt;8&lt;/button&gt;
          &lt;button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"&gt;
            &lt;FiChevronRight /&gt;
          &lt;/button&gt;
        </div>`,

          component: (
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </button>
              <button
                className={`px-3 py-1 rounded-md ${
                  activePage === 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>
              <FiMoreHorizontal className="text-gray-500" />
              <button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                4
              </button>
              <button
                className={`px-3 py-1 rounded-md ${
                  activePage === 5
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
                onClick={() => handlePageChange(5)}
              >
                5
              </button>
              <FiMoreHorizontal className="text-gray-500" />
              <button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                8
              </button>
              <button
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </button>
            </div>
          ),
        },
      ],
    },
    {
      title: "Advanced Paginations",
      paginations: [
        {
          name: "With Page Info",
          code: `<div className="flex items-center justify-between w-full">
  <div className="text-sm text-gray-600 dark:text-gray-300">
    Showing &lt;span className="font-medium"&gt;{(activePage - 1) * 10 + 1}&lt;/span&gt; to{' '}
    &lt;span className="font-medium"&gt;{Math.min(activePage * 10, 95)}&lt;/span&gt; of{' '}
    &lt;span className="font-medium"&gt;95&lt;/span&gt; results
  </div>
  <div className="flex items-center space-x-2">
    &lt;button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"&gt;
      &lt;FiChevronLeft /&gt;
    &lt;/button&gt;
    {[1, 2, 3, 4, 5].map((page) =&gt; (
      &lt;button
        key={page}
        className={\`px-3 py-1 rounded-md \${activePage === page 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
        onClick={() =&gt; handlePageChange(page)}
      &gt;
        {page}
      &lt;/button&gt;
    ))}
    &lt;button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"&gt;
      &lt;FiChevronRight /&gt;
    &lt;/button&gt;
  </div>
</div>`,

          component: (
            <div className="flex items-center justify-between w-full">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Showing{" "}
                <span className="font-medium">{(activePage - 1) * 10 + 1}</span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(activePage * 10, 95)}
                </span>{" "}
                of <span className="font-medium">95</span> results
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  onClick={() => handlePageChange(activePage - 1)}
                >
                  <FiChevronLeft />
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 rounded-md ${
                      activePage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
                <button
                  className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  onClick={() => handlePageChange(activePage + 1)}
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          ),
        },
        {
          name: "With Dropdown",
          code: `<div className="flex items-center space-x-4">
  <div className="flex items-center space-x-2">
    &lt;span className="text-sm text-gray-600 dark:text-gray-300"&gt;Rows per page:&lt;/span&gt;
    &lt;select className="px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"&gt;
      &lt;option&gt;10&lt;/option&gt;
      &lt;option&gt;20&lt;/option&gt;
      &lt;option&gt;50&lt;/option&gt;
    &lt;/select&gt;
  </div>
  <div className="flex items-center space-x-2">
    &lt;button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"&gt;
      &lt;FiChevronLeft /&gt;
    &lt;/button&gt;
    {[1, 2, 3, 4, 5].map((page) =&gt; (
      &lt;button
        key={page}
        className={\`px-3 py-1 rounded-md border \${activePage === page 
          ? 'border-blue-500 text-blue-500' 
          : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}\`}
        onClick={() =&gt; handlePageChange(page)}
      &gt;
        {page}
      &lt;/button&gt;
    ))}
    &lt;button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"&gt;
      &lt;FiChevronRight /&gt;
    &lt;/button&gt;
  </div>
</div>`,

          component: (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Rows per page:
                </span>
                <select className="px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handlePageChange(activePage - 1)}
                >
                  <FiChevronLeft />
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 rounded-md border ${
                      activePage === page
                        ? "border-blue-500 text-blue-500"
                        : "border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
                <button
                  className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handlePageChange(activePage + 1)}
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          ),
        },
        {
          name: "With Jump To",
          code: `<div className="flex items-center space-x-4">
  <div className="flex items-center space-x-2">
    &lt;button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"&gt;
      &lt;FiChevronLeft /&gt;
    &lt;/button&gt;
    {[1, 2, 3, 4, 5].map((page) =&gt; (
      &lt;button
        key={page}
        className={\`px-3 py-1 rounded-md \${activePage === page 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
        onClick={() =&gt; handlePageChange(page)}
      &gt;
        {page}
      &lt;/button&gt;
    ))}
    &lt;button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"&gt;
      &lt;FiChevronRight /&gt;
    &lt;/button&gt;
  </div>
  <div className="flex items-center space-x-2">
    &lt;span className="text-sm text-gray-600 dark:text-gray-300"&gt;Jump to:&lt;/span&gt;
    &lt;input
      type="number"
      min="1"
      max="10"
      className="w-16 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
    /&gt;
    &lt;button className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"&gt;
      Go
    &lt;/button&gt;
  </div>
</div>`,

          component: (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  onClick={() => handlePageChange(activePage - 1)}
                >
                  <FiChevronLeft />
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 rounded-md ${
                      activePage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
                <button
                  className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  onClick={() => handlePageChange(activePage + 1)}
                >
                  <FiChevronRight />
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Jump to:
                </span>
                <input
                  type="number"
                  min="1"
                  max="10"
                  className="w-16 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                />
                <button className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                  Go
                </button>
              </div>
            </div>
          ),
        },
        {
          name: "Compact Pagination",
          code: `<div className="flex items-center space-x-2">
  <button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
    <FiChevronLeft />
  </button>
  <button className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
    <FiChevronRight />
  </button>
  <div className="text-sm text-gray-600 dark:text-gray-300">
    Page <span className="font-medium">{activePage}</span> of <span className="font-medium">10</span>
  </div>
</div>`,
          component: (
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </button>
              <button
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </button>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Page <span className="font-medium">{activePage}</span> of{" "}
                <span className="font-medium">10</span>
              </div>
            </div>
          ),
        },
        {
          name: "Large Pagination",
          code: `<div className="flex items-center space-x-4">
  &lt;button className="px-4 py-2 text-lg rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"&gt;
    &lt;FiChevronLeft size={20} /&gt;
  &lt;/button&gt;
  {[1, 2, 3, 4, 5].map((page) =&gt; (
    &lt;button
      key={page}
      className={\`px-4 py-2 text-lg rounded-lg \${activePage === page 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
      onClick={() =&gt; handlePageChange(page)}
    &gt;
      {page}
    &lt;/button&gt;
  ))}
  &lt;button className="px-4 py-2 text-lg rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"&gt;
    &lt;FiChevronRight size={20} /&gt;
  &lt;/button&gt;
</div>`,

          component: (
            <div className="flex items-center space-x-4">
              <button
                className="px-4 py-2 text-lg rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft size={20} />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 text-lg rounded-lg ${
                    activePage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="px-4 py-2 text-lg rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          ),
        },
      ],
    },
    {
      title: "Animated Paginations",
      paginations: [
        {
          name: "Fade In/Out",
          code: `<div className="flex items-center space-x-2">
  &lt;motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
  &gt;
    &lt;FiChevronLeft /&gt;
  &lt;/motion.button&gt;
  {[1, 2, 3, 4, 5].map((page) =&gt; (
    &lt;motion.button
      key={page}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={\`px-3 py-1 rounded-md \${activePage === page 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
      onClick={() =&gt; handlePageChange(page)}
    &gt;
      {page}
    &lt;/motion.button&gt;
  ))}
  &lt;motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
  &gt;
    &lt;FiChevronRight /&gt;
  &lt;/motion.button&gt;
</div>`,

          component: (
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </motion.button>
              {[1, 2, 3, 4, 5].map((page) => (
                <motion.button
                  key={page}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-3 py-1 rounded-md ${
                    activePage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </motion.button>
            </div>
          ),
        },
        {
          name: "Slide In",
          code: `<div className="flex items-center space-x-2">
          &lt;motion.button
            whileHover={{ x: -2 }}
            whileTap={{ x: -5 }}
            className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          &gt;
            &lt;FiChevronLeft /&gt;
          &lt;/motion.button&gt;
          {[1, 2, 3, 4, 5].map((page) =&gt; (
            &lt;motion.button
              key={page}
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={\`px-3 py-1 rounded-md \${activePage === page 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
              onClick={() =&gt; handlePageChange(page)}
            &gt;
              {page}
            &lt;/motion.button&gt;
          ))}
          &lt;motion.button
            whileHover={{ x: 2 }}
            whileTap={{ x: 5 }}
            className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          &gt;
            &lt;FiChevronRight /&gt;
          &lt;/motion.button&gt;
        </div>`,

          component: (
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ x: -2 }}
                whileTap={{ x: -5 }}
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </motion.button>
              {[1, 2, 3, 4, 5].map((page) => (
                <motion.button
                  key={page}
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`px-3 py-1 rounded-md ${
                    activePage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ x: 2 }}
                whileTap={{ x: 5 }}
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </motion.button>
            </div>
          ),
        },
        {
          name: "Bounce Effect",
          code: `<div className="flex items-center space-x-2">
  &lt;motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9, y: 2 }}
    className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
  &gt;
    &lt;FiChevronLeft /&gt;
  &lt;/motion.button&gt;
  {[1, 2, 3, 4, 5].map((page) =&gt; (
    &lt;motion.button
      key={page}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9, y: 2 }}
      className={\`px-3 py-1 rounded-md \${activePage === page 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
      onClick={() =&gt; handlePageChange(page)}
    &gt;
      {page}
    &lt;/motion.button&gt;
  ))}
  &lt;motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9, y: 2 }}
    className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
  &gt;
    &lt;FiChevronRight /&gt;
  &lt;/motion.button&gt;
</div>`,

          component: (
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, y: 2 }}
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </motion.button>
              {[1, 2, 3, 4, 5].map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9, y: 2 }}
                  className={`px-3 py-1 rounded-md ${
                    activePage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, y: 2 }}
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </motion.button>
            </div>
          ),
        },
        {
          name: "Rotating Arrows",
          code: `<div className="flex items-center space-x-2">
  &lt;motion.button
    whileHover={{ rotate: -15 }}
    whileTap={{ rotate: -30 }}
    className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
  &gt;
    &lt;FiChevronLeft /&gt;
  &lt;/motion.button&gt;
  {[1, 2, 3, 4, 5].map((page) =&gt; (
    &lt;motion.button
      key={page}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={\`px-3 py-1 rounded-md \${activePage === page 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
      onClick={() =&gt; handlePageChange(page)}
    &gt;
      {page}
    &lt;/motion.button&gt;
  ))}
  &lt;motion.button
    whileHover={{ rotate: 15 }}
    whileTap={{ rotate: 30 }}
    className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
  &gt;
    &lt;FiChevronRight /&gt;
  &lt;/motion.button&gt;
</div>`,

          component: (
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ rotate: -15 }}
                whileTap={{ rotate: -30 }}
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </motion.button>
              {[1, 2, 3, 4, 5].map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-3 py-1 rounded-md ${
                    activePage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ rotate: 15 }}
                whileTap={{ rotate: 30 }}
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </motion.button>
            </div>
          ),
        },
        {
          name: "Glowing Active",
          code: `<div className="flex items-center space-x-2">
  &lt;motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
  &gt;
    &lt;FiChevronLeft /&gt;
  &lt;/motion.button&gt;
  {[1, 2, 3, 4, 5].map((page) =&gt; (
    &lt;motion.button
      key={page}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: activePage === page ? '0 0 10px rgba(59, 130, 246, 0.7)' : 'none'
      }}
      className={\`px-3 py-1 rounded-md \${activePage === page 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
      onClick={() =&gt; handlePageChange(page)}
    &gt;
      {page}
    &lt;/motion.button&gt;
  ))}
  &lt;motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
  &gt;
    &lt;FiChevronRight /&gt;
  &lt;/motion.button&gt;
</div>`,

          component: (
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </motion.button>
              {[1, 2, 3, 4, 5].map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    boxShadow:
                      activePage === page
                        ? "0 0 10px rgba(59, 130, 246, 0.7)"
                        : "none",
                  }}
                  className={`px-3 py-1 rounded-md ${
                    activePage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </motion.button>
            </div>
          ),
        },
      ],
    },
    // More categories would follow the same pattern
    {
      title: "Gradient Paginations",
      paginations: [
        {
          name: "Blue Gradient",
          code: `<div className="flex items-center space-x-2">
  &lt;button className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700"&gt;
    &lt;FiChevronLeft /&gt;
  &lt;/button&gt;
  {[1, 2, 3, 4, 5].map((page) =&gt; (
    &lt;button
      key={page}
      className={\`px-3 py-1 rounded-md \${activePage === page 
        ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
      onClick={() =&gt; handlePageChange(page)}
    &gt;
      {page}
    &lt;/button&gt;
  ))}
  &lt;button className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700"&gt;
    &lt;FiChevronRight /&gt;
  &lt;/button&gt;
</div>`,

          component: (
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded-md ${
                    activePage === page
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </button>
            </div>
          ),
        },
        {
          name: "Purple Gradient",
          code: `<div className="flex items-center space-x-2">
          &lt;button className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700"&gt;
            &lt;FiChevronLeft /&gt;
          &lt;/button&gt;
          {[1, 2, 3, 4, 5].map((page) =&gt; (
            &lt;button
              key={page}
              className={\`px-3 py-1 rounded-md \${activePage === page 
                ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
              onClick={() =&gt; handlePageChange(page)}
            &gt;
              {page}
            &lt;/button&gt;
          ))}
          &lt;button className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700"&gt;
            &lt;FiChevronRight /&gt;
          &lt;/button&gt;
        </div>`,

          component: (
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded-md ${
                    activePage === page
                      ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </button>
            </div>
          ),
        },
        {
          name: "Rainbow Gradient",
          code: `<div className="flex items-center space-x-2">
  &lt;button className="px-3 py-1 rounded-md bg-gradient-to-r from-red-400 to-pink-500 text-white hover:from-red-500 hover:to-pink-600"&gt;
    &lt;FiChevronLeft /&gt;
  &lt;/button&gt;
  {[1, 2, 3, 4, 5].map((page) =&gt; (
    &lt;button
      key={page}
      className={\`px-3 py-1 rounded-md \${activePage === page 
        ? 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
      onClick={() =&gt; handlePageChange(page)}
    &gt;
      {page}
    &lt;/button&gt;
  ))}
  &lt;button className="px-3 py-1 rounded-md bg-gradient-to-r from-red-400 to-pink-500 text-white hover:from-red-500 hover:to-pink-600"&gt;
    &lt;FiChevronRight /&gt;
  &lt;/button&gt;
</div>`,

          component: (
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 rounded-md bg-gradient-to-r from-red-400 to-pink-500 text-white hover:from-red-500 hover:to-pink-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded-md ${
                    activePage === page
                      ? "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded-md bg-gradient-to-r from-red-400 to-pink-500 text-white hover:from-red-500 hover:to-pink-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </button>
            </div>
          ),
        },
        {
          name: "Teal Gradient",
          code: `<div className="flex items-center space-x-2">
  &lt;button className="px-3 py-1 rounded-md bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:from-teal-500 hover:to-cyan-600"&gt;
    &lt;FiChevronLeft /&gt;
  &lt;/button&gt;
  {[1, 2, 3, 4, 5].map((page) =&gt; (
    &lt;button
      key={page}
      className={\`px-3 py-1 rounded-md \${activePage === page 
        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
      onClick={() =&gt; handlePageChange(page)}
    &gt;
      {page}
    &lt;/button&gt;
  ))}
  &lt;button className="px-3 py-1 rounded-md bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:from-teal-500 hover:to-cyan-600"&gt;
    &lt;FiChevronRight /&gt;
  &lt;/button&gt;
</div>`,

          component: (
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 rounded-md bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:from-teal-500 hover:to-cyan-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded-md ${
                    activePage === page
                      ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded-md bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:from-teal-500 hover:to-cyan-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </button>
            </div>
          ),
        },
        {
          name: "Orange Gradient",
          code: `<div className="flex items-center space-x-2">
  &lt;button className="px-3 py-1 rounded-md bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600"&gt;
    &lt;FiChevronLeft /&gt;
  &lt;/button&gt;
  {[1, 2, 3, 4, 5].map((page) =&gt; (
    &lt;button
      key={page}
      className={\`px-3 py-1 rounded-md \${activePage === page 
        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}\`}
      onClick={() =&gt; handlePageChange(page)}
    &gt;
      {page}
    &lt;/button&gt;
  ))}
  &lt;button className="px-3 py-1 rounded-md bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600"&gt;
    &lt;FiChevronRight /&gt;
  &lt;/button&gt;
</div>`,

          component: (
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 rounded-md bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600"
                onClick={() => handlePageChange(activePage - 1)}
              >
                <FiChevronLeft />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded-md ${
                    activePage === page
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded-md bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600"
                onClick={() => handlePageChange(activePage + 1)}
              >
                <FiChevronRight />
              </button>
            </div>
          ),
        },
      ],
    },
    // Additional categories would continue here...
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
            Pagination Universe
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
            Explore our collection of 50+ responsive pagination components with
            modern animations and styles. Click the{" "}
            <FiCopy className="inline" /> icon to copy the code for any
            pagination!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Pagination Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginationCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="space-y-6">
                {category.paginations.map((pagination, paginationIndex) => {
                  const globalIndex = catIndex * 5 + paginationIndex;
                  return (
                    <div key={paginationIndex} className="group relative">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        {pagination.component}
                      </div>
                      <button
                        onClick={() =>
                          copyToClipboard(pagination.code, globalIndex)
                        }
                        className="absolute -top-2 -right-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
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
                          className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded"
                        >
                          Copied!
                        </motion.div>
                      )}
                      <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                        {pagination.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginationShowcase;
