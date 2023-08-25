import Styles from './HomeHeader.module.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
export { HomeHeader };

function HomeHeader() {
  const [show, setShow] = useState(false);
    const router = useRouter();

    useEffect(() => {
      showCheck(router.asPath);
    }, [router]);

    function showCheck(url) {
      const publicPaths = ['/account/login', '/account/register'];
      if(publicPaths.includes(url)) {
        setShow(false);
      }else {
        setShow(true);
      }
    }
  if(show) {
    return (
      <div className={Styles.homeHeader}>
        <h1>哈囉 日山先生,</h1>
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