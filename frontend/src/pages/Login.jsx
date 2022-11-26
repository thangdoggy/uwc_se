import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Banner from "../img/banner.png";
import { FaSignInAlt } from "react-icons/fa";

import { Header } from "../components";
import accounts from "../data/users";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userInfo = accounts.find(
      (user) => user.email === email && user.password === password
    );

    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate("/dashboard");
      window.location.reload();
    } else {
      !email || !password
        ? setError("Please fill in your email and password!")
        : setError("Invalid email or password!");
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center h-screen justify-evenly">
        <img src={Banner} alt="Login Page" width="50%" />

        {/* Login form */}

        <div className="w-1/3 bg-white shadow-lg shadow-green-700 border border-gray-200 rounded-lg p-8">
          <form className="space-y-6" onSubmit={handleLogin}>
            <h3 className="text-2xl font-medium text-green-900 flex items-center justify-center gap-3">
              Đăng nhập
              <span>
                <FaSignInAlt />
              </span>
            </h3>

            <p className="text-red-700 bg-red-100 pl-2.5">{error}</p>

            <div>
              <label
                for="email"
                className=" font-medium text-gray-900 block mb-2"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                placeholder="name@uwc.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                for="password"
                className=" font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a href="#" className=" text-green-800 hover:underline float-right">
              Quên mật khẩu?
            </a>

            <button
              type="submit"
              className="w-full text-white bg-green-900 hover:bg-green-800 font-medium rounded-lg px-5 py-2.5"
            >
              <p>Đăng nhập</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
