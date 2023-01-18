import style from './SliderImage.module.scss';

import person1 from 'assets/images/reviews/person1.png';
import { ReturnComponent } from 'types';

export const ActiveImageBorder = (): ReturnComponent => {
  return (
    <svg
      width="394"
      height="424"
      viewBox="0 0 394 424"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="img1" patternUnits="userSpaceOnUse" width="394" height="424">
          <image
            href={person1}
            x="0"
            y="0"
            width="394"
            height="424"
            style={{ backgroundImage: `url(${person1})` }}
            className={style.image}
          />
        </pattern>
        <filter id="filter0_b_1418_160" x="-10" width="414" height="444">
          <feBlend />
        </filter>
        <linearGradient
          id="paint0_linear_1418_160"
          x1="349.88"
          y1="383.276"
          x2="100.219"
          y2="-55.4601"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#15BFFD" />
          <stop offset="1" stopColor="#9C37FD" />
        </linearGradient>
      </defs>
      <g filter="url(#filter0_b_1418_160)">
        <path
          d="M388.672 360.975C391.453 358.009 393 354.097 393 350.031L393 17C393 8.16345 385.837 1 377 1L17 1C8.16345 1 1 8.16345 1 17L1 407C1 415.837 8.16345 423 17 423L323.586 423C328.009 423 332.234 421.17 335.258 417.944L388.672 360.975Z"
          fill="url(#img1)"
          fillOpacity="1"
        />
        <path
          d="M389.037 361.317C391.904 358.259 393.5 354.224 393.5 350.031L393.5 17C393.5 7.8873 386.113 0.5 377 0.5L17 0.5C7.8873 0.5 0.5 7.8873 0.5 17L0.5 407C0.5 416.113 7.8873 423.5 17 423.5L323.586 423.5C328.147 423.5 332.504 421.613 335.623 418.286L389.037 361.317Z"
          stroke="url(#paint0_linear_1418_160)"
          strokeOpacity="0.7"
        />
      </g>
    </svg>
  );
};
