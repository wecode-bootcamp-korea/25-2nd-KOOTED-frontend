const IP = 'http://10.58.0.243:8000';
const API = {
  users: `${IP}/users`,
  applicationInfo: `${IP}/applications`,
  recruitInfo: `${IP}/posts`,
  getUserInfo: `${IP}/resumes`,
  resume: `${IP}/resume`,
};

export const TOKEN = localStorage.getItem('accessToken');

export default API;
