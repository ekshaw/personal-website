import React from 'react';
import HomeDesktop from './desktop/HomeDesktop';
import HomeMobile from './mobile/HomeMobile';
import { useMediaQuery } from 'react-responsive';

const Home = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 481px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <HomeDesktop />
        </>
      )}

      {isMobile && (
        <>
          <HomeMobile />
        </>
      )}
    </div>
  );
};

export default Home;
