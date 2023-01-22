import { Header } from 'components/Header';
import { Substrate } from 'components/Substrate';
import { AboutUs } from 'screens/AboutUs';

import style from './App.module.scss';

import { Main } from 'screens/Main';
import { Steps } from 'screens/Steps';
import { Technologies } from 'screens/Techhologies';
import { ReturnComponent } from 'types';

const App = (): ReturnComponent => {
  return (
    <div className={style.appWrapper}>
      <div className={style.container}>
        <Substrate />
        <Header />
        <Main />
        <AboutUs />
        <Technologies />
        <Steps />
        {/* <Asks /> */}
        {/* <Review /> */}
        {/* <Gallery /> */}
        {/* <ContactUs /> */}
        {/* <Footer /> */}
        {/* <Effects /> */}
      </div>
    </div>
  );
};

export default App;
