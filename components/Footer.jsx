import Styles from '../components/Footer.module.css';

export { Footer };

function Footer(){
  const Info = ({info}) => {
    return (
      <div>
        <p className="text-uppercase fw-bold mb-0 text-center">
          <i className="fas fa-gem me-md-3"/>{info}
        </p>
      </div> 
    );
  }
  return (
    <div class="wrapper">
      <div class="content">
        <footer class={Styles.homeFooter}>
          <section class={Styles.footerBody}>
            <div class="container text-center text-md-start mt-0 id=footerbody">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-0 text-center">
                    <i class="fas fa-gem me-md-3"/>日山智慧家電
                  </h6>
                  <Info info={'聯絡我們'}/>
                  <Info info={'03-4711977'}/> 
                  <div class="text-uppercase fw-bold mb-0 text-center">
                    <a href="weihanyama@gmail.com" class="fas fa-gem me-md-0">weihanyama@gmail.com</a>
                  </div>
                  <Info info={'桃園市龍潭區紅橋路39號'}/> 
                  <div class="row justify-content-center align-item-center mt-0">
                    <div class="col-md-2"></div>
                    <div class="col-3 align-item-center mb-0">
                      <a href="https://www.facebook.com/YAMASOLAR style=align-item:center;"><svg xmlns="http://www.w3.org/2000/svg" class="bi bi-facebook" width="20px" height="20px"><path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'></path></svg></a>
                    </div>
                    <div class="col-3 align-item-center mb-0">
                      <a href="https://line.me/ti/p/iVhZeE23y_ style=align-item:center;"><svg xmlns="http://www.w3.org/2000/svg" class="bi bi-line" width="20px" height="20px"><path d='M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z'></path></svg></a>
                    </div>
                    <div class="col-3 align-item-center mb-0">
                      <a href="https://www.youtube.com/channel/UCvgyHFdzMg5SyxDDqiIHL8A/videos style=align-item:center;"><svg xmlns="http://www.w3.org/2000/svg" class="bi bi-youtube" width="20px" height="20px"><path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z'></path></svg></a>
                    </div>
                  </div>
                  <div class="under_footer">
                    <div class="row justify-content-center align-items-center ">
                      <i class="fas fa-gem me-md-0"/>Copyright © 2022 Yamasun All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}