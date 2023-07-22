import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="">
      <header className="header ">
        <img
          style={{
            height: "600px",
          }}
          src="https://msimageedting.com/Image/ImageRetouchingServices/1526490_778877168793194_300885925_n.jpg"
          alt="Header Image"
          className="header-image"
        />
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1 className="header-title ">
            THIS IS A PROFESSIONAL GRAPHICS DESIGN TEAM <br />
            WITH 15 YEARS EXPERIENCE
          </h1>

          <div className="text-center mt-5">
            <Link to="">
              <button className="button" id="get-start">
                GET STARTED WITH QUOTE
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;