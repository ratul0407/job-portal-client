import Banner from "./Banner";
import HotJobs from "./HotJobs";

function Home() {
  return (
    <div className="space-y-12">
      <section className="w-11/12 mx-auto">
        <Banner />
      </section>
      <section className="w-11/12 mx-auto">
        <HotJobs />
      </section>
    </div>
  );
}

export default Home;
