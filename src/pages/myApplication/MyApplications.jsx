import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";

function MyApplications() {
  const { user } = UseAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h3>HEllo world </h3>
      <p>{jobs.length}</p>
    </div>
  );
}

export default MyApplications;
