import React from 'react';
import AboutDesktop from './desktop/AboutDesktop';
import AboutMobile from './mobile/AboutMobile';
import { useMediaQuery } from 'react-responsive';

const About = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 481px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <AboutDesktop />
        </>
      )}

      {isMobile && (
        <>
          <AboutMobile />
        </>
      )}
    </div>
  );
};

export default About;
