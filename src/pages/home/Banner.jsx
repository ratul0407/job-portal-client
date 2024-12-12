import { easeIn, easeOut } from "motion";
import { motion } from "motion/react";
import teamImg from "../../assets/team.jpg";
import celebrateImg from "../../assets/celebrate.jpg";
function Banner() {
  return (
    <div>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 flex flex-col gap-12">
            <motion.img
              animate={{ y: [65, 0, 65] }}
              transition={{
                ease: easeOut,
                duration: 10,
                delay: 0.3,
                repeat: Infinity,
              }}
              src={teamImg}
              className=" flex-1 max-w-xs rounded-r-[50px] border-l-8 border-blue-500 rounded-tl-[50px] rounded-lg shadow-2xl"
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{
                ease: easeIn,
                duration: 10,
                delay: 5,
                repeat: Infinity,
              }}
              src={celebrateImg}
              alt=""
              className="rounded-l-[50px] rounded-tr-[50px] border-r-8 border-blue-500 max-w-xs shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Latest{" "}
              <motion.span
                animate={{
                  color: [
                    "rgb(59 130 246)",
                    "rgb(99 102 241)",
                    "rgb(55 48 163)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                Jobs
              </motion.span>{" "}
              For Your
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
