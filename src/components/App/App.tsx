import React from 'react';
import {Footer} from '../Footer';
import {Header} from '../Header';
import MedicsList from '../MedicsList/MedicsList'
import '../../global/variables.scss';
import '../../global/reset.scss';
import { Switch } from '@material-ui/core';

export default function App() {
  return (
    <>
      <Header></Header>
        <MedicsList></MedicsList>
      <Footer></Footer>
    </>
  );
}
