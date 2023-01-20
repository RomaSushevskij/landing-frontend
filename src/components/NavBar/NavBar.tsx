import { memo } from 'react';

import style from './NavBar.module.scss';

import { Paragraph } from 'components/generic/Paragraph';
import { Logo } from 'components/icons/Logo';

export const NavBar = memo(() => {
  return (
    <div className={style.navbarWrapper}>
      <Logo />
      <div className={style.navigateBlock}>
        <div className={style.navLink}>
          <Paragraph level="p1">About</Paragraph>
        </div>
        <div className={style.navLink}>
          <Paragraph level="p1">Programs</Paragraph>
        </div>
        <div className={style.navLink}>
          <Paragraph level="p1">Steps</Paragraph>
        </div>
        <div className={style.navLink}>
          <Paragraph level="p1">Questions</Paragraph>
        </div>
        <div className={style.navLink}>
          <Paragraph level="p1">Get in touch</Paragraph>
        </div>
      </div>
    </div>
  );
});
