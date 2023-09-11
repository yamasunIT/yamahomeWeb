import Styles from '../../styles/home.module.css';
import React, { useState, useEffect } from "react";
import Modal from '../../components/Modal';
import { useRouter } from 'next/router';
import { deviceService } from '../../helpers/api/device'
import { transferHomeData } from '../../helpers/method/common-method';

const buttonView = {
  height: '100px'
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [actionButton, setActionButton] = useState(false);
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getHomeData();
  }, [router]);

  const getHomeData = async () => {
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
    setModalData(data);
  }

  const HomeButton = ({data}) => {
    return (
      <div className='col-12 col-sm-6 col-md-4 text-center' style={buttonView}>
        <button className={Styles.primaryBtn} onClick={() => onPress(data)}>
          {data.name}
        </button>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='row row-cols-auto'>
        {data.map((item, index)=> <HomeButton data={item} key={index}/>)}
      </div> 
      {isOpen && <Modal setIsOpen={setIsOpen} actionButton={actionButton} modalData={modalData}/>}
    </div>
  );
}
