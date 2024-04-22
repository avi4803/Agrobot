import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
    return ( 
        <div className="flex h-screen overflow-x-auto">
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout;