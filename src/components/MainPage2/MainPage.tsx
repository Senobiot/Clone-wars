import React, {useRef} from 'react';
import styles from './MainPage.module.scss';
import { Link } from 'react-router-dom';

export function MainPage() {
      const activeSlideRef = useRef(null);
      let elem = activeSlideRef as unknown as HTMLElement;
  function ats () {

    // Add event listener
    document.addEventListener("mousemove", parallax);
    
    console.log(elem)

    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      console.log(elem.style.backgroundPosition = '200')
        // elem.style.backgroundPosition = x;
    }

};
  setTimeout(()=> {
    elem = activeSlideRef as unknown as HTMLElement;
    ats ();
  }, 1000);

    return (
      <>
        <div className={styles.mainPage} ref={activeSlideRef}>
            <div className={styles.mainPageBtnWrapper}>
            {['Найти свой медцентр', ' Найти своего врача', ' Посмотреть услуги', 'Зайти в свой кабинет'].map((text, i) => {
                return (
                    <Link key={i} to={
                        i === 0 ? '/MedcentersList/' :
                        i === 1 ? '/MedicsList/' :
                        i === 2 ? '/ServicesPage/' :
                        '/PersonalPage/'
                       }>
                       <div className={styles.mainPageButton}>
                        {text}
                        </div>  
                       </Link>
                )
            
            })}
        </div>
        </div>
      </>
    );
  }