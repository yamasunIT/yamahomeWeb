import { transferHomeData } from "../../helpers/method/common-method";
import React, { useState, useEffect } from "react";
import { deviceService } from '../../helpers/api/device'
import { useRouter } from 'next/router';

export default function EditHome() {
  const [data, setData] = useState([]);
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

  const HomeButton = () => {
      return(
        <div>
          尚未開發
      </div>
      );
  }

  return (
      <div>
        <HomeButton/>
      </div>
  );
}
