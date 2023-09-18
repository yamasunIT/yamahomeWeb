import { transferHomeData } from "../../helpers/method/common-method";
import React, { useState, useEffect } from "react";
import { deviceService } from '../../helpers/api/device'
import { useRouter } from 'next/router';
import { FaUserEdit } from "react-icons/fa";

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


  const onPress = (data) => {
    setIsOpen(true);
    setActionButton(false);
    console.log(data);
    setModalData(data);
  }

  const DevicesButton =({data}) =>{
    return(
      <button type="button" className="btn btn-warning" style={{fontSize: 17,float: 'right',marginRight:10,width:"100px"}} onClick={() => onPress(data)}>{FaUserEdit()}</button>
      );
  }
  
  const NewButton =() =>{
    return(
      <div className="row">
        <div style={{textAlign:"center"}}>
          <button type="button" className="btn btn-warning " style={{width:250,margin:8,alignItems:'center' }} onClick={() => onPress()}>新增</button>
        </div>
      </div>
    );
  }

  const RoomDevices = ({data}) => {

    /*devices */
    const Device = ({data}) => {
      return (
        <div className="row">
          <div className="col-8" style={{marginTop:5,marginBottom:3}}>
              {data.name}
          </div> 
          <div className="col-4" style={{marginTop:5,marginBottom:3}}>    
              <DevicesButton data={data}/>
          </div>
        </div>
      );
    }
    
      return(
        <div style={{marginLeft:30}}>
            <div className="col">
              <h2>
              {data.name}
              </h2>
            </div>
            <div className="col">
              {data.devices.map((device, index)=> <Device data={device} key={index}/>)}
            </div> 
        </div>
      );
  }   
  
      return (
        <div className='container'>
          <NewButton/>
          {data.map((item, index)=> <RoomDevices data={item} key={index}/>)}
        </div>
      );
}
