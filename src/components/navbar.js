import NavbarItem from "./navbarItem";
import "./navbar.css";

const Navbar = () => {
    return(
        <nav>
            <ul>
                <NavbarItem title="home" />
                <NavbarItem title="contact" />
                <NavbarItem title="dashboard" />
                <NavbarItem title="about" />
            </ul>
        </nav>
    )
}

export default Navbar;