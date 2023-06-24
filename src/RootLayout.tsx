import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { MenuContextProvider } from "./contexts/MenuContext";
import ThemeSwitcher from "./shared/ThemeSwitcher";
import BackBtn from "./shared/BackBtn";

function RootLayout() {
  return (
    <div className={`bg-black/90 py-10`}>
      <MenuContextProvider>
        <BackBtn />
        <Navbar />
      </MenuContextProvider>
      <ThemeSwitcher />
      <Outlet />
    </div>
  );
}

export default RootLayout;
