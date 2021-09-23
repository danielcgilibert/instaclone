import React from "react";
import { Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./RightHeader.scss";
import ImageNoFound from "../../assets/images/default-avatar.png";
export const RightHeader = () => {
  return (
    <>
      <div className="right-header">
        <Link to="/">
          <Icon name="home" />
        </Link>
        <Icon name="plus" />
        <Link to="/">
          <Image src={ImageNoFound} avatar />
        </Link>
      </div>
    </>
  );
};
