import { Link } from "react-router-dom";

const NavbarItem = ({title}) =>{
    return(
        <>
            <li>
                <Link to={`/${title == "home" ? "" : title}`}>
                    {title}
                </Link>
            </li>
        </>
    )
}

export default NavbarItem;