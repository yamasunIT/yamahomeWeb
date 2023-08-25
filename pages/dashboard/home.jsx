import Styles from '../../components/Footer.module.css';
import Head from 'next/head';

export default function Home() {

  const HomeButton = () => {
      return(
        <div className={Styles.homeText}>
        <div className={Styles.homeBody}>
        <div className="container text-center">
        <div className="row mb-1">
          <div className="col-md-4 btn border border-dark border border-5" href="#" role="button" style={{height:110}}>
            <div className="row">
              <div className="col-12">
                <div className="col-10"><p className="fs-1 fw-bold text-end">電燈</p></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 btn border border-dark border border-5" href="#" role="button" style={{height:110}}>
            <div className="row">
                <div className="col-12">
                  <div className="col-10"><p className="fs-1 fw-bold text-end">冷氣</p></div>
                </div>
            </div>
          </div>
          <div className="col-md-4 btn border border-dark border border-5" href="#" role="button" style={{height:110}}>
            <div className="row">
              <div className="col-12">
                <div className="col-10"><p className="fs-1 fw-bold text-end">窗簾</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-md-4 btn border border-dark border border-5" href="#" role="button" style={{height:110}}>
            <div className="row">
              <div className="col-12">
                <div className="col-12"><p className="fs-1 fw-bold text-end">掃地機器人</p></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 btn border border-dark border border-5" href="#" role="button" style={{height:110}}>
            <div className="row">
                <div className="col-12">
                  <div className="col-11"><p className="fs-1 fw-bold text-end">除濕機</p></div>
                </div>
            </div>
          </div>
          <div className="col-md-4 btn border border-dark border border-5" href="#" role="button" style={{height:110}}>
            <div className="row">
                <div className="col-12">
                  <div className="col-10"><p className="fs-1 fw-bold text-end">電視</p></div>
                </div>
            </div>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-md-4 btn border border-dark border border-5" href="#" role="button" style={{height:110}}>
            <div className="row">
                <div className="col-12">
                  <div className="col-10"><p className="fs-1 fw-bold text-end">風扇</p></div>
                </div>
            </div>
          </div>
          <div className="col-md-4 btn border border-dark border border-5" href="#" role="button" style={{height:110}}>
            <div className="row">
                <div className="col-12">
                  <div className="col-11"><p className="fs-1 fw-bold text-end">情境設定</p></div>
                </div>
            </div>
          </div>
          <div className="col-md-4 btn border border-dark border border-5" href="#" role="button" style={{height:110}}>
            <div className="row">
                  <div className="col-12">
                    <div className="col-10"><p className="fs-1 fw-bold text-end">link</p></div>
                  </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      );
  }

  return (
    <>
      <Head>
        <title>日山智慧家電</title>
      </Head>
      <div className={Styles.homeHead}>
        <h1>您好，日山先生</h1>
        <div><h7>祝您有一個美好的一天。</h7></div>
        <div><h7>室內溫度: 室內溼度:</h7></div>
        <a className="btn btn-dark" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        添加設備
        </a>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">家電產品</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
          <a className="btn btn-primary"  data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        新增家電
          </a>
          </div>
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
              下拉按鈕
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
        </div>
      <HomeButton/>
      </div>
    </>
  );
}
