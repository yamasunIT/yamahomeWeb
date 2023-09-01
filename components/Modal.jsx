import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { IoBulbOutline } from "react-icons/io5";
import { BsPlug } from "react-icons/bs";
import { RxButton } from "react-icons/rx";

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
        Confirm
      </button>
    );
  }

  const DeleteBtn = () => {
    function deletePress() {
      setIsOpen(false);
    }

    return (
      <button className={styles.deleteBtn} onClick={() => deletePress()}>
        Delete
      </button>
    );
  }

  const CancelBtn = () => {
    return (
      <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
        Cancel
      </button>
    );
  }

  const Device = ({device}) => {
    function icontest() {
      switch(device.deviceType){
        case 'bulb':
          return <IoBulbOutline />

        case 'smartPlug':
          return <BsPlug />

        case 'onoff':
          return <RxButton />

        default:
          return <RxButton />
      }
    }
    return (
      <div className={styles.deviceView}>
        <div className="col-3" style={iconView}>
          {icontest()}
        </div>
        <div className="col-5" style={deviceNameView}>
          {device.name}
        </div>
        <div className="col-4 form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{width:60,height:25}} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
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
            <h5 className={styles.heading}>{modalData.name}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            {modalData.devices.map((item, index)=> <Device device={item} key={index}/>)}
          </div>
          {actionButton && <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <DeleteBtn data={modalData.devices}/>
              <CancelBtn/>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
};

export default Modal;