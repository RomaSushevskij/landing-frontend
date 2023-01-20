import React from 'react';

import { Highlight } from 'components/Highlight';
import { Star } from 'components/Star';
import { ReturnComponent } from 'types';

export const Effects = (): ReturnComponent => {
  return (
    <>
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
      <Star width={19.4} height={22.2} left={30} top={790} />
      <Star width={15} height={17} left={51} top={737} />
      <Star width={15} height={17} left={64} top={750} />
      <Star width={11.5} height={13} left={63} top={1300} />
      <Star width={14.8} height={17} left={70} top={1447} />
      <Star width={37.3} height={42.6} left={81.4} top={1523} />
      <Star width={24.2} height={27.7} left={29.8} top={2258} />
      <Star width={13.7} height={15.7} left={20} top={2678} />
      <Star width={13.7} height={15.7} left={62.3} top={2855} />
      <Star width={21.5} height={24.6} left={93.4} top={2694} />
      <Star width={13.7} height={15.7} left={88} top={3086} />
      <Star width={25} height={28.5} left={16.6} top={4621} />
      <Star width={25} height={28.5} left={86} top={5177} />
      <Star width={12.3} height={14} left={30} top={6574} />
      <Star width={12.3} height={14} left={57} top={6474} />
      <Star width={29} height={32.7} left={66} top={6323} />
      <Star width={35.6} height={40.6} left={85.5} top={744} isShadow />
    </>
  );
};
