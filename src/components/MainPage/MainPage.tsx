import React from 'react';
import styles from './MainPage.module.scss';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useDispatch } from 'react-redux';
import { chooseCategories } from '../../../store/actions/actionCategories';
import { chooseCategoriesTile } from '../../../store/actions/actionCategories';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 100}px,${y / 10}px,0)`
const trans2 = (x, y) => `rotate(${x / 8 + 35}deg)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 10}px,0)`
const trans5 = (x, y) => `translate3d(${x / 10}px,${y / 15}px,0)`
const trans6 = (x, y) => `translate3d(${x / 50}px,${y / 25}px,0)`


export function MainPage() {
  const dispatch = useDispatch();
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
      <>
        <div className={styles.mainPage} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div className={styles.card1} style={{ transform: props.xy.interpolate(trans1) }} />
        <animated.div className={styles.card2} style={{ transform: props.xy.interpolate(trans2) }} />
        <animated.div className={styles.card3} style={{ transform: props.xy.interpolate(trans3) }} />
        <animated.div className={styles.card4} style={{ transform: props.xy.interpolate(trans4) }} />
        <animated.div className={styles.card5} style={{ transform: props.xy.interpolate(trans5) }} />
        <animated.div className={styles.card6} style={{ transform: props.xy.interpolate(trans6) }} />
            <div className={styles.mainPageBtnWrapper}>
            {['Найти свой медцентр', ' Найти своего врача', ' Посмотреть услуги', 'Зайти в свой кабинет'].map((text, i) => {
                return (
                  <Link key={i} onClick={()=>{
                    if (i == 1) {
                        dispatch(chooseCategories('Все врачи'));
                        dispatch(chooseCategoriesTile(0));}
                   }} to={
                    i === 0 ? '/MedcentersList/' :
                    i === 1 ? '/MedicsList/' :
                    i === 2 ? '/ServicesPage/' :
                    '/PersonalPage/'
                    }>
                    <div className={styles.mainPageButton}>{text}</div>  
                  </Link>
                )          
            })}
        </div>
        </div>
      </>
    );
  }