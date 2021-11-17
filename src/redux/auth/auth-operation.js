import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async results => {
  try {
    const { data } = await axios.post('/users/signup', results);
    token.set(data.token);
    return data;
  } catch (error) {
    console.error(error);
  }
});

const logIn = createAsyncThunk('auth/login', async results => {
  try {
    const { data } = await axios.post('/users/login', results);
    token.set(data.token);
    return data;
  } catch (error) {
    console.error(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unSet();
  } catch (error) {
    console.error(error);
  }
});

const operations = {
  register,
  logOut,
  logIn,
  //   fetchCurrentUser,
};
export default operations;
