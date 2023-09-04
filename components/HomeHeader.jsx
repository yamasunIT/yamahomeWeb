import Styles from './HomeHeader.module.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
export { HomeHeader };

function HomeHeader() {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState();
    const router = useRouter();

    useEffect(() => {
      showCheck(router.asPath);
      showName(router.asPath);
    }, [router]);

    function showCheck(url) {
      const publicPaths = ['/account/login', '/account/register'];
      if(publicPaths.includes(url)) {
        setShow(false);
      }else {
        setShow(true);
      }
    }

    function showName(url) {
      const homePaths = ['/dashboard/home'];
      if(homePaths.includes(url)) {
        const name = localStorage.getItem('user-name');
        if (name) {
          setUserName(name);
          console.log(name);
        }
      }
    }

  if(show) {
    return (
      <div className={Styles.homeHeader}>
        <h1>哈囉 {userName},</h1>
        <p>祝你有個美好的一天。</p>
        <p style={{height: '50px'}}>
          室內溫度: <br/>
          室內濕度:
        </p>
      </div>
    );
  } else {
    return (
      <div className={Styles.homeLoginHeader}>
        <h1 style={{height: '50px'}}>日山智慧家庭</h1>
      </div>
    );
  }
}