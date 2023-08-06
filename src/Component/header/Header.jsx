
import Logo from "../../Images/logo.png"
import "./header.css"
function Header(){
    return(
        <div>
            <header className="header">
                <div className="nav-logo">
                    <img src={Logo} alt="" />
                </div>

                <div className="nav-menu">
                    <ul className="nav-ul">
                        <li><a href="">Features</a></li>
                        <li><a href="">How it works</a></li>
                        <li><a href="">Privacy</a></li>
                    </ul>
                </div>

                <div className="login">
                    <p>Login</p>
                    <a href="#">Download App</a>
                </div>

            </header>
        </div>
    )
}

export default Header;