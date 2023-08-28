import { fetchWrapper } from "../fetch-wrapper";
import { baseURL } from "../api_config";

const signin_url = '/api/users/login';
const signup_url = '/api/users/register';
const update_url = '/api/users/';

export const userService = {
  login,
  register,
  updateUser,
  deleteUser
};

// 登入
async function login(account, password) {
  const data = {
    account: account,
    password: password,
  }
  return await fetchWrapper.post(baseURL + signin_url, data);
}

// 註冊
async function register(account, password, name) {
  const data = {
    account: account,
    password: password,
    name: name
  }
  return await fetchWrapper.post(baseURL + signup_url, data);
}

// 更新資訊
async function updateUser(account, password, name) {
  if(password) {
    return  await fetchWrapper.put(baseURL + update_url + account + '?password=' + password);  
  }
  if(name) {
    return  await fetchWrapper.put(baseURL + update_url + account + '?userName=' + name);
  }
}

// 刪除帳號
async function deleteUser(account) {
  return await fetchWrapper.delete(baseURL + update_url + account);
}