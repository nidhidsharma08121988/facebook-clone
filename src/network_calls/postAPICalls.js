import axios from 'axios';

export const getUserPosts = async () => {
  const res = await axios.get('http://localhost:5000/currentUser');
  const data = res.posts;
  console.log(data);
  return data;
};
