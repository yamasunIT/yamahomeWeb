import Styles from '../../styles/home.module.css';
import React, { useState, useEffect } from "react";
import Modal from '../../components/Modal';
import { useRouter } from 'next/router';

const buttonView = {
  height: '100px'
};

const homeData = [
  {
    name: "客廳",
    devices: [
      {
        name: '左燈',
        serailNo: '12345678',
        deviceType: 'smartPlug'
      },
      {
        name: '右燈',
        serailNo: '543',
        deviceType: 'smartPlug'
      },
      {
        name: '中燈',
        serailNo: '8765',
        deviceType: 'smartPlug'
      }
    ]
  },
  {
    name: "廚房",
    devices: [
      {
        name: '前燈',
        serailNo: '12345678',
        deviceType: 'smartPlug'
      },
      {
        name: '後燈',
        serailNo: '2345',
        deviceType: 'smartPlug'
      }
    ]
  }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [actionButton, setActionButton] = useState(false);
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setData(homeData);
  }, [router]);


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
    <>
      {data.map((item, index)=> <HomeButton data={item} key={index}/>)}
      {isOpen && <Modal setIsOpen={setIsOpen} actionButton={actionButton} modalData={modalData}/>}
    </>
  );
}
