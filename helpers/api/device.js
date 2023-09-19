import { fetchWrapper } from "../fetch-wrapper";
import { baseURL } from "../api_config";

const device_url = '/api/devices/';
const addDevice_url = '/api/devices';
const smartPlug_url = '/api/smartPlugs/';

export const deviceService = {
  getDevice,
  getAllDevices,
  addDevice,
  updateDevice,
  deleteDevice,
  smartPlugCtrl
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
async function addDevice(name, serialNo, deviceType, room, uiType) {
  const data = {
    name: name,
    serialNo: serialNo,
    deviceType: deviceType,
    room: room,
    uiType: uiType
  }
  return await fetchWrapper.post(baseURL + addDevice_url, data);
}


// 更新資訊
async function updateDevice(serialNo, name, room) {
  if(name) {
    const res = await fetchWrapper.put(baseURL + device_url + serialNo + '?name=' + name + '&room=' + room);
    return res;
  }
}

// 刪除裝置
async function deleteDevice(serialNo) {
  const res = await fetchWrapper.delete(baseURL + device_url + serialNo);
  return res;
}

async function smartPlugCtrl(serialNo, cmd) {
  return await fetchWrapper.get(baseURL + smartPlug_url + serialNo + '/' + cmd);
}