import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const github = "https://github.com/johnson-Abiola";
  const linkedln = "https://www.linkedin.com/in/abiola-johnson-2711501b4/";
  const instagram = "https://www.instagram.com/?hl=en";
  const twitter = "https://x.com/JohnsonAbiolam2";
  return (
    <div className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="" className="h-12" />
      </div>

      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a href={linkedln} target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href={instagram} target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href={twitter} target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
