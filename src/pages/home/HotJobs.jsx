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
    <div>
      <div>
        <h3 className="text-blue-900 text-3xl text-center font-bold">
          Jobs of the day
        </h3>
      </div>
      <div className="grid grid-cols-1 items-center justify-center place-content-center lg:grid-cols-3 gap-8">
        {jobs?.map((job) => {
          return <HotJobCard job={job} />;
        })}
      </div>
    </div>
  );
}

export default HotJobs;
