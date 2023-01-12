import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../context";

//Components
import Button from "../Button";

//Styles
import { Wrapper } from "./Logout.styles";


const Logout = () => {
//  const [_user, setUser] = useContext(Context);
  const [error, setError] = useState(false);
  const [removeUser, setRemoveUser]  = useContext(Context);
  const navigate = useNavigate();
 
 
  const handleRemove = async () => {
    setError(false);
    try{
        setRemoveUser(false);

        navigate("/")
    }
    catch (error){
        setError(true);
        }
  };

  return (
    <Wrapper>
        {error && <div className="error">There is an error in Logout your account!!</div>}
        <div> You Logout Successfully.</div>
      <Button text="Go to Home" callback={handleRemove} />
    </Wrapper>
  );
};

export default Logout;
