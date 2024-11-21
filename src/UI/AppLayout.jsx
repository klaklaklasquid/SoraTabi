// ? Component imports
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <section>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default AppLayout;
