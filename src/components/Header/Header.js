import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import ProfileIcon from '../ProfileIcon';
import { logoutUser } from '../../state/userSlice';

const Header = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  console.log(user)
  const dispatch = useDispatch();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted');
    setLoginOpen(false);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log('Register submitted');
    setRegisterOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="bg-red-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold">Zomato Clone</Link>
        <div>
          {user != null ? (
            <div className="flex items-center">
              {user.name && <ProfileIcon name={user.name} />}
              <span className="ml-2">{user.username}</span>
              <button onClick={handleLogout} className="ml-4 px-4 py-2">Logout</button>
            </div>
          ) : (
            <>
              <button onClick={() => setLoginOpen(true)} className="px-4 py-2">
                Login
              </button>
              <button onClick={() => setRegisterOpen(true)} className="px-4 py-2">
                Register
              </button>
            </>
          )}
        </div>
      </nav>
      <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <div className="flex">
          <div className="w-1/2 p-8 bg-white bg-opacity-40">
            <h2 className="text-3xl text-black font-bold mb-4 text-center">Sign In</h2>
            <LoginForm onSubmit={handleLoginSubmit} />
          </div>
          <div
            className="w-1/2 p-8 text-white flex flex-col justify-center items-center"
            style={{
              backgroundImage: "url('https://www.wallpapertip.com/wmimgs/50-504393_background-food-images-hd.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="p-8 rounded-lg flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">Hello, Friend!</h2>
              <p className="text-center mb-4">Enter your personal details and start your journey with us</p>
              <button
                className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-pink-500 transition duration-300"
                onClick={() => {
                  setLoginOpen(false);
                  setRegisterOpen(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal isOpen={isRegisterOpen} onClose={() => setRegisterOpen(false)}>
        <div className="flex">
          <div
            className="w-1/2 p-8 text-white flex flex-col justify-center items-center"
            style={{
              backgroundImage: "url('https://www.wallpapertip.com/wmimgs/50-504393_background-food-images-hd.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="p-8 rounded-lg flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">Welcome Back!</h2>
              <p className="text-center mb-4">To keep connected with us please login with your personal info</p>
              <button
                className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-pink-500 transition duration-300"
                onClick={() => {
                  setRegisterOpen(false);
                  setLoginOpen(true);
                }}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="w-1/2 p-8 bg-white bg-opacity-40">
            <h2 className="text-3xl text-black font-bold mb-4 text-center">Sign Up</h2>
            <RegisterForm onSubmit={handleRegisterSubmit} />
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
