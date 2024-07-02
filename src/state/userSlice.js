import { createSlice } from '@reduxjs/toolkit';
import axios from '../services/apiService';
import Cookies from 'js-cookie';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setUser: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove('token'); 
    }
  },
});

export const { setLoading, setUser, setError} = userSlice.actions;

export const loginUser = (userData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post('/user/login', userData);
    const {user,token} = response.data.data
    dispatch(setUser({ user, token }));
    Cookies.set('token', token, { expires: 1 }); 
  } catch (error) {
    const message = error.response?.data?.message || 'Login failed';
    dispatch(setError(message));
  }
};

export const registerUser = (userData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post('/user/register', userData);
    const {user,token} = response.data.data
    dispatch(setUser({ user, token }));
    Cookies.set('token', token, { expires: 1 }); 
  } catch (error) {
    const message = error.response?.data?.message || 'Registration failed';
    dispatch(setError(message));
  }
};

export const getUser = () => async (dispatch) => {
  const token = Cookies.get('token');
  if (token) {
    try {
      const response = await axios.get('/api/user/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const user = response.data;
      dispatch(setUser({ user, token }));
    } catch (error) {
      console.error('Error loading user from cookies:', error);
    }
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    await axios.post('/user/logout');
    dispatch();
  } catch (error) {
    const message = error.response?.data?.message || 'Logout failed';
    dispatch(setError(message));
  }
};

export default userSlice.reducer;
