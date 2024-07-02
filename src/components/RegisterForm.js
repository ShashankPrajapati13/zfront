import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../state/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const RegisterForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser({ name, email, password }));
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="relative">
        <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Name"
          className="p-3 pl-10 w-full border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </form>
  );
};

export default RegisterForm;
