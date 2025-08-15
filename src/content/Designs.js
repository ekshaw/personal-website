const Designs = [
  {
    title: 'yhwh apparel',
    timeline: '12 weeks',
    description: 'A website that that empowers people to express their identities through apparel',
    role: 'UI/UX Designer, Web Developer',
    team: (
      <div>
        2 Graphic Designers
        <br />1 UI/UX Designer <br />3 Web Developers
      </div>
    ),
    type: 'Product Design, Website Overhaul',
    tools: 'Figma / Illustrator / Photoshop / React / Node.js',
    designId: 'yhwh_apparel',
    url: 'http://www.yhwhapparel.com/',
    end: 'check out the live site',
    overview: (
      <div>
        YHWH Apparel is a purpose-driven fashion brand dedicated to{' '}
        <b>empowering identity through apparel.</b> Following a brand redesign, this 12-week project
        focused on overhauling the website to better tell its story, optimize for mobile, and unify
        the shopping experience.
      </div>
    ),
    images: [require('../images/yhwh-01.png'), require('../images/yhwh-02.png')],
    content: {
      body: [
        {
          componentName: 'basic',
          props: {
            heading: 'Research',
            title: 'Current Experience',
            summary: (
              <div>
                In interviews with our target audience (students and young adults), users connected
                with YHWH Apparel’s mission but felt the website didn’t convey it clearly. They were
                frustrated by clunky mobile navigation, an inconsistent shopping flow, and a lack of
                information about the brand’s purpose.
              </div>
            ),
            subimage: require('../images/yhwh-designs-before.gif')
          }
        },
        {
          componentName: 'odd',
          props: {
            title: 'Key Insights & Quotes',
            paragraph: [
              {
                subtitle: 'Mobile UI Issues',
                subparagraph: (
                  <div>
                    “I had to zoom in on my phone to even read some of the text.”<br></br>
                    <br></br>“I’d probably shop here if the site felt easier to navigate on my
                    phone.”<br></br>
                    <br></br>
                  </div>
                )
              },

              {
                subtitle: 'Weak Storytelling',
                subparagraph: (
                  <div>
                    “I didn’t realize that proceeds were donated to a charity.”<br></br>
                    <br></br>“I like the designs, but I had no idea this was tied to giving back.”
                    <br></br>
                    <br></br>“The website doesn’t really make me feel connected to the brand’s
                    purpose.”<br></br>
                    <br></br>
                  </div>
                )
              },
              {
                subtitle: 'Shopping Uncertainty',
                subparagraph: (
                  <div>
                    “When I clicked ‘Shop,’ it took me to another site and I wasn’t sure if it was
                    safe.”<br></br>
                    <br></br>
                  </div>
                )
              }
            ]
          }
        },
        {
          componentName: 'even',
          props: {
            title: 'Pain Points',
            summary: '',
            paragraph: [
              {
                subtitle: '01 – Inconsistent Branding',
                subparagraph:
                  'Typography, logo, and color lacked cohesion with the redesign, weakening brand recognition.'
              },
              {
                subtitle: '02 – Poor Mobile Usability',
                subparagraph:
                  'The desktop site was just scaled down, making navigation clunky on mobile.'
              },
              {
                subtitle: '03 – Fragmented Shopping Experience',
                subparagraph:
                  'The external Storenvy storefront felt disconnected and reduced trust.'
              },
              {
                subtitle: '04 – Weak Mission Communication',
                subparagraph:
                  'The site failed to convey the brand’s faith-driven values and giving-back purpose.'
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Problem',
            title: 'Overview',
            summary: (
              <div>
                YHWH Apparel’s website failed to clearly convey its mission and offered a clunky,
                disjointed shopping experience. Our goal was to create a platform that strengthens
                the brand’s identity, delivers a seamless mobile experience, and makes the shopping
                journey intuitive and engaging.
              </div>
            )
          }
        },
        {
          componentName: 'odd',
          props: {
            title: 'How Might We..',
            paragraph: [
              {
                subparagraph:
                  'help users understand the mission, purpose, and impact of YHWH’s products?'
              },
              {
                subparagraph: 'design mobile flows that feel fluid and intuitive?'
              },
              {
                subparagraph:
                  'create a cohesive shopping experience that encourages engagement & builds trust?'
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Solution',
            title: 'Journey Mapping',
            summary: (
              <div>
                After a competitive analysis of similar platforms, we{' '}
                <b>mapped out key user journeys</b>, focusing on a simplified homepage that
                introduced the brand and guided users to explore more with buttons that led to pages
                discussing design meaning and partnerships.
              </div>
            ),
            subimage: require('../images/yhwh-03.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Prototypes',
            summary: (
              <div>
                For the shopping experience, we designed a <b>three-step flow</b>: a main shop page
                that highlighted our new product, a detailed product page, and a streamlined
                checkout.
              </div>
            ),
            subimage: require('../images/yhwh-07.png')
          }
        },
        {
          componentName: 'row',
          props: {
            title: 'Design Process',
            summary: '',
            paragraph: [
              {
                subtitle: 'Testing & Iteration',
                subparagraph: (
                  <div>
                    User testing confirmed that users valued the{' '}
                    <b>homepage overview with clear pathways</b> to explore more details. But we
                    also uncovered confusion with mobile navigation. In response, we introduced more{' '}
                    <b>mobile-friendly elements</b> like sliding product cards, collapsible toggles,
                    and a footer with quick access to social links.
                  </div>
                )
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/yhwh-mobile.png')
          }
        },
        {
          componentName: 'row',
          props: {
            summary: '',
            paragraph: [
              {
                subparagraph: (
                  <div>
                    Visually, we explored applications of the new color palette. The{' '}
                    <b>neutral tones became the foundation</b> for consistency, while allowing
                    seasonal campaigns and bold product imagery to stand out.
                  </div>
                )
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/yhwh-contact-before.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/yhwh-contact-after.gif')
          }
        },
        {
          componentName: 'feature',
          props: {
            title: 'Features Overview',
            features: [
              {
                subtitle: 'Brand Storytelling',
                paragraph:
                  'A cohesive homepage with photography and copy that highlights the brand’s purpose and directs user flow towards learning more about YHWH’s mission.',
                image: require('../images/yhwh-design-after-web.gif')
              },
              {
                subtitle: 'Mobile Interface',
                paragraph:
                  'Swipe cards, toggled content, hamburger menu navigation, and easy social links.',
                image: require('../images/yhwh-design-after-mobile.gif')
              },
              {
                subtitle: 'Unified Shopping Platform',
                paragraph:
                  'Integrated product pages, dynamic cart, and intuitive checkout flow within the website.',
                image: require('../images/yhwh-06.png')
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Conclusion',
            title: 'Impact',
            summary: (
              <div>
                Post-launch, the new website delivered a smoother, more engaging experience for
                users.{' '}
                <b>
                  Mobile sessions increased by 55%, average engagement time grew by 40%, and
                  conversion rates doubled.
                </b>{' '}
                Visitors spent significantly more time exploring the brand’s mission-driven content,
                and <b>newsletter sign-ups increased</b>, signaling a stronger connection to YHWH
                Apparel’s purpose and products.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Next Steps',
            summary: (
              <div>
                YHWH’s focus is on building community, both with their customers and partnership
                organization. We could focus on utilizing this by encouraging user-generated content
                campaigns, creating seasonal story-driven landing pages that spotlight the current
                partnership, and exploring social shopping features.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Reflection',
            summary: (
              <div>
                Working as both the designer and a developer gave me a{' '}
                <b>new perspective on how design choices translate into a live site.</b> It pushed
                me to consider functionality, performance, and user experience simultaneously to
                create solutions that balance creativity with practicality.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            heroimage: require('../images/yhwh-04.png')
          }
        }
      ]
    }
  },
  {
    title: 'digital marketing campaigns',
    timeline: 'Ongoing',
    description:
      'A multidisciplinary portfolio of marketing assets for a variety of clients, causes, and campaigns',
    role: 'Designer',
    team: <div>Various Designers, Copywriters, Consultants, & Photographers</div>,
    type: 'Graphic Design, Visual Storytelling, Digital Marketing',
    tools: 'Photoshop / After Effects / Premiere Pro / Illustrator / Figma',
    designId: 'digital_marketing',
    url: '',
    end: 'thanks for viewing!',
    overview: (
      <div>
        This collection highlights some marketing campaigns I’ve created across social, web, email,
        and print for a variety of clients and causes. I draw from visual design, motion graphics,
        video editing, illustration, and layout skills to create assets that are user-centered and
        feel meaningful. Using tools like the Adobe Creative Suite and Figma, I’ve made everything
        from animated GIFs and short videos to editorial-style layouts and custom illustrations. I
        collaborate closely with design teammates, copywriters, consultants, and other stakeholders,
        often balancing multiple clients and brand guidelines at once. In these fast-paced settings,
        I stay on top of industry trends and turn around revisions quickly based on user testing
        feedback or performance metrics.
        <br></br>
        <br></br>
        With a balance of user centered thought, brand consistency, and a bit of creative
        experimentation, these projects were built to grab attention, tell a story, and get results!
      </div>
    ),
    images: [require('../images/mow-01.png')],
    content: {
      body: [
        {
          componentName: 'gallery',
          props: {
            heading: 'Americares',
            images: [
              {
                src: require('../images/amcr-01.gif'),
                width: 9,
                height: 16
              },
              {
                src: require('../images/amcr-02.gif'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/amcr-03.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/amcr-04.png'),
                width: 1,
                height: 1
              },

              {
                src: require('../images/amcr-05.gif'),
                width: 1,
                height: 2
              },

              {
                src: require('../images/amcr-06.gif'),
                width: 1,
                height: 2
              },

              {
                src: require('../images/amcr-07.gif'),
                width: 9,
                height: 16
              },
              {
                src: require('../images/amcr-08.gif'),
                width: 9,
                height: 16
              },
              {
                src: require('../images/amcr-09.gif'),
                width: 4,
                height: 3
              },
              {
                src: require('../images/amcr-10.gif'),
                width: 4,
                height: 3
              }
            ]
          }
        },
        {
          componentName: 'gallery',
          props: {
            heading: 'Citymeals on Wheels',
            images: [
              {
                src: require('../images/city-01.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/city-02.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/city-03.png'),
                width: 600,
                height: 270
              },
              {
                src: require('../images/city-04.gif'),
                width: 600,
                height: 340
              },
              {
                src: require('../images/city-05.gif'),
                width: 600,
                height: 415
              },
              {
                src: require('../images/city-06.gif'),
                width: 1,
                height: 1
              },

              {
                src: require('../images/city-08.png'),
                width: 600,
                height: 420
              },
              {
                src: require('../images/city-09.png'),
                width: 600,
                height: 364
              },
              {
                src: require('../images/city-10.png'),
                width: 600,
                height: 400
              },
              {
                src: require('../images/city-07.gif'),
                width: 1080,
                height: 380
              }
            ]
          }
        },
        {
          componentName: 'gallery',
          props: {
            heading: 'Friends of the Earth',
            images: [
              {
                src: require('../images/foe-01.gif'),
                width: 600,
                height: 480
              },
              {
                src: require('../images/foe-02.gif'),
                width: 600,
                height: 480
              },
              {
                src: require('../images/foe-03.gif'),
                width: 600,
                height: 480
              },
              {
                src: require('../images/foe-04.gif'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/foe-05.jpg'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/foe-06.gif'),
                width: 1400,
                height: 250
              },
              {
                src: require('../images/foe-07.png'),
                width: 480,
                height: 320
              },
              {
                src: require('../images/foe-08.gif'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/foe-09.gif'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/foe-10.gif'),
                width: 1,
                height: 1
              }
            ]
          }
        },
        {
          componentName: 'gallery',
          props: {
            heading: 'Greenpeace',
            images: [
              {
                src: require('../images/green-01.png'),
                width: 60,
                height: 294
              },
              {
                src: require('../images/green-02.gif'),
                width: 6,
                height: 5
              },
              {
                src: require('../images/green-03.png'),
                width: 60,
                height: 48
              },
              {
                src: require('../images/green-04.png'),
                width: 6,
                height: 5
              },
              {
                src: require('../images/green-05.png'),
                width: 60,
                height: 258
              },
              {
                src: require('../images/green-06.png'),
                width: 600,
                height: 1493
              },
              {
                src: require('../images/green-07.png'),
                width: 600,
                height: 1255
              },
              {
                src: require('../images/green-08.png'),
                width: 60,
                height: 57
              },
              {
                src: require('../images/green-09.png'),
                width: 600,
                height: 842
              },
              {
                src: require('../images/green-13.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/green-10.gif'),
                width: 600,
                height: 848
              },
              {
                src: require('../images/green-11.gif'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/green-12.gif'),
                width: 60,
                height: 72
              }
            ]
          }
        },
        {
          componentName: 'gallery',
          props: {
            heading: 'Innocence Project',
            images: [
              {
                src: require('../images/ip-01.png'),
                width: 600,
                height: 327
              },
              {
                src: require('../images/ip-02.png'),
                width: 600,
                height: 327
              },
              {
                src: require('../images/ip-03.png'),
                width: 600,
                height: 327
              }
            ]
          }
        },
        {
          componentName: 'gallery',
          props: {
            heading: 'Meals on Wheels',
            images: [
              {
                src: require('../images/mow-static-01.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-02.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-03.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-04.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-05.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-06.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-07.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-08.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-09.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-10.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-11.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-gif.gif'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-video-01.gif'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-video-02.gif'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-video-03.gif'),
                width: 1,
                height: 1
              }
            ]
          }
        }
      ]
    }
  },
  {
    title: 'recyclemate',
    timeline: '8 weeks (Final Project – Spring Semester)',
    description: 'An app that that gives users confidence in their waste disposal choices',
    role: 'UX Researcher, Product Designer, Visual Designer',
    team: (
      <div>
        4 UX Researchers / Product Designers
        <br />1 Machine Learning Engineer
      </div>
    ),
    type: 'UX Research, Product Design',
    tools: 'Figma, Adobe Illustrator, Miro',
    designId: 'recycle_mate',
    url: 'https://www.figma.com/file/ngRZADi8NGLOVeYSYU6D2z/RecycleMate?type=design&node-id=11%3A1833&mode=design&t=hn9GJzxnQPJLk723-1',
    end: 'check out the design file',
    overview: (
      <div>
        RecycleMate began in a Berkeley classroom with a smart trash can prototype ("Oscar") that
        used machine learning to auto-sort waste, aiming to address the confusion and lack of
        accessible resources around proper waste sorting.
        <br />
        <br />
        After testing and research, the feedback largely centered around accessibility and
        practicality. The next logical step: a mobile app concept that focused on education,
        behavior change, and motivation with waste disposal.
      </div>
    ),
    images: [require('../images/recycle-mate-01.png'), require('../images/recycle-mate-06.png')],
    content: {
      body: [
        {
          componentName: 'basic',
          props: {
            heading: 'Research',
            title: 'Initial Exploration',
            summary: (
              <div>
                We conducted a combination of surveys and user interviews, finding that on campus,
                over 20% of waste was incorrectly sorted, with over 50% of the waste in the landfill
                container. In interviews, given the task of categorizing trash, users expressed
                hesitation, especially when faced with recycling symbols & categorizing between
                different types of recyclables.
              </div>
            ),
            subimage: require('../images/recycle-mate-02b.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Key Findings & Insights',
            summary: (
              <div>
                Collaborative sessions utilizing UX frameworks helped surface the emotional friction
                around waste disposal. Our users wanted to do the right thing but felt discouraged
                by confusion and lack of feedback. Some users even shared that they weren’t
                motivated to spend extra time or effort on properly throwing things away. These
                insights laid the foundation for an experience that could bridge the gap between
                awareness and action.
              </div>
            ),
            subimage: require('../images/recycle-mate-02a.png')
          }
        },
        {
          componentName: 'row',
          props: {
            title: 'Pain Points',
            summary: '',
            paragraph: [
              {
                subtitle: '01 – No Reliable Disposal Guidance',
                subparagraph:
                  'Users found it difficult to locate accurate, easy-to-understand disposal information.'
              },
              {
                subtitle: '02 – Low Motivation',
                subparagraph:
                  'Most users weren’t inclined to research proper methods or spend time sorting trash without added value or incentives.'
              },
              {
                subtitle: '03 – Confusing Recycling Symbols',
                subparagraph:
                  'Labeling inconsistencies and unclear recycling symbols created confusion about how to properly categorize items.'
              },
              {
                subtitle: '04 – No Feedback Loop',
                subparagraph:
                  'Users didn’t know if they were doing things “right,” leading to hesitation and inconsistent habits.'
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/recycle-mate-03.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Problem',
            title: 'Overview',
            summary: (
              <div>
                Many individuals want to dispose responsibly but are faced with unclear labeling,
                unreliable sources, and low motivation. The challenge: build a product that combines
                real-time guidance, accessible education, and habit formation.
              </div>
            )
          }
        },
        {
          componentName: 'odd',
          props: {
            title: 'How Might We..',
            paragraph: [
              {
                subparagraph:
                  'Empower individuals to make informed and environmentally responsible disposal choices?'
              },
              {
                subparagraph: 'Reduce friction in the decision-making process around waste?'
              },
              {
                subparagraph:
                  'Turn occasional efforts into long term sustainable behaviors and routines?'
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Solution',
            title: 'Early Concepts',
            summary: (
              <div>
                The project began with Oscar, a smart trash can prototype built using machine
                learning to identify and sort waste. It successfully categorized items into compost,
                recycling, or trash using barcodes, symbols, and image recognition.
              </div>
            ),
            subimage: require('../images/recycle-mate-04.png')
          }
        },
        {
          componentName: 'row',
          props: {
            title: 'Design Process',
            summary: '',
            paragraph: [
              {
                subtitle: 'Testing & Iteration',
                subparagraph: (
                  <div>
                    After demoing the smart trash can and allowing users to interact with it,
                    feedback showed that while the tech was effective, it wasn’t practical for most
                    users. It lacked educational value and wasn’t helpful in public settings. While
                    this marked the end of our capstone project, I wanted to extend this project and
                    the feedback we received, leading to an app concept, RecycleMate—a more
                    accessible, scalable way to educate and motivate users wherever they are.
                  </div>
                )
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heroimage: require('../images/recycle-mate-01.png')
          }
        },
        {
          componentName: 'feature',
          props: {
            title: 'Features Overview',
            features: [
              {
                subtitle: 'Brand Identity',
                paragraph:
                  'A cohesive color palette, typography, and iconography system to make the app approachable and motivate users to want to use it.',
                image: require('../images/recycle-mate-07.png')
              },
              {
                subtitle: 'Onboarding Flow',
                paragraph:
                  'A brief, step-by-step introduction that quickly orients users to the app’s purpose and how to use it.',
                image: require('../images/recycle-mate-onboarding.gif')
              },
              {
                subtitle: 'Home Dashboard',
                paragraph:
                  'A visually engaging home screen with at-a-glance analytics showing progress, impact, and recent activity.',
                image: require('../images/recycle-mate-05.png')
              }
              // {
              //   subtitle: 'Item Scanner',
              //   paragraph:
              //     'An image recognition tool that helps users identify how to properly dispose of an item in real time.',
              //   image: require('../images/recycle-mate-06.png')
              // }
            ]
          }
        },

        {
          componentName: 'basic',
          props: {
            heading: 'Conclusion',
            title: 'Next Steps',
            summary: (
              <div>
                RecycleMate addresses a major gap in sustainability by making waste education more
                approachable. By simplifying complex sorting decisions and encouraging better
                habits, users can build confidence and awareness around responsible waste disposal.
                <br></br>
                <br></br>
                Moving forward, the app could benefit from a more robust, crowdsourced database and
                improved image recognition to support a wider range of items. Gamification—like
                badge systems or point-based rewards—could further drive motivation and engagement.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Reflection',
            summary: (
              <div>
                This project marked a turning point in how I approach design, following a full
                user-centered process: conducting research, identifying real pain points, and
                building a solution directly from those insights. Rather than retrofitting solutions
                to assumed problems, the app emerged organically from user needs.
                <br></br>
                <br></br>
                It taught me how listening, testing, and iteration are the foundation of effective
                design. RecycleMate fundamentally shaped how I approach UX problems: with curiosity,
                empathy, and a clear commitment to the user.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            heroimage: require('../images/recycle-mate-08.png')
          }
        }
      ]
    }
  },
  {
    title: 'the next iteration podcast',
    timeline: '4 weeks',
    description:
      'A multidisciplinary podcast with a mission to engage and enlighten twenty-somethings',
    role: 'Graphic Designer',
    team: <div>1 Graphic Designer</div>,
    type: 'Graphic Design, Brand Redesign',
    tools: 'Illustrator / Figma / Womp3D',
    designId: 'next_iteration_podcast',
    url: 'https://www.figma.com/proto/sYaRwlDIWE9aHwKVvyNixA/nextiteration-branding-guide?page-id=0%3A1&type=design&node-id=1-2&viewport=266%2C197%2C0.06&t=nqQWRQxsCFDvaSxw-1&scaling=min-zoom&starting-point-node-id=1%3A2&mode=design',
    end: 'check out the branding guide',
    overview: (
      <div>
        With a mission to engage and enlighten twenty-somethings on a diverse range of topics, from
        meditation to the future of technology and politics, The Next Iteration Podcast’s wanted to
        refresh their visual identity and expand their reach. The redesign spanned a new logo,
        comprehensive branding guidelines, podcast thumbnails, and visual assets.
      </div>
    ),
    images: [
      require('../images/next-iteration-01.png'),
      require('../images/next-iteration-02.png')
    ],
    content: {
      body: [
        {
          componentName: 'basic',
          props: {
            heading: 'Research',
            title: 'Client Conversations',
            summary: (
              <div>
                When the creators of The Next Iteration Podcast approached me, their vision was
                clear: they wanted a brand that felt as multifaceted and future-facing as the
                conversations they were having. The existing visuals, however, felt generic and
                inconsistent, making it hard to stand out in a saturated podcast space.
                <br></br>
                <br></br>
                In particular, the current logo was a Rubik’s Cube. While the team liked its
                symbolism of different “iterations” referencing positions or stages in life, they
                didn’t want the implication that life was a solvable problem or that there was a
                “right” way to live life.
              </div>
            ),
            subimage: require('../images/next-iteration-before-assets.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Research',
            title: 'Exploration',
            summary: (
              <div>
                I started by gathering insights directly from the podcast creators about their
                goals, target audience, and design preferences. I listened to episodes to better
                understand their tone and content, and benchmarked the visual identities of similar
                podcasts catering to the same demographic. The competitive analysis revealed a gap:
                while many brands looked professional or playful, few balanced both, especially in a
                way that felt personal and intellectually engaging.
              </div>
            ),
            subimage: require('../images/next-iteration-before-website.gif')
          }
        },
        {
          componentName: 'row',
          props: {
            title: 'Pain Points',
            summary: '',
            paragraph: [
              {
                subtitle: '01 – Branding Misalignment',
                subparagraph:
                  'The existing branding failed to capture the podcast’s depth, range, and mission, making it harder to connect with the target audience.'
              },
              {
                subtitle: '02 – Fragmented Visual Identity',
                subparagraph:
                  'Without a unified visual system or templates, designs varied widely across platforms, resulting in an inconsistent brand presence.'
              }
            ]
          }
        },

        {
          componentName: 'basic',
          props: {
            heading: 'Problem',
            title: 'Overview',
            summary: (
              <div>
                The Next Iteration Podcast had strong content and a clear mission—bridging
                meaningful, wide-ranging conversations with curious twenty-somethings. But without
                branding guidelines, it made it harder to establish brand recognition and trust.
              </div>
            )
          }
        },
        {
          componentName: 'odd',
          props: {
            title: 'How Might We..',
            paragraph: [
              {
                subparagraph:
                  'Create a brand that can flex across many themes while remaining instantly recognizable?'
              },
              {
                subparagraph:
                  'Balance playful energy with professionalism to appeal to an young, intellectual audience?'
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Solution',
            title: 'Concepts',
            summary: (
              <div>
                I began sketching ideas rooted in curiosity and multidimensionality: spirals,
                ripples, layered shapes—metaphors for ongoing growth and iteration. During feedback
                sessions, the client referenced the work of Karim Rashid, prompting a shift toward
                organic, fluid, abstract, and futuristic forms.
              </div>
            ),
            subimage: require('../images/next-iteration-03.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Color & Type',
            summary: (
              <div>
                Wanting to represent the variety and diversity in their topics and quests, and lean
                more into a more playful image, this shift also heavily influenced the color palette
                and typography.
              </div>
            ),
            subimage: require('../images/next-iteration-color-palette.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            subimage: require('../images/next-iteration-typography.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'The Next Iteration',
            summary: (
              <div>
                The client stressed they wanted to keep the aspect of the Rubik’s Cube, or at least
                something that was rooted in and inspired by it. After discussions, this idea
                evolved into a dynamic, modular logo composed of a shifting forms that symbolize
                curiosity, exploration, and continual growth without a “final answer.” I realized
                there were limitations in creating the design using only Adobe Illustrator and
                Photoshop, so given the client’s vision, I used Womp3D for graphics as we moved
                toward the final iteration.
              </div>
            ),
            subimage: require('../images/next-iteration-process.png')
          }
        },
        {
          componentName: 'feature',
          props: {
            title: 'Features Overview',
            features: [
              {
                subtitle: 'Branding Guidelines',
                paragraph:
                  'A comprehensive guide detailing logo usage, color palettes, typography, and design principles for consistency across platforms',
                image: require('../images/next-iteration-branding-guide.png')
              },
              {
                subtitle: 'Podcast Assets',
                paragraph:
                  'Editable templates for episode thumbnails, cover art, and social media images, ensuring a cohesive look while allowing flexibility for new topics and guests',
                image: require('../images/next-iteration-06.png')
              },
              {
                subtitle: 'Website Concept',
                paragraph:
                  'A conceptual website design aligned with the refreshed brand identity, aimed at improving audience engagement and showcasing episodes, guests, and topics',
                image: require('../images/next-iteration-website.gif')
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Conclusion',
            title: 'Next Steps',
            summary: (
              <div>
                To extend the identity beyond digital channels, I want to explore physical brand
                touchpoints—business card designs for networking, and merchandise like stickers and
                totes to support community-building and audience loyalty. These assets create
                opportunities for brand activation at events, in collaborations, and within the
                podcast’s growing listener base.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Reflection',
            summary: (
              <div>
                This project not only strengthened my branding and systems design skills but also
                encouraged me to try out Womp3D, where I experimented with creating basic 3D
                graphics for the first time. It was challenging, but I had a lot of fun designing
                for this project and expanding my skillset!
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            heroimage: require('../images/next-iteration-thank-you.png')
          }
        }
      ]
    }
  },
  {
    title: "federal way women's health care",
    timeline: '2 weeks',
    description:
      'A website for patients seeking a comprehensive women’s health clinic, providing information about services, treatments, and wellness',
    role: 'Website Designer & Implementer',
    team: <div>1 Website Designer & Implementer</div>,
    type: 'Product Design, Website Overhaul',
    tools: 'Figma / Website Builder',
    designId: 'federal_way_womens_health_care',
    url: 'https://federalwayobgyn.com/',
    end: 'check out the live site',
    overview: (
      <div>
        The Federal Way Women’s Health Care website was redesigned to deliver a{' '}
        <b>patient-friendly experience</b> for a diverse audience of women seeking OB-GYN care. The
        project focused on <b>inclusivity and accessibility</b>, building a site that patients could
        navigate easily while giving the clinic’s staff the ability to update content quickly
        without relying on an external developer.
      </div>
    ),
    images: [
      require('../images/federal-way-womens-01.png'),
      require('../images/federal-way-womens-07.png')
    ],
    content: {
      body: [
        {
          componentName: 'basic',
          props: {
            heading: 'Research',
            title: 'Client Conversations',
            summary: (
              <div>
                Clinic staff expressed frustration with their existing third-party website provider.
                Updates were slow, expensive, and required waiting on responses from outside help.
                They needed a site they could manage internally and wanted it to feel more welcoming
                and representative of their patients.
              </div>
            ),
            subimage: require('../images/federal-way-womens-08.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Current Experience',
            summary: (
              <div>
                I analyzed the original site and found the{' '}
                <b>information architecture lacked hierarchy</b>, with long blocks of unstructured
                text that made it hard for patients to find key details. Staff emphasized the need
                for important content like new patient forms and contact information to be more
                prominent. They also pointed out that the existing visuals felt generic and wanted{' '}
                <b>imagery that was more purposeful.</b>
              </div>
            ),
            subimage: require('../images/federal-way-womens-before-q&a-video.gif')
          }
        },
        {
          componentName: 'row',
          props: {
            title: 'Pain Points',
            summary: '',
            paragraph: [
              {
                subtitle: '01 – Cluttered Design',
                subparagraph:
                  'Pages were visually overwhelming with information, making it hard for patients to find what they needed.'
              },
              {
                subtitle: '02 – Limited Inclusivity',
                subparagraph:
                  'Imagery didn’t reflect the diversity of patients, leaving the brand feeling disconnected from its community.'
              },
              {
                subtitle: '03 – Staff Frustrations',
                subparagraph:
                  'The old site relied on a third-party provider, making updates slow, costly, and difficult to manage.'
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Problem',
            title: 'Overview',
            summary: (
              <div>
                Federal Way Women’s Health Care needed a site that balanced{' '}
                <b>trust, inclusivity, and usability.</b> The redesign aimed to simplify complex
                service information to improve user flow, reflect patient diversity, and empower
                staff to manage updates internally.
              </div>
            )
          }
        },
        {
          componentName: 'odd',
          props: {
            title: 'How Might We..',
            paragraph: [
              {
                subparagraph:
                  'Design a trustworthy and inclusive experience that serves women of all ages, backgrounds, and ethnicities?'
              },
              {
                subparagraph:
                  'Empower clinic staff with a website they can easily update themselves?'
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Solution',
            title: 'Structure & Flow',
            summary: (
              <div>
                I started by mapping out the <b>site structure and user flows</b>, thinking through
                how someone might land on the site, explore services, and get in touch. One thing
                that stood out right away: it was hard for new patients to actually contact the
                clinic—there was contact info listed, but nothing clickable. I added a{' '}
                <b>Contact Us form</b> directly to the site and made the phone number{' '}
                <b>tap-to-call</b>, especially helpful for mobile users. <br></br>
                <br></br>The staff mentioned that the long service descriptions were essential. To
                keep the info but make it easier to digest, I turned those sections into{' '}
                <b>expandable Q&As</b>, so users could get the answers they needed without scrolling
                through a wall of text.
              </div>
            ),
            subimage: require('../images/federal-way-womens-health-clinic-contact-us.gif')
          }
        },
        {
          componentName: 'row',
          props: {
            title: 'Design Process',
            summary: '',
            paragraph: [
              {
                subtitle: 'Testing & Iteration',
                subparagraph: (
                  <div>
                    I focused on building a site that was easy for both patients and staff to use.
                    To simplify updates, I transitioned the site to a GoDaddy-managed platform,
                    which offered SEO benefits and allowed staff to make changes themselves without
                    needing a developer. Since their domain was already hosted with GoDaddy, the
                    staff were familiar with the platform, which eased the transition.
                    <br></br>
                    <br></br>
                    Throughout the process, I had the clinic staff interact with prototypes,
                    providing feedback that guided refinements, like simplifying the homepage
                    structure and curating inclusive imagery.
                  </div>
                )
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heroimage: require('../images/federal-way-womens-09.png')
          }
        },
        {
          componentName: 'feature',
          props: {
            title: 'Features Overview',
            features: [
              {
                subtitle: 'Patient-Centered Q&A',
                paragraph:
                  'Clear, accessible information on services like well-women exams, pregnancy care, and menopause support',
                image: require('../images/federal-way-womens-q&a-video.gif')
              },
              {
                subtitle: 'Inclusive Imagery',
                paragraph:
                  'Photography and language reflecting the clinic’s diverse patient demographics',
                image: require('../images/federal-way-womens-10.png')
              },
              {
                subtitle: 'Clean Interface',
                paragraph:
                  'A minimal design using muted neutrals with the brand’s signature purple color for consistency',
                image: require('../images/federal-way-womens-04.png')
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Conclusion',
            title: 'Impact',
            summary: (
              <div>
                The redesigned website dramatically improved the clinic’s online presence, replacing
                a site that often didn’t function correctly for users and left patients frustrated.
                The new design made it easy for patients to find information and navigate services
                without confusion, while{' '}
                <b>SEO optimization helped the site rank at the top for local search results.</b>{' '}
                <br></br>
                <br></br>
                Most importantly,{' '}
                <b>staff now have full control over updates and content management</b>, eliminating
                their reliance on an unresponsive third-party provider and ensuring the site can
                grow and adapt with the clinic’s needs.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Reflection',
            summary: (
              <div>
                This project emphasized the importance of designing for{' '}
                <b>both the patient journey and the client’s workflow.</b> Thinking about the needs
                of everyone involved, the final website is a scalable, maintainable solution that
                delivers value beyond launch.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            heroimage: require('../images/federal-way-womens-05.png')
          }
        }
      ]
    }
  },
  {
    title: 'assurance collection',
    timeline: '4 weeks',
    description:
      'A seasonal apparel collection and cross-platform marketing campaign for YHWH Apparel, resulting in the brand’s highest-performing launch',
    role: 'Graphic Designer, UI Designer',
    team: (
      <div>
        4 Graphic Designers <br />1 Copywriter
      </div>
    ),
    type: 'Graphic Design, Digital Marketing, Apparel Design, UI Design',
    tools: 'Illustrator / Photoshop / Figma / Miro',
    designId: 'assurance',
    url: 'https://yhwhapparel.medium.com/introducing-the-assurance-collection-2228b3de414',
    end: 'read more about the intentions behind the design',
    overview: (
      <div>
        The Assurance Collection was a seasonal apparel drop for <b>YHWH Apparel</b>, a faith-based
        streetwear brand, consisting of a long-sleeve t-shirt and tote bag. Designed to embody the
        theme of “assurance” through scripture-inspired visuals, the collection merged spiritual
        storytelling with modern, trend-conscious design.
        <br />
        <br />
        Our team included four graphic designers and one copywriter. Ultimately, my design, a
        surreal photo-manipulation style, was chosen as the visual centerpiece for the collection.
        Alongside apparel design, I led the creation of <b>digital marketing assets</b> for the
        launch.
        <br />
        <br />
        Proceeds supported <b>Letters of Hope</b>, a nonprofit sharing the Gospel with incarcerated
        individuals.
      </div>
    ),
    images: [require('../images/assurance-01.png')],
    content: {
      body: [
        {
          componentName: 'basic',
          props: {
            heading: 'Research',
            title: 'Exploration',
            summary: (
              <div>
                Our design team began the Assurance Collection by aligning on the theme through
                scripture, drawing inspiration from passages like Acts 16:23–34, Hebrews 10:19–25,
                Psalm 118:24, John 11:1–6, 17–27, and Habakkuk 1:1–5. Using Miro, we collaboratively
                brainstormed concepts that could visually express the peace, confidence, and
                community found in Christ.
              </div>
            ),
            subimage: require('../images/assurance-03.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Process',
            title: 'Concepts',
            summary: (
              <div>
                From these sessions, we explored multiple directions with many designs progressing
                into mid- and high-fidelity stages. After internal review with the team,{' '}
                <b>my design was chosen as the primary visual direction</b> for both apparel pieces
                and the campaign’s digital presence. My surreal photo manipulation style, combined
                with typographic layouts, resonated strongly with our intended audience of college
                students and twenty-somethings, while staying rooted in the collection’s faith-based
                message.
                <br></br>
                <br></br>
                As <b>UI Designer</b>, I also developed <b>digital assets to support the launch</b>,
                including landing page popups (desktop + mobile), hero assets for the shop page,
                social and website countdown graphics, and curated product page visuals to align
                with the collection’s aesthetic.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Conclusion',
            title: 'Impact',
            summary: (
              <div>
                The Assurance Collection became{' '}
                <b>YHWH Apparel’s highest-performing launch to date.</b> The collection sold out
                quickly after release — an unprecedented milestone for the brand — and demand was so
                strong that it prompted the company’s first-ever restock.
                <br></br>
                <br></br>
                Customer feedback praised both the apparel and the campaign’s visual storytelling,
                noting how the designs felt meaningful, modern, and aligned with the brand’s
                mission.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'apparel design',
            image: require('../images/assurance-apparel-designs.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'apparel mockups',
            image: require('../images/assurance-apparel-mockups.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'marketing & ui assets',
            image: require('../images/assurance-countdowns.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/assurance-old-popups.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/assurance-new-popups.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/assurance-mobile-mockups.png')
          }
        }
      ]
    }
  },
  {
    title: 'meals on wheels',
    timeline: '1 week',
    description:
      'A suite of social media and email marketing assets for Meals on Wheels’ year-end fundraising campaign',
    role: 'Graphic Designer',
    team: (
      <div>
        1 Graphic Designer <br></br>1 Consultant<br></br>1 Copywriter<br></br>1 Client Photographer
      </div>
    ),
    type: 'Graphic Design, Motion Graphics, Digital Marketing',
    tools: 'Photoshop / After Effects / Premiere Pro / Illustrator',
    designId: 'meals_on_wheels',
    url: '',
    end: 'thanks for viewing!',
    overview: (
      <div>
        For Meals on Wheels’ year-end fundraising campaign, our goal was to tell the stories of
        seniors whose lives are positively impacted by the program. The campaign aimed to inspire
        donations by highlighting the human side of the organization’s mission across social media
        and email channels.
        <br></br>
        <br></br>I collaborated closely with a copywriter, a campaign consultant, and the client to
        produce a suite of marketing materials. The work included editing and assembling videos in
        Premiere Pro, creating GIF animations in After Effects and Photoshop, enhancing photos for
        better readability, and designing visual assets in Illustrator. Together, we crafted a
        cohesive visual narrative that amplified the campaign’s emotional impact and encouraged
        audience action.
      </div>
    ),
    images: [require('../images/mow-01.png')],
    content: {
      body: [
        {
          componentName: 'gallery',
          props: {
            heading: 'static assets',
            images: [
              {
                src: require('../images/mow-static-01.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-02.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-03.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-04.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-05.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-06.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-07.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-08.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-09.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-10.png'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-static-11.png'),
                width: 1,
                height: 1
              }
            ]
          }
        },
        {
          componentName: 'gallery',
          props: {
            heading: 'example gif',
            images: [
              {
                src: require('../images/mow-gif.gif'),
                width: 1,
                height: 1
              }
            ]
          }
        },
        {
          componentName: 'gallery',
          props: {
            heading: 'video ads',
            images: [
              {
                src: require('../images/mow-video-01.gif'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-video-02.gif'),
                width: 1,
                height: 1
              },
              {
                src: require('../images/mow-video-03.gif'),
                width: 1,
                height: 1
              }
            ]
          }
        }
      ]
    }
  },
  {
    title: 'intro to illustrator & photoshop',
    timeline: '10 week course (3 cohorts)',
    description: 'Instructor for a University of California, Berkeley introductory design course',
    role: 'Course Instructor',
    team: (
      <div>
        1 Course Instructor <br />1 Teaching Assistant
      </div>
    ),
    type: 'Graphic Design, Design Education',
    tools: 'Illustrator / Photoshop / XD',
    designId: 'intro_to_illustrator_and_photoshop',
    url: 'https://decal.berkeley.edu/courses/6967',
    end: 'find the course information',
    overview: (
      <div>
        Intro to Photoshop & Illustrator is a University of California, Berkeley course focused on
        introductory design skills and principles. The course equips students with technical skills
        in Adobe Illustrator, Photoshop, and XD while exploring foundational topics in graphic
        design principles, processes, and trends through hands-on projects and lectures.
        <br />
        <br />
        Over two years, I served as the course instructor for three cohorts, facilitating weekly
        lectures and tutorials, revising curriculum content, and mentoring students through their
        creative projects. When I first stepped into this role, it felt like coming full circle. I
        had once sat in the same classroom as a student, learning the tools and foundations of
        design!*
        <br></br>
        <br></br>
        <i>*The works featured are designs I made as a student!</i>
      </div>
    ),
    images: [require('../images/illustrator-01.png'), require('../images/illustrator-04.png')],
    content: {
      body: [
        {
          componentName: 'basic',
          props: {
            heading: 'Overview',
            title: 'Approach',
            summary: (
              <div>
                Teaching design at a university where formal design courses were scarce meant I had
                to think beyond long, lecture-heavy classes. My goal was to create a space where
                students didn’t just learn tools, they learned how to think like designers. That
                meant balancing technical instruction with design principles and industry relevance,
                while fostering a safe environment for giving and receiving feedback.
              </div>
            ),
            subimage: require('../images/illustrator-02.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            subimage: require('../images/illustrator-logo.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Curriculum',
            summary: (
              <div>
                The curriculum featured a series of comprehensive tutorials and hands-on exercises
                focused on Adobe Photoshop and Illustrator.
                <br></br>
                <br></br>
                It was a place where skills grew alongside confidence. Each class was structured
                into a short lecture or demo, followed by a hands-on tutorial or small team design
                challenge, and concluded with a presentation and critique session for the previous
                week’s take-home work.
              </div>
            ),
            subimage: require('../images/illustrator-lesson-plan.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            summary: <div></div>,
            subimage: require('../images/illustrator-photoshop.png')
          }
        },
        {
          componentName: 'row',
          props: {
            title: 'Highlights',
            summary: '',
            paragraph: [
              {
                subtitle: '01 – Building Technical Fluency',
                subparagraph: (
                  <div>
                    We began with the basics of Illustrator and Photoshop, building from simple
                    shapes and layers to more complex compositions. By the end, students could
                    navigate the tools with ease, translating their ideas into polished visuals.
                    <br></br>
                    <br></br>
                    To reinforce learning, practical exercises were integrated into the curriculum,
                    such as using the pen tool to create a variety of straight and curved lines and
                    simple and complex shapes, or retouching a photo using a combination of
                    Photoshop tools like the patch tool and spot healing brush.
                  </div>
                )
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/illustrator-exercises.png')
          }
        },
        {
          componentName: 'row',
          props: {
            summary: '',
            paragraph: [
              {
                subtitle: '02- Exploring Design Principles and Their Practical Implementation',
                subparagraph: (
                  <div>
                    To prepare students for the demands of the design industry, the course covered
                    core design principles like typography, color, and hierarchy, while also
                    exploring concepts and techniques such as isometric design and recoloring.
                    <br></br>
                    <br></br>
                    This gave students the knowledge needed to excel in a range of design projects,
                    from creating a brand identity for a new company to designing an album cover for
                    an artist or organizing a restaurant menu for a brunch spot.
                  </div>
                )
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/illustrator-design-challenge.png')
          }
        },
        {
          componentName: 'row',
          props: {
            summary: '',
            paragraph: [
              {
                subtitle: '03 – Fostering Constructive Critique',
                subparagraph: (
                  <div>
                    Every project ended with a presentation and peer reviews, where students
                    practiced analyzing design objectively and offering actionable feedback. This
                    not only improved their work but also built the confidence to present and defend
                    their creative decisions.
                  </div>
                )
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/illustrator-05.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/illustrator-03.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Conclusion',
            title: 'Reflection',
            summary: (
              <div>
                Teaching this course sharpened my own design skills and understanding as much as it
                developed my students’. Equipping them with the tools to realize their amazing ideas
                and visions, while challenging them to think about the “why” behind each choice
                reminded me how powerful design can be. It’s everywhere, capable of creating
                meaningful impact for causes you care about, and it thrives even more when working
                collaboratively with others.
                <br></br>
                <br></br>
                If I were to teach it again, I’d integrate more collaborative projects to reflect
                the team-based, cross-disciplinary nature of real-world design. This course shaped
                my own design journey, and I’m grateful for the opportunity to both teach and help
                foster a community of emerging creatives.
              </div>
            )
          }
        },
        {
          componentName: 'row',
          props: {
            summary: (
              <div>
                <i>Please enjoy these final showcase works from some of my past students:</i>
              </div>
            ),
            paragraph: [
              {
                subtitle: '',
                subparagraph: ''
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heroimage: require('../images/illustrator-student-works.png')
          }
        }
      ]
    }
  },
  {
    title: 'easypark',
    timeline: '8 weeks',
    description: 'A final project for a mobile parking application',
    role: 'Product Designer',
    team: <div>4 Product Designers</div>,
    type: 'Product Design, UX Research, Mobile Application',
    tools: 'Figma / Android Studio',
    designId: 'easy_park',
    url: 'https://www.figma.com/file/e2XwFYjv1KX1caYpGFWLC2/EasyPark?type=design&node-id=11%3A1833&mode=design&t=2JxYRmKGqW7ZjsZP-1',
    end: 'check out the design file',
    overview: (
      <div>
        EasyPark began in a Berkeley classroom with a simple goal to take the frustration out of
        parking. But what started as a concept for mapping free and paid parking zones quickly
        turned into something more ambitious:{' '}
        <b>a mobile app that connects people who need parking with people who have it</b>, modeled
        after the accessibility and trust of platforms like Airbnb.
        <br></br>
        <br></br>
        Our team of four product designers wanted to build something that was actually helpful in
        real-life parking situations—from finding event parking for a concert to booking a spot
        during an internship in another city to making an unplanned road trip stop.
      </div>
    ),
    images: [require('../images/easy-park-01.png'), require('../images/easy-park-07.png')],
    content: {
      body: [
        {
          componentName: 'basic',
          props: {
            heading: 'Research',
            title: 'Initial Exploration',
            summary: (
              <div>
                Our original idea was to create a simple map of free and paid parking around the Bay
                Area. But after conducting user interviews with commuters, students, and residents,
                we realized parking wasn’t just hard to find—it lacked{' '}
                <b>flexibility, transparency, and modern convenience.</b>
              </div>
            )
          }
        },
        {
          componentName: 'even',
          props: {
            title: 'Interview Insights',
            summary: '',
            paragraph: [
              {
                subtitle: 'Long walk even after a commute',
                subparagraph: (
                  <div>
                    One UC Berkeley commuter who drives from Oakland daily told us he walks 25
                    minutes from a spot he already pays for rather than try to find something
                    closer: <b>“It’s just too much work to find a better spot.”</b>
                  </div>
                )
              },
              {
                subtitle: 'Unreliable street parking',
                subparagraph: (
                  <div>
                    A grad student relying on street parking shared how{' '}
                    <b>
                      “[e]very Thursday, I basically plan my life around street cleaning so I don’t
                      get towed”
                    </b>{' '}
                    because he has received multiple tickets and is wary of confusing signage.
                  </div>
                )
              },
              {
                subtitle: 'Stressful parking in a big city',
                subparagraph: (
                  <div>
                    Another user said she stopped driving into SF for work entirely because finding
                    affordable parking was too stressful:{' '}
                    <b>“I just couldn’t deal with the constant hunt.”</b>
                  </div>
                )
              },
              {
                subtitle: 'Unused parking space',
                subparagraph: (
                  <div>
                    An international student said he pays for a parking spot that was bundled into
                    his lease, but he doesn’t even have a car to use it. He told us he’d tried
                    Craigslist and forums to rent it out, but had no luck:{' '}
                    <b>
                      “I just want something easier. A way to know the money’s coming through and
                      that the person will actually show up.”
                    </b>
                  </div>
                )
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            summary: (
              <div>
                Other users described additional frustrating experiences: leaving a garage only to
                be hit with an unexpectedly high price, digging for cash at outdated unmanned lots,
                or wishing they could reserve a space in advance. These insights pushed us to
                rethink: instead of just helping people <i>find</i> parking, what if we helped them{' '}
                <i>book</i> it? And what if everyday people could offer their unused spaces, the
                same way they might rent out a spare room?
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Learning from the Landscape',
            summary: (
              <div>
                This pivot led us to study sharing economy platforms like Airbnb and Uber. These
                apps weren’t just about convenience—they succeeded because they built{' '}
                <b>trust, reliability, and a sense of community</b> into every interaction. Users
                didn’t just want a place to stay or a ride—they valued being able to connect with
                real people, the transparency around cost, and the confidence that they wouldn’t get
                scammed.
                <br></br>
                <br></br>
                We also explored the current parking landscape from mobile apps to traditional
                systems like cash-only lots and pay-on-exit garages. While many parking apps offered
                real-time availability or booking features, they often fell short on accuracy,
                flexibility, or user trust. Outdated systems, like unmanned lots or garages with
                unclear pricing, only added to the stress, highlighting the need for a more reliable
                experience that puts users in control.
              </div>
            )
          }
        },
        {
          componentName: 'row',
          props: { title: 'User Personas', paragraph: [] }
        },
        {
          componentName: 'basic',
          props: {
            image: require('../images/easy-park-personas.png')
          }
        },
        {
          componentName: 'row',
          props: {
            title: 'Pain Points',
            summary: '',
            paragraph: [
              {
                subtitle: '01 – Underutilized Parking',
                subparagraph:
                  'From unused apartment spaces to cash-based lots with no booking system, there was no intuitive way to list and manage parking.'
              },
              {
                subtitle: '02 – Frustrating Search Experience',
                subparagraph:
                  'Drivers struggled with finding available parking in real-time, especially in unfamiliar areas.'
              },
              {
                subtitle: '03 – No Way to Plan Ahead',
                subparagraph:
                  'Without advance booking options, users couldn’t reliably plan their parking for future trips or long-term stays.'
              },
              {
                subtitle: '04 – Lack of Trust & Convenience',
                subparagraph:
                  'People wanted parking to be as easy and trustworthy as booking a ride or place to stay.'
              }
            ]
          }
        },

        {
          componentName: 'basic',
          props: {
            heading: 'Problem',
            title: 'Overview',
            summary: (
              <div>
                Parking should be painless. The app had to feel{' '}
                <b>fast, credible, and easy to use </b>especially during high-stress moments like
                circling the block in an unfamiliar city or planning ahead for a vacation.
              </div>
            )
          }
        },
        {
          componentName: 'odd',
          props: {
            title: 'How Might We..',
            paragraph: [
              {
                subparagraph:
                  'Connect drivers with real-time, verified parking options in their area?'
              },
              {
                subparagraph:
                  'Remove barriers for everyday people to rent out their unused parking?'
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Solution',
            title: 'Early Concepts',
            subimage: require('../images/easy-park-03.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            summary: (
              <div>
                We mapped parallel user flows for guests and hosts to surface key friction points.
                For guests, we designed a clear search flow with filters, map integration, and
                secure booking. For hosts, we built a streamlined listing experience with just
                enough customization to feel in control. Outlined below are the 3 major user
                subgroups:
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            summary: (
              <div>
                Host Storyboard: User has a parking spot that they want to rent out to other user
                “guests”
              </div>
            ),
            subimage: require('../images/easy-park-storyboard-01.jpg')
          }
        },
        {
          componentName: 'basic',
          props: {
            summary: (
              <div>
                Long Term Guest Storyboard: User has just accepted a new job offer in SF and they
                want to find a long term parking space since they commute by car to work
              </div>
            ),
            subimage: require('../images/easy-park-storyboard-02.jpg')
          }
        },
        {
          componentName: 'basic',
          props: {
            summary: (
              <div>
                Short Term Guest Storyboard: User is going to an event and wants to find a parking
                spot for 3 hrs. They did not think about parking until getting there, so they are
                using the app while driving.
              </div>
            ),
            subimage: require('../images/easy-park-storyboard-03.jpg')
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Testing & Iteration',
            summary: (
              <div>
                Inspired by trust-building patterns, we also introduced GPS directions, in-app
                messaging, and a review system. We then shared wireframes with peers and gathered
                feedback through simulated tasks. Testing revealed confusion on the guest side in
                the search flow, and minor friction for hosts during listing creation. The biggest
                challenge was finding the right balance.
              </div>
            ),
            subimage: require('../images/easy-park-first-draft.gif')
          }
        },
        {
          componentName: 'basic',
          props: {
            summary: (
              <div>
                On the <b>guest side</b>, we wanted filters for things like car size, availability,
                and distance from a destination, but too many options risked overwhelming users.
                Through testing, we simplified the experience by prioritizing the most{' '}
                <b>essential filters</b> and improving the <b>visual hierarchy</b> to make scanning
                and selecting options feel fast and intuitive.
                <br></br>
                <br></br>
                For <b>hosts</b>, we needed accurate and complete listings. We required core fields
                like location, pricing, availability, and <b>mandatory photos</b> to help verify
                listings, while also encouraging trust-building extras like profile pictures and
                bios. We added <b>progress indicators and thoughtful nudges</b> to guide hosts
                through setup.
              </div>
            ),
            subimage: require('../images/easy-park-host-first-draft.png')
          }
        },
        {
          componentName: 'feature',
          props: {
            title: 'Features Overview',
            features: [
              {
                subtitle: 'Search & Book Flow',
                paragraph:
                  'Search by location, compare options, and book in just a few taps with real-time availability and secure payment',
                image: require('../images/easy-park-mobile-mockup-search.gif')
              },
              {
                subtitle: 'Host Dashboard',
                paragraph:
                  'Hosts create a friendly, trustworthy profile with a photo, bio, and verification during sign-up. From there, they can easily list, edit, and manage parking spaces with photos, pricing, and availability',
                image: require('../images/easy-park-mobile-mockup-sign-up.gif')
              },
              {
                subtitle: 'Trust Features',
                paragraph:
                  'GPS guidance to the spot, in-app messaging, ratings & reviews, and profile verifications to build community trust',
                image: require('../images/easy-park-02.png')
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Conclusion',
            title: 'Outcome',
            summary: (
              <div>
                By our final user testing round,{' '}
                <b>92% of participants successfully completed key tasks.</b> The clarity of the host
                dashboard and simplicity of the guest flow were consistently praised. Multiple
                testers said the app felt like something they would “actually use.”
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Next Steps',
            summary: (
              <div>
                Future additions include adding <b>tags for unique features</b> like EV charging,
                accessibility options, and covered parking. We also plan to add{' '}
                <b>public transit info</b>
                near each spot to help users consider more sustainable travel options.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Reflection',
            summary: (
              <div>
                Balancing the needs of both hosts and guests taught me how to{' '}
                <b>prioritize multiple user flows without compromising simplicity.</b> This project
                shaped how I approach digital products: not just as tools, but as services that
                evolve through insight and iteration.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            heroimage: require('../images/easy-park-07.png')
          }
        }
      ]
    }
  },
  {
    title: 'berkeley student food collective',
    timeline: '10 weeks',
    description:
      'A website for users who want to find ethically produced food, and learn about nutrition and sustainability',
    role: 'Web Design and Development Lead',
    team: (
      <div>
        2 Web Design/Development Leads
        <br /> 2 UI/UX Designers <br />2 Front End Developers <br />2 Back End Developers
      </div>
    ),
    type: 'Product Design, Website Overhaul',
    tools: 'Figma / Illustrator / React / Node.js',
    designId: 'berkeley_student_food_collective',
    url: '',
    end: 'thank you for viewing!',
    overview: (
      <div>
        The Berkeley Student Food Collective (BSFC) is a student-run non-profit that promotes
        community wellness by providing access to fresh, local, and ethically sourced food—while
        educating students on nutrition and sustainable food systems. As part of a student design
        team, I co-led a full website redesign that focused on thoughtful design to better reflect
        the BSFC's commitment to environmentally conscious practices and youth empowerment.
      </div>
    ),
    images: [require('../images/bsfc-01.png'), require('../images/bsfc-04.png')],
    content: {
      body: [
        {
          componentName: 'basic',
          props: {
            heading: 'Research',
            title: 'Client Conversations',
            summary: (
              <div>
                The client first approached us sharing that their current website felt outdated and
                was not receiving a lot of traffic. While they had strong branding, including a
                recognizable logo and a vibrant photo library, they felt the design failed to
                capture the co-op’s energy or engage visitors meaningfully.<br></br> <br></br> They
                were also unsure how to organize and present a growing collection of resources on
                food insecurity, nutrition, and activism that currently lived on a Google Doc.
              </div>
            ),
            subimage: require('../images/bsfc-before-about-us.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Research',
            title: 'Current Experience',
            summary: (
              <div>
                We conducted a content audit of the existing site, stakeholder interviews with BSFC
                leadership, and competitor analysis of similar student co-ops, where several core
                issues emerged.
              </div>
            ),
            subimage: require('../images/bsfc-before-nav.png')
          }
        },
        {
          componentName: 'row',
          props: {
            title: 'Pain Points',
            summary: '',
            paragraph: [
              {
                subtitle: '01 – Poor Navigation Structure',
                subparagraph:
                  'Content was buried under confusing menu hierarchies, making it difficult for users to learn about BSFC or get involved.'
              },
              {
                subtitle: '02 – Weak Visual Identity',
                subparagraph:
                  'Despite strong branding assets, the site failed to express the co-op’s youth-driven, community-first mission.'
              },
              {
                subtitle: '03 – Information Overload',
                subparagraph:
                  'The layout made it difficult to include the plethora of resources and information the client wanted to include on their website.'
              },
              {
                subtitle: '04 – Low Engagement',
                subparagraph:
                  'While the site had key calls to action, like volunteering, donating, or attending events, conversion rates were low.'
              }
            ]
          }
        },

        {
          componentName: 'basic',
          props: {
            heading: 'Problem',
            title: 'Overview',
            summary: (
              <div>
                An outdated website was standing in the way of BSFC’s mission. Our goal was to build
                a site that not only aligned with the organization’s identity but also helped users
                connect with BSFC’s mission through{' '}
                <b>clear pathways to get involved, learn, and act.</b>
              </div>
            )
          }
        },
        {
          componentName: 'odd',
          props: {
            title: 'How Might We..',
            paragraph: [
              {
                subparagraph:
                  'Empower users to find and gain access to fresh, local, and ethically produced food?'
              },
              {
                subparagraph:
                  'Make it easier for visitors to find resources and opportunities on nutrition and sustainable food systems?'
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Solution',
            title: 'Website Structure',
            summary: (
              <div>
                We mapped out the narrative: first inspire visitors with the mission, then guide
                them to learn more and get involved. We also looked at other co-op websites and
                community-driven brands to understand tone, pacing, and structure.
              </div>
            ),
            subimage: require('../images/bsfc-lofi.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            summary: (
              <div>
                To improve usability, we restructured the site architecture to reduce page sprawl,
                streamline categories, and highlight essential actions. One significant improvement
                was refining the navigation bar: we grouped related pages (like “About,” “Team,” and
                “History”) and surfaced key actions like “Volunteer” and “Donate.”
              </div>
            ),
            subimage: require('../images/bsfc-nav.png')
          }
        },

        {
          componentName: 'basic',
          props: {
            title: 'Visual Refresh',
            summary: (
              <div>
                The client asked that we keep the existing color palette and logo, but was open to
                typography and iconography changes. We explored nature-inspired colors, bold and
                legible type, and illustrative elements that reflected the grassroots energy of the
                co-op. The visual language needed to feel both trustworthy and youth-driven.
              </div>
            ),
            subimage: require('../images/bsfc-colors.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            subimage: require('../images/bsfc-branding-guide.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Testing & Iteration',
            summary: (
              <div>
                We held collaborative work sessions with BSFC leadership, sharing mid-fidelity
                wireframes and multiple structural approaches. Our discussions revolved around the
                balance between providing comprehensive information and ensuring that users could
                easily digest and engage with the material, leading to ideas like infographics and
                content cards.
              </div>
            ),
            subimage: require('../images/bsfc-our-programs.png')
          }
        },
        {
          componentName: 'basic',
          props: {
            subimage: require('../images/bsfc-03.png')
          }
        },
        {
          componentName: 'feature',
          props: {
            title: 'Features Overview',
            features: [
              {
                subtitle: 'Simplified Navigation Bar',
                paragraph:
                  'The new navbar organizes content into intuitive sections, allowing users to quickly access key areas',
                image: require('../images/bsfc-02.png')
              },
              {
                subtitle: 'Visual Elements',
                paragraph:
                  'We introduced fresh iconography, playful illustrations, and eco-conscious motifs to reflect the co-op’s focus on sustainability and youth empowerment',
                image: require('../images/bsfc-after.gif')
              },
              {
                subtitle: 'Resource Hub',
                paragraph:
                  'We transformed the previously underutilized resource list into a centralized, scrollable hub. With toggles, users could explore categories like food justice, nutrition, or food access assistance without feeling overwhelmed',
                image: require('../images/bsfc-06.png')
              }
            ]
          }
        },
        {
          componentName: 'basic',
          props: {
            heading: 'Conclusion',
            title: 'Impact',
            summary: (
              <div>
                The redesign led to a <b>25% drop in bounce rate</b> and an{' '}
                <b>increase in form conversions</b>
                for joining and volunteering. Final user testing showed that users were able to
                access key information—like hours, events, and BSFC’s mission—around{' '}
                <b>40% faster.</b> The site also received positive feedback from BSFC leadership and
                student community members for its clarity, approachability, and alignment with the
                co-op’s values.
                <br></br>
                <br></br>
                <i>
                  Note: The React site was eventually sunset as BSFC transitioned to a CMS platform
                  to support easier content management without developer resources.
                </i>
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            title: 'Reflection',
            summary: (
              <div>
                This project taught me how to work holistically, from research and strategy to
                visual and technical execution. I learned how to transform abstract values into
                tangible experiences and it left a lasting impression that good design can be a
                powerful force for social good.
              </div>
            )
          }
        },
        {
          componentName: 'basic',
          props: {
            heroimage: require('../images/bsfc-04.png')
          }
        }
      ]
    }
  }
];

export default Designs;
