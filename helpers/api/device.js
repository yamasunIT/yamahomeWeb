import { fetchWrapper } from "../fetch-wrapper";
import { baseURL } from "../api_config";

const device_url = '/api/devices/';
const addDevice_url = '/api/devices';

export const deviceService = {
  getDevice,
  getAllDevices,
  addDevice,
  updateDevice,
  deleteDevice
};

// 取得單一裝置
async function getDevice(serialNo) {
  return await fetchWrapper.get(baseURL + device_url + serialNo);
}

// 取得所有裝置
async function getAllDevices() {
  return await fetchWrapper.get(baseURL + device_url + 'all');
}

// 新增裝置
async function addDevice(name, serialNo, deviceType) {
  const data = {
    name: name,
    serialNo: serialNo,
    deviceType: deviceType
  }
  return await fetchWrapper.post(baseURL + addDevice_url, data);
}


// 更新資訊
async function updateDevice(serialNo, name, room) {
  if(name) {
    return  await fetchWrapper.put(baseURL + device_url + serialNo + '?name=' + name + '&room=' + room);
  }
}

// 刪除裝置
async function deleteDevice(serialNo) {
  return await fetchWrapper.delete(baseURL + device_url + serialNo);
}