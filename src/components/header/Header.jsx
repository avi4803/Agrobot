import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { MdDataThresholding } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

function Header() {

    return (
        <header className="lg:sticky lg:top-0 fixed -bottom-[0.5px]">
        <header className="flex lg:w-72 w-screen">
            <div className="hidden lg:block h-screen w-12 bg-indianred">

            </div>
            <div className="lg:h-screen lg:w-60 w-full h-12 bg-salmon rounded-sm flex items-center lg:items-baseline">
                <div className=" lg:basis-10">

                </div>
                <div className="flex flex-col w-full">
                    <div className="mt-10 hidden lg:block">
                        <p className="text-white text-3xl font-[800]">AGROBOT</p>
                    </div>
                    <div className="flex">
                        <ul className="flex lg:flex-col w-full justify-evenly">
                            <li className={`flex lg:flex-col lg:mt-24 lg:mb-5 lg:w-full `} >
                                <NavLink
                                    to='/'
                                    className={({isActive}) => {
                                        return `${isActive ? "text-salmon bg-snowwhite rounded-l-full rounded-r-full lg:rounded-r-none" : "text-white"} flex duration-500 w-full items-center py-2 pr-1 pl-4 text-lg`
                                    }}
                                >
                                    <IoHome className="mr-3" /><span className="hidden lg:block">HOME</span>
                                </NavLink>
                            </li>
                            <li className={`flex lg:my-4 lg:w-full`} >
                                <NavLink
                                    to='/about'
                                    className={({isActive}) => {
                                        return `${isActive ? "text-salmon bg-snowwhite rounded-l-full rounded-r-full lg:rounded-r-none" : "text-white"} ease-linear duration-500 w-full flex items-center py-2 pr-1 pl-4 text-lg`
                                    }}
                                >
                                    <IoMdSettings className="mr-3" /><span className="hidden lg:block">ABOUT</span>
                                </NavLink>
                            </li>
                            <li className={`flex lg:my-4 lg:w-full`} >
                                <NavLink
                                    to='/data'
                                    className={({isActive}) => {
                                        return `${isActive ? "text-salmon bg-snowwhite rounded-l-full rounded-r-full lg:rounded-r-none" : "text-white"} flex duration-500 w-full items-center py-2 pr-1 pl-4 text-lg`
                                    }}
                                >
                                    <MdDataThresholding className="mr-3"/><span className="hidden lg:block">DATA</span>
                                </NavLink>
                            </li>
                            <li className={`flex lg:my-4 lg:w-full`} >
                                <NavLink
                                    to='/team'
                                    className={({isActive}) => {
                                        return `${isActive ? "text-salmon bg-snowwhite rounded-l-full rounded-r-full lg:rounded-r-none" : "text-white"} flex duration-500 w-full items-center py-2 pr-1 pl-4 text-lg`
                                    }}
                                >
                                    <RiTeamFill className="mr-3" /><span className="hidden lg:block">TEAM</span>
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        </header>
    )
}

export default Header;