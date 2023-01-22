import { memo, MouseEvent } from 'react';

import { Paragraph } from 'components/generic/Paragraph';
import { anchors } from 'components/Header/enums';
import style from 'components/Header/Header.module.scss';
import { Logo } from 'components/icons/Logo';

export const Header = memo(() => {
  const onLinkClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    const anchor = event.currentTarget.getAttribute('href');
    const scrollElementLocation = document
      .querySelector(`${anchor}`)
      ?.getBoundingClientRect().top;

    window.scrollTo({
      top: scrollElementLocation,
      behavior: 'smooth',
    });
  };

  return (
    <header className={style.navbarWrapper}>
      <Logo />
      <nav className={style.navigateBlock}>
        <Paragraph level="p1">
          <a href={`#${anchors.aboutUs}`} onClick={onLinkClick}>
            About
          </a>
        </Paragraph>{' '}
        <Paragraph level="p1">
          <a href={`#${anchors.program}`} onClick={onLinkClick}>
            Programs{' '}
          </a>
        </Paragraph>
        <Paragraph level="p1">
          <a href={`#${anchors.steps}`} onClick={onLinkClick}>
            Steps
          </a>
        </Paragraph>
        <Paragraph level="p1">
          <a href={`#${anchors.questions}`} onClick={onLinkClick}>
            Questions
          </a>
        </Paragraph>
        <Paragraph level="p1">
          <a href={`#${anchors.getInTouch}`} onClick={onLinkClick}>
            Get in touch
          </a>
        </Paragraph>
      </nav>
    </header>
  );
});
