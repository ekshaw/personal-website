import React, { useState, useCallback } from 'react';
import '../styles/About.css';
import Footer from '../components/Footer';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from '../content/Photos';

function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className='about-page'>
      <div className='about-top-wrapper'>
        <div className='about-top'>
          <h1>get to know me</h1>
          <p>
            Hello there! 😊 I'm UC Berkeley graduate 👩🏻‍🎓 with a B.S. in Electrical Engineering &
            Computer Science 💻 and The Berkeley Certificate in Design Innovation. With a background
            spanning in-house, creative agency, design education, and freelance design roles, I
            blend my technical background with design expertise to create inclusive, engaging
            designs!
            <br></br>
            <br></br> My design philosophy is rooted in creating MEANINGFUL experiences by making
            purposeful, justifiable design decisions, prioritizing essential functions and
            accessibility, and working on projects that have a 🌎 positive impact.
            <br></br>
            <br></br>
            Looking for a designer? I’m currently seeking a full-time role 📇 where I can grow as a
            UX/UI, product, or visual designer while creating thoughtful, user-focused work.
          </p>
        </div>
        <img
          src={require('../images/aboutTopPic.jpg')}
          alt='Emily at her UC Berkeley graduation'
          id='about-top-picture'
        />
      </div>

      <div className='about-middle-wrapper'>
        <img src={require('../images/about-01.png')} alt='' id='about-dirt' />
        <img src={require('../images/about-02.png')} alt='' id='about-fruit' />
        <img src={require('../images/about-03.png')} alt='' id='about-vegetable' />
        <div className='about-middle'>
          <div className='about-middle-left'>
            <h2>personal interests</h2>
          </div>
          <div className='about-middle-right'>
            <h3>backpacking & hiking</h3>
            <h3>swimming</h3>
            <h3>tennis</h3>
            <h3>running</h3>
            <h3>skincare</h3>
            <h3>cozy games</h3>
            <h3>thrifting</h3>
            <h3>brewing / drinking coffee</h3>
            <h3>reading</h3>
          </div>
        </div>
      </div>
      <div className='about-bottom-wrapper'>
        <div className='about-bottom'>
          <h1>in my free time</h1>
          <p>
            As a 👩🏻‍🎨 multidisciplinary designer, I draw inspiration from everywhere and love to
            explore different ways 🖍️ to exercise my creativity. Currently, I'm working on the
            DailyUI design challenge; you can view my progress on Dribbble
            <a href='https://dribbble.com/emilyshaw' target='_blank' rel='noreferrer'>
              <text> </text>
              <text
                style={{
                  color: 'green'
                }}>
                here
              </text>
            </a>
            ! <br></br>
            <br></br>Enjoy this compilation of some of my favorite 🖼️ personal / community projects.
            <br></br>
            <br></br>
          </p>
        </div>
        <div>
          <Gallery photos={photos} onClick={openLightbox} direction={'column'} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
      <div className='about-footer-container'>
        <Footer />
      </div>
    </div>
  );
}

export default About;
