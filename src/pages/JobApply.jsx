import { useParams } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";

function JobApply() {
  const { id } = useParams();
  const { user } = UseAuth();
  console.log(id, user);
  const handleJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const github = form.github.value;
    const linkedin = form.linkedin.value;
    const resume = form.resume.value;
    console.log(github, linkedin, resume);
    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };
    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Job application successful",
        });
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form
              className="card-body"
              onSubmit={(e) => handleJobApplication(e)}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="url"
                  placeholder="Linkin URL"
                  className="input input-bordered"
                  required
                  name="linkedin"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="url"
                  placeholder="Github URL"
                  className="input input-bordered"
                  name="github"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Resume URL</label>
                <input
                  type="url"
                  placeholder="resume url"
                  name="resume"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Apply For Job</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApply;
