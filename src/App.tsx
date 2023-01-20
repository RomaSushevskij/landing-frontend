import React from 'react';

import { Footer } from 'components/Footer';
import { Highlight } from 'components/Highlight';
import { NavBar } from 'components/NavBar';
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
        <NavBar />
        <Main />
        <AboutUs />
        <Technologies />
        <Steps />
        <Asks />
        <Review />
        <Gallery />
        <ContactUs />
        <Footer />
        <Highlight left={15.3} top={494} />
        <Highlight left={74.2} top={388} />
        <Highlight left={76.5} top={1256} />
        <Highlight left={14.4} top={1849} />
        <Highlight left={14.4} top={2678} />
        <Highlight left={74} top={4000} />
        <Highlight left={13.9} top={4721} />
        <Highlight left={75} top={5050} />
        <Highlight left={22} top={6157} />
        <Highlight left={75} top={6457} />
      </div>
    </div>
  );
};

export default App;
