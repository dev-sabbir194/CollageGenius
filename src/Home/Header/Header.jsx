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
          src="https://drive.google.com/uc?id=1cws4ft3w7halfmFpHYDVUmcDt_nAkyjm"
          alt="Header Image"
          className="header-image"
        />
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1 className="header-title text-black">
            Welcome to the warm and friendly <br />
            college community!
          </h1>

          <div className="text-center mt-5">
            <Link to="">
              <button className="button start-btn" id="get-start">
                Start Your Apply 
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;