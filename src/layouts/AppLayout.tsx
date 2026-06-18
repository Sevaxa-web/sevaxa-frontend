import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Header/>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}