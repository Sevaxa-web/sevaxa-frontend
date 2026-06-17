import { Outlet } from "react-router-dom";

Outlet;

export default function AppLayout() {
  return (
    <div className="app-layout">
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}
