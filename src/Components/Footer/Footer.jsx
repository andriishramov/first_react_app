import "./Footer.css";
import logo from "../../assets/Logo.svg"
import phone from "../../assets/main/phone.svg"
import mail from "../../assets/main/phone.svg"
const Footer = () => {
    return (
        <footer>
            <div className='nav-bar'>
                <div>
                    <img src={logo}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, nemo, porro. Facere mollitia
                        <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, pariatur.
                    </p>
                </div>
                <nav>
                    <p>Company</p>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </nav>
                <nav>
                    <p>Cars</p>
                    <p>Special Offers</p>
                    <p>New Cars</p>
                    <p>Used Cars</p>
                </nav>
                <nav>
                    <p>Contacts</p>
                    <p><img src={phone}/> +971 947 9484 99</p>
                    <p><img src={mail}/> example@gmail.com</p>
                </nav>
            </div>
            <div className='copywrite'>
                <div>
                    eCars © 2022. All rights reserved.
                </div>
                <div>
                    <div>Privacy Policy</div>
                    <div>Terms & Conditions</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
