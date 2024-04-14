import React from "react";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Slice/loginSlice";
const Header = () => {
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("user", user);
  const logout = () => {
    dispatch(loginUser(""));
    navigate("/login");
  };
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
        <p>{user?.name}</p>
        <span onClick={logout}>Logout</span>
      </div>
    </div>
  );
};
export default Header;
