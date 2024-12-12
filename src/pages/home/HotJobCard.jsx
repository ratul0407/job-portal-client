import { IoLocationOutline } from "react-icons/io5";

function HotJobCard({ job }) {
  const {
    title,
    location,
    category,
    jobType,
    company,
    requirements,
    description,
    company_logo,
  } = job;
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <img
            src={company_logo}
            alt="Company Logo"
            className="w-10 h-10 rounded-full"
          />
          {/* Company Name & Location */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{company}</h2>
            <p className="text-sm text-gray-500 flex items-center  gap-1">
              <IoLocationOutline /> {location}
            </p>
          </div>
        </div>
        {/* Indicator Icon */}
        <div className="text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1 4h1m-1 0v-4m-1 4H7m6 0h5m2 0a2 2 0 00-2-2h-3a2 2 0 00-2-2h-2m5 0H7a2 2 0 012-2m0 0h4a2 2 0 012 2m-6-6h4m0 0H7a2 2 0 00-2 2h10a2 2 0 00-2-2m-6 0a2 2 0 012-2m2 0a2 2 0 002 2h-4z"
            />
          </svg>
        </div>
      </div>

      {/* Job Title & Time */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 flex items-center space-x-2 mt-1">
          <span className="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m-4 4h6"
              />
            </svg>
            {jobType}
          </span>
          <span>• 4 minutes ago</span>
        </p>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-600">{description}</p>

      {/* Skills */}
      <div className="flex items-center gap-2  mt-4 flex-wrap">
        {requirements?.map((req) => (
          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-1 rounded text-center">
            {req}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-blue-600 font-semibold text-lg">$500</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default HotJobCard;
