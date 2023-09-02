import NavItem from "./NavItem";
import {
    MdMenuBook, MdOutlineTimer, MdOutlineSettings, MdOutlineLogout
} from "react-icons/md"
import { ThemeSwitch } from "@/components/theme-switch";
import { useTheme } from "next-themes";

const ItemList = ({ isMenuCollapsed }) => {
    const { theme, setTheme } = useTheme();

    const handleThemeClick = () => {
        console.log('clicked')
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <>
            <div className="my-4 border-b border-gray-100 pb-4 w-full">
                <NavItem text={'Timers'} isMenuCollapsed={isMenuCollapsed} >
                    <MdOutlineTimer />
                </NavItem>

                <NavItem text={'Recipes'} isMenuCollapsed={isMenuCollapsed}>
                    <MdMenuBook />
                </NavItem>
            </div>

            {/* settings */}
            <div className=" my-4 border-b border-gray-100 pb-4 w-full">
                <NavItem text={'Settings'} isMenuCollapsed={isMenuCollapsed}>
                    <MdOutlineSettings />
                </NavItem>

                <NavItem text={'Change Theme'} isMenuCollapsed={isMenuCollapsed} onClick={handleThemeClick} >
                    <ThemeSwitch />
                </NavItem>
            </div>

            {/* login/logout */}
            <div className=" my-4 w-full">
                <NavItem border text={'Login'} isMenuCollapsed={isMenuCollapsed}>
                    <MdOutlineLogout />
                </NavItem>
            </div>


        </>
    )
}

export default ItemList