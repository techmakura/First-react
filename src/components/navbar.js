import NavbarItem from "./navbarItem";
import "./navbar.css";

const Navbar = () => {
    return(
        <nav>
            <ul>
                <NavbarItem title="home" />
                <NavbarItem title="coffee" />
            </ul>
        </nav>
    )
}

export default Navbar;