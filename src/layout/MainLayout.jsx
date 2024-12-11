import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

function MainLayout() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
