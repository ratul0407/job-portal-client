import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

function HotJobs() {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h3 className="text-blue-950 text-4xl  font-bold">Jobs of the day</h3>
        <p className="text-gray-500 text-lg font-medium">
          Search and connect with your candidates faster{" "}
        </p>
      </div>
      <div className="grid grid-cols-1  justify-center place-content-center lg:grid-cols-3 gap-8">
        {jobs?.map((job) => {
          return <HotJobCard key={job._id} job={job} />;
        })}
      </div>
    </div>
  );
}

export default HotJobs;
