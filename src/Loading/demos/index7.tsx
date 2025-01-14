import React from 'react';
import Loading from '..';
import usePageListener from '../../_util/hooks/usePageListener';

export default function LoadingDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Loading');

  return (
    <div style={{ position: 'relative', width: '200px', height: '50px' }}>
      <Loading type="strip" />
    </div>
  );
}
