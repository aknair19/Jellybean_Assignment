import React from "react";
import { LOGIN_IMAGE_URL } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
export const Header = () => {
  //global state
  const isLogin = useSelector((state) => state.isLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      alert("logout successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="flex justify-between items-center bg-gray-200 shadow-lg h-20 p-4 w-full">
      <div className="w-1/5 md:w-3/5 border  ">
        <Link to="/">
          <img src={LOGIN_IMAGE_URL} alt="logo" width="80" />
        </Link>
      </div>
      <div className="flex justify-end gap-5 w-4/5 md:w-2/5  text-orange-600   text-xs md:text-sm   font-semibold">
        {isLogin && (
          <>
            <p>
              <Link to="/blogs">BLOGS</Link>
            </p>
            <p>
              <Link to="/blogs">MY BLOGS</Link>
            </p>
          </>
        )}
        {!isLogin && (
          <>
            <button>
              {" "}
              <Link to="/login">LOGIN</Link>
            </button>
            <button>
              <Link to="/signup">REGISTER</Link>
            </button>
          </>
        )}
        {isLogin && <button onClick={handleLogout}>LOGOUT</button>}
      </div>
    </nav>
  );
};
