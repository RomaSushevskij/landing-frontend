import style from './Front.module.scss';

import { ReturnComponent } from 'types';

export const Front = (): ReturnComponent => {
  return <div className={style.front} />;
};
