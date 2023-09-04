import React, { Fragment, memo } from 'react';
import StudyHeader from '@/components/StudyHeader.jsx';
import StudyBanner from '@/components/StudyBanner.jsx';
import StudyNav from '@/components/StudyNav.jsx';
import StudyRecommand from '@/components/StudyRecommand.jsx';
import CodeOpenDoor from '@/components/CodeOpenDoor.jsx';
import StudyWebProduct from '@/components/StudyWebProduct.jsx';
import StudyFooter from '@/components/StudyFooter.jsx';

const App = memo(() => {
  return (
    <Fragment>
      <StudyHeader></StudyHeader>
      <StudyBanner></StudyBanner>
      <StudyNav></StudyNav>
      <StudyRecommand></StudyRecommand>
      <CodeOpenDoor></CodeOpenDoor>
      <CodeOpenDoor></CodeOpenDoor>
      <StudyWebProduct></StudyWebProduct>
      <StudyWebProduct></StudyWebProduct>
      <StudyFooter></StudyFooter>
    </Fragment>
  );
});

export default App;
