import React from "react";
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

const Modal = ({ setIsOpen, actionButton, modalData }) => {
  const ConfirmBtn = () => {
    function confirmPress() {
      setIsOpen(false);
    }

    return (
      <button className={styles.confirmBtn} onClick={() => confirmPress()}>
        確定
      </button>
    );
  }

  const DeleteBtn = () => {
    function deletePress() {
      setIsOpen(false);
    }

    return (
      <button className={styles.deleteBtn} onClick={() => deletePress()}>
        刪除
      </button>
    );
  }

  const CancelBtn = () => {
    return (
      <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
        取消
      </button>
    );
  }

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
          {!actionButton && <div className={styles.modalContent}>
            {modalData.devices.map((item, index)=> <Device device={item} key={index}/>)}
          </div>}
          {actionButton && <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <DeleteBtn/>
              <ConfirmBtn/>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
};

export default Modal;