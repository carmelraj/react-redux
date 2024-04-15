import "./Login.scss";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Slice/loginSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const nameRef = useRef(null);
  const pwdRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
      // id: Date.now(),
      username: nameRef.current.value,
      password: pwdRef.current.value,
    };
    dispatch(loginUser(data))
      .unwrap()
      .then((response) => {
        // if (result.content.token) {
        // navigate("/");
        console.log("res", response);

        // }

        // if (response.name === nameRef.current.value) {
        //   navigate("/");
        // }
        if (response.token) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const registerHandler = () => {
    navigate("/register");
  };

  return (
    <div className="Login" data-testid="Login">
      <div className="container">
        <form onSubmit={loginHandler}>
          <input type="text" placeholder="Username" ref={nameRef} />
          <br></br>
          <input type="password" placeholder="Password" ref={pwdRef} />
          <br></br>
          <button onClick={registerHandler} type="button">
            Register
          </button>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
