const SearchPage = () => {
  return (
    <section className="min-h-screen text-center">
      <h2 className="font-medium text-2xl mb-2">Pick location</h2>
      <p className="text-sm mb-6 px-4">
        Find the area or city that you want to know the detailed weather info at
        this time
      </p>
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center justify-between bg-gray-200 text-gray-600 rounded-md shadow-md px-3 flex-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            className="bg-gray-200 focus:border-0 focus:outline-0 py-3 px-2 font-medium w-full"
            type="text"
          />
        </div>
        <button className="bg-gray-200 text-gray-600 rounded-md shadow-md p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-200 rounded-md shadow-md p-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start justify-start mb-2">
              <p className="font-medium text-xl">32</p>
              <p className="text-gray-700">status</p>
            </div>
            <p>icon</p>
          </div>
          <p className="text-left font-medium">Tehran</p>
        </div>
        
      </section>
    </section>
  );
};

export default SearchPage;
