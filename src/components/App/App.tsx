import React from 'react';
<<<<<<< HEAD
import {Footer} from '../Footer';
import {Header} from '../Header';
import '../../global/variables.scss';
import '../../global/reset.scss';

export default function App() {
  return (
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}
=======
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MedicsList from '../MedicsList/MedicsList';


const App: React.FC = () => {
    return (
        <div>
            <Header></Header>
            <MedicsList />
            <Footer></Footer>
        </div>
    );
};

export default App;
>>>>>>> 9f3ac45... feat: add cards and list base markups
