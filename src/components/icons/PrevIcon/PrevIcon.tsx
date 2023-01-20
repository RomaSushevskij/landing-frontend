import { NextIcon } from 'components/icons/NextIcon';
import { ReturnComponent } from 'types';

export const PrevIcon = (): ReturnComponent => {
  return (
    <div style={{ transform: 'scale(-1, 1)' }}>
      <NextIcon />
    </div>
  );
};
