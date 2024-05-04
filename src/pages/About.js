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
            hello there! 😊 i'm UC Berkeley graduate 👩🏻‍🎓 with a major in Electrical Engineering &
            Computer Science 💻 and The Berkeley Certificate in Design Innovation. while my
            background leans toward a more technical foundation, my passion in design ✒️, where my
            background provides a unique perspective 🔍 for approaching design challenges.
            <br></br>
            <br></br>i am open to internships, part-time, and full-time junior positions 📇 in the
            ux/ui, product design, and visual/graphic design fields.
          </p>
        </div>
        <img src={require('../images/aboutTopPic.jpg')} alt='About Top' id='about-top-picture' />
      </div>

      <div className='about-middle-wrapper'>
        <img src={require('../images/about-01.png')} alt='About Dirt' id='about-dirt' />
        <img src={require('../images/about-02.png')} alt='About Fruit' id='about-fruit' />
        <img src={require('../images/about-03.png')} alt='About Vegetables' id='about-vegetable' />
        <div className='about-middle'>
          <div className='about-middle-left'>
            <h2>personal interests</h2>
          </div>
          <div className='about-middle-right'>
            <h3>backpacking & hiking (i’ve visited 10 national parks this year)</h3>
            <h3>brewing / drinking coffee</h3>
            <h3>skincare</h3>
            <h3>swimming</h3>
            <h3>cozy games (stardew valley is my favorite)</h3>
            <h3>reading (i love mieko kawakami & michael pollan)</h3>
          </div>
        </div>
      </div>
      <div className='about-bottom-wrapper'>
        <div className='about-bottom'>
          <h1>in my free time</h1>
          <p>
            as a 👩🏻‍🎨 multidisciplinary designer, i draw inspiration from everywhere and love to
            explore different ways 🖍️ to exercise my creativity. enjoy this compilation of some of
            my favorite 🖼️ personal projects.
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
