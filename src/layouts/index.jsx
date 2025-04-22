import Footer from "@/components/ui/main/shared/footer";
import Navbar from "@/components/ui/main/shared/navbar";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Mainlayout;
