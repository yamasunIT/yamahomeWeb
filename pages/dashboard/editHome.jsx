import { transferHomeData } from "../../helpers/method/common-method";
import React, { useState, useEffect } from "react";
import { deviceService } from '../../helpers/api/device'
import { useRouter } from 'next/router';
import { FaUserEdit } from "react-icons/fa";
import Styles from '../../styles/editHome.module.css';
import Modal from '../../components/Modal';

const deviceItem = {
  marginTop:5,
  marginBottom:3
};

const itemBtn = {
  float: 'right',
  marginRight:10,
  width:"100px",
  color: 'white'
};

export default function EditHome() {
  const [isOpen, setIsOpen] = useState(false);
  const [actionButton, setActionButton] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getData();
  }, [router]);

  const getData = async () => {
    const res = await deviceService.getAllDevices();
    if(res.statusCode == 200){
      const homeData = transferHomeData(res.data);
      console.log(homeData);
      setData(homeData);
    } else{
      console.log('連線失敗');
    }
  }

  const NewButton =() =>{
    const createDevice = () => {
      setIsOpen(true);
      setActionButton(true);
      const data = {
        name: '',
        devices: []
      }
      setModalData(data);
    }

    return(
      <div className="row">
        <div style={{textAlign:"center"}}>
          <button
            className={Styles.primaryBtn}
            onClick={() => createDevice()}>
              新增
          </button>
        </div>
      </div>
    );
  }

  const RoomDevices = ({data}) => {
    const editBtn = (data) => {
      setIsOpen(true);
      setActionButton(true);
      console.log(data);
      setModalData(data);
    }
    /*devices */
    const Device = ({device}) => {
      return (
        <div className="row" style={{alignItems: 'center'}}>
          <div className="col-8" style={deviceItem}>
              {device.name}
          </div> 
          <div className="col-4" style={deviceItem}>    
            <button
              className="btn btn-warning"
              style={itemBtn}
              onClick={() => editBtn(device)}>
                {FaUserEdit()}
            </button>
          </div>
        </div>
      );
    }
    
    return(
      <div style={{marginLeft: 30}}>
          <div className="col">
            <h2>
            {data.name}
            </h2>
          </div>
          <div className="col">
            {data.devices.map((device, index)=> <Device device={device} key={index}/>)}
          </div> 
      </div>
    );
  }

      return (
        <div className='container'>
          <NewButton/>
          {data.map((item, index)=> <RoomDevices data={item} key={index}/>)}
          {isOpen && <Modal setIsOpen={setIsOpen} actionButton={actionButton} modalData={modalData}/>}
        </div>
      );
}
