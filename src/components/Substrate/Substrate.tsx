import style from './Substrate.module.scss';

import { ReturnComponent } from 'types';

export const Substrate = (): ReturnComponent => {
  return (
    <div className={style.substrate}>
      <div className={style.shadow} />
    </div>
  );
};
