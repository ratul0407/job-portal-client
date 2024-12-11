import Lottie from "lottie-react";
import lottieData from "../../assets/sign_in_animation.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
function SignIn() {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex gap-10 md:gap-0 flex-col lg:py-40 md:flex-row-reverse items-center">
      <div className="w-1/2">
        <Lottie animationData={lottieData}></Lottie>
      </div>
      <div className="card bg-base-100 w-1/2 mx-auto max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={(e) => handleSignIn(e)}>
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

export default SignIn;
