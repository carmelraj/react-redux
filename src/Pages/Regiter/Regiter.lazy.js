import React, { lazy, Suspense } from 'react';

const LazyRegiter = lazy(() => import('./Regiter'));

const Regiter = props => (
  <Suspense fallback={null}>
    <LazyRegiter {...props} />
  </Suspense>
);

export default Regiter;
