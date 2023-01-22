import { Effects } from 'components/Effects/Effects';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Substrate } from 'components/Substrate';
import { AboutUs } from 'screens/AboutUs';
import { Asks } from 'screens/Asks';
import { ContactUs } from 'screens/ContactUs';
import { Gallery } from 'screens/Gallery';
import { Main } from 'screens/Main';
import { Review } from 'screens/Review';

import style from './App.module.scss';

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
        <Asks />
        <Review />
        <Gallery />
        <ContactUs />
        <Footer />
        <Effects />
      </div>
    </div>
  );
};

export default App;
