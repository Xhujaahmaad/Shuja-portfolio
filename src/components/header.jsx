import logo from "../assets/shuja.png";
import './header.css'

export default function Header() {
  return (
    <>
      <header className="header-main">
        <div className="wrapper page-width">
          <div className="main-header">
            <div className="developer-name">
              <a href="">
                <img className="shuja-ahmad" src={logo} alt="Shuja Ahmad" />
              </a>
            </div>
            <div className="menu-item">
              <ul>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}


