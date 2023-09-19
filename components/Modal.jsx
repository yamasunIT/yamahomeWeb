import React, {useState} from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { IoBulbOutline } from "react-icons/io5";
import { BsPlug } from "react-icons/bs";
import { RxButton } from "react-icons/rx";
import { deviceService } from "../helpers/api/device";

const iconView = {
  fontSize: 30
}

const deviceNameView = {
  fontSize: 16
}

const Modal = ({ setIsOpen, actionButton, modalData, updateHomeData, homeData }) => {

  const Device = ({device}) => {
    function icon() {
      switch(device.deviceType){
        case 'smartBulb':
          return <IoBulbOutline />

        case 'smartPlug':
          return <BsPlug />

        case 'onoff':
          return <RxButton />

        default:
          return <RxButton />
      }
    }

    const OnOffBtn = ({device}) => {
      const smartPlugCtl = async(data, cmd) => {
        console.log(data.name, cmd);
        // const res = await deviceService.smartPlugCtrl(data.serialNo, cmd);
      }
      switch(device.deviceType) {
        case 'smartPlug':
          return (
            <div>
              <button className={styles.onOffBtn} onClick={() => smartPlugCtl(device, 'on')}>
                開
              </button>
              <button className={styles.onOffBtn} onClick={() => smartPlugCtl(device, 'off')}>
              關
            </button>
          </div>
          )
        default:
          return (
            <p>尚未新增</p>
          )
      }
      
    }
    return (
      <div className={styles.deviceView}>
        <div className="col-2" style={iconView}>
          {icon()}
        </div>
        <div className="col-5" style={deviceNameView}>
          {device.name}
        </div>
        <div className="col-5">
          <OnOffBtn device={device}/>
        </div>
      </div>
    );
  }

  const EditView = ({data}) => {
    const labelStyle = {color: 'black',marginTop: 10};
    const [deviceName, setDeviceName] = useState(data.name);
    const [deviceSNo, setDeviceSNo] = useState(data.serialNo);
    const [deviceLoc, setDeviceLoc] = useState(data.room);
    const [create, setCreate] = useState(data.create);
    const [roomIdx, setRoomIdx] = useState(data.roomIndex);
    const [deviceIdx, setDeviceIdx] = useState(data.deviceIndex);
    const [select, setSelect] = useState('');

    const ConfirmBtn = () => {
      async function confirmPress() {
        if(deviceName && deviceLoc && deviceSNo) {
          const result = await deviceService.updateDevice(deviceSNo, deviceName, deviceLoc);
          if(result.statusCode == 200) {
            if (homeData[roomIdx].name == deviceLoc) {
              // 沒有換房間
              const newHomeData = [...homeData];
              newHomeData[roomIdx].devices[deviceIdx].name = deviceName;
              updateHomeData(newHomeData);
            } else {
              // 換房間
              const newHomeData = [...homeData];
              newHomeData[roomIdx].devices.splice(deviceIdx, 1);
              const idx = newHomeData.findIndex((room) => room.name == deviceLoc);
              const deviceData = {...data};
              deviceData.name = deviceName;
              deviceData.room = deviceLoc;
              if(idx >= 0 ) {
                // 已有房間
                homeData[idx].devices.push(deviceData);
              } else {
                // 新增房間
                homeData.push({name: deviceLoc, devices: [deviceData]});
              }
              updateHomeData(homeData);
            }
            setIsOpen(false);
          }
        }
      }

      async function createPress() {
        console.log('create');
      }
  
      return (
        <button className={styles.confirmBtn} onClick={create ? () => createPress() : () => confirmPress()}>
          確定
        </button>
      );
    }

    const DeleteBtn = () => {
      async function deletePress() {
        if(deviceSNo) {
          const result = await deviceService.deleteDevice(deviceSNo);
          if(result.statusCode == 200) {
            homeData[roomIdx].devices.splice(deviceIdx, 1);
            updateHomeData(homeData);
            setIsOpen(false);
          }
        }
      }
  
      return (
        <button className={styles.deleteBtn} onClick={() => deletePress()}>
          刪除
        </button>
      );
    }

    return (
      <>
        {create && <label style={labelStyle}>
          種類: 
          <select onChange={(e) => setSelect(e.target.value)} style={{width: 100}}>
            <option value="smartPlug">智能插座</option>
            <option value="smartSwitch">智能開關</option>
            <option value="smartBulb">智能燈泡</option>
            <option value="custom">其他</option>
          </select>
        </label>}
        <label style={labelStyle}>
          裝置名稱:
          <input
            name="deviceName"
            value={deviceName}
            style={{width: 200}}
            onChange={(event) => setDeviceName(event.target.value)}/>
        </label>
        <label style={labelStyle}>
          裝置序號:
          <input
            name="deviceSNo"
            value={deviceSNo}
            style={{width: 200}}
            disabled={!create}
            onChange={(event) => setDeviceSNo(event.target.value)}/>
        </label>
        <label style={labelStyle}>
          裝置位置:
          <input
            name="deviceLoc"
            value={deviceLoc}
            style={{width: 200}}
            onChange={(event) => setDeviceLoc(event.target.value)}/>
        </label>
        <div className={styles.actionsContainer}>
          {!create && <DeleteBtn/>}
          <ConfirmBtn/>
        </div>
      </>
    )
  }

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)}/>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{actionButton ? '編輯裝置' : modalData.name}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            {!actionButton && modalData.devices.map((item, index)=> <Device device={item} key={index}/>)}
            {actionButton && <EditView data={modalData}/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;