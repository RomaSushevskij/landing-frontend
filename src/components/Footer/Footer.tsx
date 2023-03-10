import { memo } from 'react';

import { Heading } from 'components/generic/Heading';
import { Paragraph } from 'components/generic/Paragraph';
import { FacebookIcon } from 'components/icons/FacebookIcon';
import { GitlabIcon } from 'components/icons/GitlabIcon';

import style from './Footer.module.scss';

import { LinkedInIcon } from 'components/icons/LinkedInIcon';
import { Logo } from 'components/icons/Logo';
import { TwitterIcon } from 'components/icons/TwitterIcon';
import { ReturnComponent } from 'types';

export const Footer = memo((): ReturnComponent => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.address}>
          <Logo />
          <Paragraph level="p1">Wisconsin Ave, Suite 700</Paragraph>
          <Paragraph level="p1">Chevy Chase, Maryland 20815</Paragraph>
        </div>
        <div className={style.company}>
          <Heading level="h4">Company</Heading>
          <div className={style.links}>
            <Paragraph level="p2">About Us</Paragraph>
            <Paragraph level="p2">Review</Paragraph>
            <Paragraph level="p2">Steps</Paragraph>
            <Paragraph level="p2">Gallery</Paragraph>
            <Paragraph level="p2">FAQs</Paragraph>
          </div>
        </div>
        <div className={style.socialMedia}>
          <Heading level="h4">Social media</Heading>
          <div className={style.icons}>
            <a href="/#">
              <FacebookIcon />
            </a>
            <a href="/#">
              <GitlabIcon />
            </a>
            <a href="/#">
              <TwitterIcon />
            </a>
            <a href="/#">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
