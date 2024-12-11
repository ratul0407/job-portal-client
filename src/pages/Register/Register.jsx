import Lottie from "lottie-react";
import lottieData from "../../assets/animation.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
function Register() {
  const { createUser } = useContext(AuthContext);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const strongPassword = passwordRegex.test(password);
    if (strongPassword) {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `${err.message}`,
          });
        });
    }
  };
  return (
    <div className="flex flex-col justify-center  md:flex-row-reverse items-center">
      <div className="max-w-screen-sm">
        <Lottie animationData={lottieData}></Lottie>
      </div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
