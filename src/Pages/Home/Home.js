import "./Home.scss";
import React, { useEffect } from "react";
import { getUSers } from "../../Redux/Slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUSers());
  }, []);
  console.log(users);
  return (
    <div className="Home" data-testid="Home">
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((value) => {
            return (
              <tr>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>{value.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
