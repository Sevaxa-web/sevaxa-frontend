import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/footer";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}