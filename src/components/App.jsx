import React, { Fragment, memo } from 'react';
import StudyHeader from '@/components/StudyHeader.jsx';
import StudyBanner from '@/components/StudyBanner.jsx';

const App = memo(() => {
  return (
    <Fragment>
      <StudyHeader></StudyHeader>
      <StudyBanner></StudyBanner>
    </Fragment>
  );
});

export default App;
