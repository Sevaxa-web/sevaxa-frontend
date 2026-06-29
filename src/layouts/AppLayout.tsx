import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/footer";
import FormModal from "../components/modals/FormModal";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Header/>
      <main>
        <Outlet />
        <FormModal />
      </main>
      <Footer />
    </div>
  );
}