import "./Header.scss";
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className="header">
            <img src={props.logoToProps} alt=""/>
            <nav>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLink to="/allcars">All Cars</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div>
                {
                    props.actionsToProps.map(el => <img src={el.img} alt="" key={el.id}/>)
                }
            </div>
        </header>
    )
}

export default Header;



