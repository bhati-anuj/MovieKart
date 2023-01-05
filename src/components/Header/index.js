import React, { useContext } from "react";
import { Link } from "react-router-dom";

import MKLogo from "../../images/White_logo.svg";

import TMDBLogo from "../../images/tmdb_logo.svg";
// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
//Context
import { Context } from "../../context";

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
          <span>Logged in as: {user.username}</span>
        ) : (
          <Link to="/login">
            <span>Log in</span>
          </Link>
        )}
       {/* <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" /> */}
      </Content>
    </Wrapper>
  );
};

export default Header;
