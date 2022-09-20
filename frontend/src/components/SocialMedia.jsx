import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/nahid071" target="blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/nahidzz" target="blank">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/md-nahiduzzaman-4a7571146/"
        target="blank"
      >
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
