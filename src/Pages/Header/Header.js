import React, { useEffect } from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Slice/loginSlice";
import { getUserName } from "../../Redux/Slice/userDetailSlice";
const Header = () => {
  const { user } = useSelector((state) => state.login);
  const { userName } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("user", user);
  console.log("getUserName", userName);
  const logout = () => {
    // dispatch(getUserName({ userName: "sam" }));
    // dispatch(loginUser(""));
    navigate("/login");
    dispatch(getUserName(""));
  };
  useEffect(() => {
    dispatch(getUserName(user.username));
  }, []);
  return (
    <div className="Header" data-testid="Header">
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/todo"}>Todo</NavLink>
        </li>
        <li>
          <NavLink to={"/counter"}>Counter</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
      </ul>
      <div className="rightNav">
        {/* {userName?.map((username) => {
          return <p key={username}>{username};</p>;
        })} */}
        <p>{userName};</p>
        <span onClick={logout}>Logout</span>
      </div>
    </div>
  );
};
export default Header;
