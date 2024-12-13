import { Link, useLoaderData } from "react-router-dom";

function JobDetails() {
  const data = useLoaderData();
  const { _id } = data;
  console.log(data);
  return (
    <div>
      <h3>Hello job details</h3>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn bg-blue-500 text-white">Apply Now</button>
      </Link>
    </div>
  );
}

export default JobDetails;
