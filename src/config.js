const IP = 'http://3.34.49.13:8000';
const API = {
  users: `${IP}/users`,
  applicationInfo: `${IP}/applications`,
  recruitInfo: `${IP}/posts`,
  getUserInfo: `${IP}/resumes`,
  resume: `${IP}/resume`,
};

export const TOKEN = localStorage.getItem('accessToken');

export default API;
