import { memo } from 'react';

import { Heading } from 'components/generic/Heading';
import { Paragraph } from 'components/generic/Paragraph';
import { FacebookIcon } from 'components/Icons/FacebookIcon';
import { GitlabIcon } from 'components/Icons/GitlabIcon';

import style from './Footer.module.scss';

import { LinkedInIcon } from 'components/Icons/LinkedInIcon';
import { Logo } from 'components/Icons/Logo';
import { TwitterIcon } from 'components/Icons/TwitterIcon';
import { ReturnComponent } from 'types';

export const Footer = memo((): ReturnComponent => {
  return (
    <div className={style.footer}>
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
            <FacebookIcon />
            <GitlabIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </div>
  );
});
