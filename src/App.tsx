import { Header } from 'components/Header';
import { Substrate } from 'components/Substrate';

import style from './App.module.scss';

import { AboutUs } from 'screens/AboutUs';
import { Main } from 'screens/Main';
import { ReturnComponent } from 'types';

const App = (): ReturnComponent => {
  return (
    <div className={style.appWrapper}>
      <div className={style.container}>
        <Substrate />
        <Header />
        <Main />
        <AboutUs />
        {/* <Technologies /> */}
        {/* <Steps /> */}
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
