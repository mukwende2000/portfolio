import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { MenuContextProvider } from "./contexts/MenuContext";
import ThemeSwitcher from "./shared/ThemeSwitcher";

function RootLayout() {
  return (
    <div className="bg-black/90">
      <MenuContextProvider>
        <Navbar />
      </MenuContextProvider>
      <ThemeSwitcher />
      <Outlet />
    </div>
  );
}

export default RootLayout;
