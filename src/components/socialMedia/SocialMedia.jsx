import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socialMediaPath = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    icon: <FaYoutube />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
];

const SocialMedia = ({ constainerStypes, iconStyles }) => {
  return (
    <div className={constainerStypes}>
      {socialMediaPath.map((item, index) => {
        return (
          <Link to={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
