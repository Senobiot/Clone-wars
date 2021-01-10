import React from 'react';
import {Footer} from '../Footer';
import {Header} from '../Header';
import MedicsList from '../MedicsList/MedicsList'
import '../../global/variables.scss';
import '../../global/reset.scss';

export default function App() {
  return (
    <>
      <Header></Header>
      <MedicsList />
      <Footer></Footer>
    </>
  );
}
