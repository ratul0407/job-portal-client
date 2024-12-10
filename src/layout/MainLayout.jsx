import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Outlet />
    </div>
  );
}

export default MainLayout;
