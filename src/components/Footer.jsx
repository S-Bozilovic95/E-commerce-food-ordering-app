import classes from "./Footer.module.scss";
import logo from "../assets/fried.svg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRegCopyright,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={`container  ${classes.content}`}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
          <h4>
            <span>Crisspy</span>Food
          </h4>
        </div>
        <div className={classes["link-box"]}>
          <Link to={"https://github.com/S-Bozilovic95"} target="_blank">
            <i>
              <FaGithub />
            </i>
          </Link>
          <Link
            to={
              "https://www.linkedin.com/in/svetozar-bo%C5%BEilovi%C4%87-668aa0129/"
            }
            target="_blank"
          >
            <i>
              <FaLinkedin />
            </i>
          </Link>
          <Link to={"mailto:svetozar95@gmail.com"}>
            <i>
              <FaEnvelope />
            </i>
          </Link>
        </div>
      </div>
      <p>
        <i>
          <FaRegCopyright />
        </i>
        2023 Made by Svetozar Božilović
      </p>
    </div>
  );
};

export default Footer;
