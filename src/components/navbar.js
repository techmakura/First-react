import NavbarItem from "./navbarItem";

const Navbar = () => {
    return(
        <nav>
            <ul>
                <NavbarItem title="home" />
                <NavbarItem title="contact" />
            </ul>
        </nav>
    )
}

export default Navbar;