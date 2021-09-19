import axios from 'axios';
const api = 'http://localhost:5000';

export const addPost = async post => {
  try {
    const res = await axios.post(`${api}/posts`, post, {
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = res.data;
    return data;
  } catch (error) {}
};
export const loadUser = async id => {
  try {
    const res = await axios.get(`${api}/users`);
    const data = res.data;
    const user = data.filter(user => user.userId === id);
    return user[0];
  } catch (error) {
    console.log(error);
  }
  return {};
};

export const loadPosts = async userId => {
  try {
    const res = await axios.get(`${api}/posts`);
    const data = res.data;
    const posts = data.filter(post => post.user === userId);
    return posts;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const getUser = async id => {
  try {
    const res = await axios.get(`${api}/users`);
    const data = await res.data;
    const users = data.filter(user => user.userId === id);
    const user = users[0];
    return user;
  } catch (error) {
    console.log(error);
  }
};
