import React from 'react';
import WorkDesktop from './desktop/WorkDesktop';
import WorkMobile from './mobile/WorkMobile';
import { useMediaQuery } from 'react-responsive';

const Work = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 481px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <WorkDesktop />
        </>
      )}

      {isMobile && (
        <>
          <WorkMobile />
        </>
      )}
    </div>
  );
};

export default Work;
