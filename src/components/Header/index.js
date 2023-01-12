import React, { useContext } from "react";
import { Link } from "react-router-dom";

import MKLogo from "../../images/White_logo.svg";

import TMDBLogo from "../../images/tmdb_logo.svg";
// Styles

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
//Context
import { Context } from "../../context";
import Button from "../Button";

const Header = () => {
  const [user] = useContext(Context);
  console.log(user);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={MKLogo} alt="movieKart-logo" />
        </Link>

        {user ? (
          <Link to="/logout">
          <span className="btn">Logout</span>
        </Link>
        ) : (
          <Link to="/login">
            <span className="btn">Login</span>
          </Link>
        )}

         {/* {user ? (
          <Link to="/logout">
            <span>Logout</span>
          </Link>
        ) : (
          <span>Logged in as:</span>
        )}  */}
        {/* <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" /> */}
      </Content>
    </Wrapper>
  );
};

export default Header;
