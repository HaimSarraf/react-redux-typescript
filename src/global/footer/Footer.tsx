import HomeIcon from "@mui/icons-material/Home";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TelegramIcon from "@mui/icons-material/Telegram";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="info">
          <p>Follow Us</p>
          <div className="icons">
            <XIcon className="icon" />
            <PinterestIcon className="icon" />
            <TelegramIcon className="icon" />
            <InstagramIcon className="icon" />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="info">
          <div className="details">
            <HomeIcon />
            <a href="/">Iran/Amol/24th Street/no. 2</a>
          </div>

          <div className="details">
            <EmailIcon />
            <a href="/">Shop@gmail.com</a>
          </div>

          <div className="details">
            <PhoneInTalkIcon />
            <a href="/">0095-3322-26</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
