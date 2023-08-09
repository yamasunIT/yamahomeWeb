import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userService } from '../services';
export { Nav };
import { NavLink } from './NavLink';

function Nav() {
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
        <nav className="navbar navbar-expand navbar-dark bg-dark px-3 justify-content-end">
          <div className="navbar-nav">
            <NavLink href="/dashboard/home" exact className="nav-item nav-link">首頁</NavLink>
            {/*<NavLink href="/users" className="nav-item nav-link">使用者</NavLink>*/}
            <button onClick={userService.logout} className="btn btn-link nav-item nav-link">登出</button>
          </div>
        </nav>
      );
    } else {
      return null;
    }
}