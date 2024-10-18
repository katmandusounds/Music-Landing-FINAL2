<form onSubmit={handleEmailSubmit} className="mt-4">
          <div className="flex rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500 text-xs border-gray-300 bg-gray-700 text-white placeholder-gray-400"
              placeholder="Enter your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ fontSize: '0.7rem', width: '180px' }} // Adjusted font size and width
            />
            <button
              type="submit"
              className="inline-flex items-center px-3 py-2 border border-transparent text-xs leading-4 font-medium rounded-r-md text-black bg-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
            >
              Subscribe
            </button> 
          </div>
          <br /> 
      

        </form>