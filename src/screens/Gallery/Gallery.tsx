import { memo } from 'react';

import style from './Gallery.module.scss';

import { Heading } from 'components/generic/Heading';
import { Paragraph } from 'components/generic/Paragraph';
import { ReturnComponent } from 'types';

export const Gallery = memo((): ReturnComponent => {
  return (
    <section className={style.galleryWrapper}>
      <Heading level="h2">Gallery</Heading>
      <Paragraph level="p1" customStyle={style.comment_1}>
        By the end of this course, you will be able to develop and publish your very own
        Google Chrome extension! In this course we will focus on coding exercises and
        projects.{' '}
      </Paragraph>
      <div className={style.developer1} />
      <div className={style.developer2} />
      <div className={style.developer3} />
      <div className={style.developer4} />
      <Paragraph level="p1" customStyle={style.comment_2}>
        If you would like to learn web development and get a job in the tech industry, you
        are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more
        with over 15 hours of HD video tutorials! This course was designed to be extremely
        beginner friendly. We will begin with the very basics of HTML and build a simple
        web page.
      </Paragraph>
    </section>
  );
});
