import Styles from '../../components/Footer.module.css';


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
      <div className={Styles.homeHead}>
        <HomeButton/>
      </div>
    </>
  );
}
