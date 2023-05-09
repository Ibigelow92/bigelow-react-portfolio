import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Footer.css";


function Footer() {
    return <div className="footer">
        <div className="socialMedia">
            <FacebookIcon />
            <LinkedInIcon />
            <EmailIcon />
            <GithubIcon />
        </div>
        <p></p>
    </div>;
}

export default Footer;