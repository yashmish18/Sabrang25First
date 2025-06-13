import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-sans flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl border border-gray-700">
        <div className="text-center">
          {/* Placeholder for Sitmark-like logo */}
          <div className="text-purple-400 text-3xl font-bold mb-4">
            Sabrang
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Sign up
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="******"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="******"
              />
            </div>
            <div>
              <label htmlFor="referral-code" className="block text-sm font-medium text-gray-300">
                Referral Code (Optional)
              </label>
              <input
                id="referral-code"
                name="referral-code"
                type="text"
                autoComplete="off"
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Enter referral code"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-800 bg-opacity-70 text-gray-400">
            or
          </span>
          <div className="absolute inset-y-0 left-0 w-full border-t border-gray-700 pointer-events-none" aria-hidden="true"></div>
        </div>

        <div className="space-y-3">
          <button className="w-full flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out">
            <img src="/images/google-icon.svg" alt="Google" className="mr-2 h-5 w-5" />
            Sign up with Google
          </button>
          <button className="w-full flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out">
            <img src="/images/facebook-icon.svg" alt="Facebook" className="mr-2 h-5 w-5" />
            Sign up with Facebook
          </button>
        </div>

        <div className="text-center text-sm text-gray-400">
          Already have an account? <a href="/Login" className="font-medium text-purple-400 hover:text-purple-300">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Signup; 