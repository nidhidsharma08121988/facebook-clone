import axios from 'axios';
const api = 'http://localhost:5000';

export const loadUser = async userId => {
  try {
    const res = await axios.get(`${api}/users`);
    const data = res.data;
    const user = data.filter(user => user.id === userId);
    return user;
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
