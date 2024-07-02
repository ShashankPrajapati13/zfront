import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../state/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="relative">
        <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-400" />
        <input
          type="email"
          placeholder="Email"
          className="p-3 pl-10 w-full border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative">
        <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
        <input
          type="password"
          placeholder="Password"
          className="p-3 pl-10 w-full border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        {loading ? 'Signing In...' : 'Sign In'}
      </button>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="text-center mt-2">
        <a href="#" className="text-blue-500">Forgot your password?</a>
      </div>
    </form>
  );
};

export default LoginForm;
