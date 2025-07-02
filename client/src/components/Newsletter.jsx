import React from 'react';

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 my-32 px-4">
      <h1 className="text-2xl md:text-4xl font-semibold text-blue-800">
        Never Miss a Blog
      </h1>
      <p className="text-gray-600 max-w-xl">
        Subscribe to get the latest blogs, tech news, and exclusive insights.
      </p>

      <form className="flex items-stretch w-full max-w-2xl mt-4">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 rounded-l-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-10 text-sm font-medium rounded-r-md transition duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
