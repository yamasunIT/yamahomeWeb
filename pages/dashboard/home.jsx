import Styles from '../../styles/home.module.css';
import React, { useState, useEffect } from "react";
import Modal from '../../components/Modal';
import { useRouter } from 'next/router';
import { deviceService } from '../../helpers/api/device'

const buttonView = {
  height: '100px'
};

const homeData = [
  {
    name:"客廳",
    devices:[
      {
        name:'左燈',
        serailNo:'1',
        deviceType:'bulb'
      },
      {
        name:'右燈',
        serailNo:'2',
        deviceType:'smartPlug'
      },
      {
        name:'中燈',
        serailNo:'3',
        deviceType:'onoff'
      },
      {
        name:'左燈',
        serailNo:'1',
        deviceType:'smartPlug'
      },
      {
        name:'右燈',
        serailNo:'2',
        deviceType:'smartPlug'
      },
      {
        name:'中燈',
        serailNo:'3',
        deviceType:'11'
      }
    ]
  },
  {
    name:"廚房",
    devices:[
      {
        name:'前燈',
        serailNo:'1',
        deviceType:'smartPlug'
      },
      {
        name:'後燈',
        serailNo:'4',
        deviceType:'smartPlug'
      }
    ]
  },
  {
    name:"房間",
    devices:[
      {
        name:'前燈',
        serailNo:'1',
        deviceType:'smartPlug'
      },
      {
        name:'後燈',
        serailNo:'4',
        deviceType:'smartPlug'
      }
    ]
  },
  {
    name:"倉庫",
    devices:[
      {
        name:'前燈',
        serailNo:'1',
        deviceType:'smartPlug'
      },
      {
        name:'後燈',
        serailNo:'4',
        deviceType:'smartPlug'
      }
    ]
  },
  {
    name:"廁所",
    devices:[
      {
        name:'前燈',
        serailNo:'1',
        deviceType:'smartPlug'
      },
      {
        name:'後燈',
        serailNo:'4',
        deviceType:'smartPlug'
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
    ArrayButton();
  }, [router]);

  const ArrayButton = async () => {
    const res = await deviceService.getAllDevices();
    if(res.statusCode == 200){
      const newData = [];
      const serverData = res.data;
      for(let i = 0; i < serverData.length; i++){
        const filterData = newData.find((item) => item.name == serverData[i].room);
        if(filterData){
          filterData.devices.push(serverData[i]);
        } else{
          newData.push(
            {
              name:serverData[i].room,
              devices:[serverData[i]]
            }
          )
        }
      }
      console.log(newData);
      setData(newData);
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
