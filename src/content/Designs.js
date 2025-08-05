const Designs = [
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
    title: 'easypark',
    timeline: '8 weeks',
    description: 'A final project for a mobile parking application',
    role: 'Product Designer',
    team: <div>4 Product Designers</div>,
    type: 'Product Design, Mobile Application',
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
            title: 'Reflection',
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
  }
  // {
  //   title: 'berkeley student food collective',
  //   timeline: '10 weeks',
  //   description:
  //     'A website for users who want to find ethically produced food, and learn about nutrition and sustainability',
  //   role: 'Web Design and Development Lead',
  //   team: (
  //     <div>
  //       2 Web Design/Development Leads
  //       <br /> 2 UI/UX Designers <br />2 Front End Developers <br />2 Back End Developers
  //     </div>
  //   ),
  //   type: 'Product Design, Website Overhaul',
  //   tools: 'Figma / Illustrator / React / Node.js',
  //   designId: 'berkeley_student_food_collective',
  //   url: '',
  //   end: 'thank you for viewing!',
  //   overview: (
  //     <div>
  //       The Berkeley Student Food Collective (BSFC) website redesign's purpose is to showcase the
  //       cooperative grocery store's core mission of providing fresh, local, and ethically produced
  //       food at affordable prices while also serving as an educational platform to enlighten
  //       students about nutrition and sustainable food systems. This project aims to transform the
  //       online presence with a visually engaging design that reflects BSFC's commitment to
  //       environmentally conscious practices and youth empowerment.
  //     </div>
  //   ),
  //   problem: (
  //     <div>
  //       Our team identified that the overarching issue was information overload. The large volume of
  //       content and unclear information architecture deterred users from engaging meaningfully with
  //       the platform. <br />
  //       <br />
  //       The client asked that we keep the existing color palette and logo, but was open to
  //       typography and iconography changes.
  //     </div>
  //   ),
  //   solution: (
  //     <div>
  //       We focused on streamlining communication and designing pages with effective information
  //       architecture. We aimed to condense information to convey key messages succinctly, reorganize
  //       content in more approachable layout, and condense the number of pages to guide users
  //       intuitively and provide easy access to vital information. In addition to this, we created
  //       new visual elements to reflect the collective's energetic and sustainable ethos, refreshing
  //       the website and making users feel more invited.
  //     </div>
  //   ),
  //   question: (
  //     <div>
  //       How might we help users gain access to fresh, local, and ethically produced food and
  //       educated them on nutrition and sustainable food systems?
  //     </div>
  //   ),
  //   research: (
  //     <div>
  //       To address the question, we studied similar cooperative websites to gather insights into
  //       effective communication strategies and user engagement techniques. By analyzing these
  //       platforms, we gained valuable knowledge about how other organizations in similar domains
  //       successfully conveyed their missions and engaged their audiences.
  //       <br />
  //       <br />
  //       The client offered insights into their target audience and shared their vision for the
  //       website. Their input provided us with a deeper understanding of their specific needs and
  //       expectations, enabling us to tailor our design and content strategies to align with their
  //       goals and values. This collaborative approach ensured that the redesign not only met the
  //       client's requirements but also resonated strongly with the cooperative's mission.
  //     </div>
  //   ),
  //   ideation: (
  //     <div>
  //       Throughout the ideation process, we remained focused on the user. We brainstormed ways to
  //       tailor the website's design to meet the specific needs and preferences of BSFC's target
  //       audience—students seeking fresh, sustainable, and affordable food options.
  //       <br />
  //       <br />
  //       Our goal was to translate research findings into actionable design concepts that would
  //       enhance the BSFC website's user experience. To address the issue of information overload, we
  //       brainstormed ideas to simplify the navigation structure. This involved reevaluating the
  //       existing website's page hierarchy and considering ways to combine related content into
  //       cohesive sections to reduce the number of pages. Our discussions revolved around the balance
  //       between providing comprehensive information and ensuring that users could easily digest and
  //       engage with the material, leading to ideas like infographics and content cards.
  //     </div>
  //   ),

  //   features: [
  //     [
  //       'simplified navigation bar',
  //       <div>
  //         To streamline user navigation, we pared down the number of pages and designed a simplified
  //         navigation bar. This bar categorizes content logically, ensuring that visitors can easily
  //         access the information they seek, whether it's about opportunities to volunteer,
  //         educational resources, or the cooperative's mission and values.
  //       </div>,
  //       require('../images/berkeley-food-collective-04.png')
  //     ],
  //     [
  //       'visual elements',
  //       <div>
  //         We introduced new visual elements that align with the BSFC's mission of sustainability and
  //         youth empowerment. These fruit and vegetable icons not only symbolize the freshness and
  //         local sourcing of the produce but also serve as representations of the cooperative's
  //         commitment to healthy living and environmentally conscious practices.
  //       </div>,
  //       require('../images/berkeley-food-collective-05.png')
  //     ],
  //     [
  //       'resource page',
  //       <div>
  //         A key feature of the website is the Resource Page, which serves as an educational hub. On
  //         this page, users can access a variety of resources, including articles, videos, and
  //         interactive tools related to nutrition, sustainable food systems, and cooperative values.
  //         The toggle menu design encourages exploration and learning, ensuring users feel empowered
  //         rather than overwhelmed.
  //       </div>,
  //       require('../images/berkeley-food-collective-06.png')
  //     ]
  //   ],
  //   images: [
  //     require('../images/berkeley-food-collective-01.png'),
  //     require('../images/berkeley-food-collective-02.png'),
  //     require('../images/berkeley-food-collective-03.png')
  //   ]
  // },
  // {
  //   title: 'the next iteration podcast',
  //   timeline: '4 weeks',
  //   description:
  //     'A brand redesign for a multidisciplinary podcast with a mission to engage and enlighten twenty-somethings',
  //   role: 'Graphic Designer',
  //   team: <div>1 Graphic Designer</div>,
  //   type: 'Brand Redesign, Graphic Design',
  //   tools: 'Figma / Illustrator / Photoshop / Womp3D',
  //   designId: 'the_next_iteration_podcast',
  //   url: 'https://www.figma.com/proto/sYaRwlDIWE9aHwKVvyNixA/nextiteration-branding-guide?page-id=0%3A1&type=design&node-id=1-2&viewport=266%2C197%2C0.06&t=nqQWRQxsCFDvaSxw-1&scaling=min-zoom&starting-point-node-id=1%3A2&mode=design',
  //   end: 'check out the branding guide',
  //   overview: (
  //     <div>
  //       With a mission to engage and enlighten twenty-somethings on a diverse range of topics, from
  //       meditation to the future of technology and politics, The Next Iteration Podcast’s founders
  //       and hosts wanted to refresh their visual identity and expand their reach. <br />
  //       <br />
  //       This project involved the creation of a new logo, comprehensive branding guidelines, assets
  //       such as business cards and podcast thumbnails, and the exploration of potential merchandise.
  //     </div>
  //   ),
  //   problem: (
  //     <div>
  //       The existing brand identity lacked consistency and failed to effectively convey the
  //       podcast's eclectic nature. Additionally, the absence of clear branding guidelines hindered
  //       the client from maintaining a uniform visual identity across various platforms and
  //       promotional materials.
  //     </div>
  //   ),
  //   solution: (
  //     <div>
  //       My strategy focused on creating a unified and visually engaging brand identity. I designed a
  //       new logo that captured the essence of exploration and growth, aligning with the podcast's
  //       name, "The Next Iteration." This fresh logo incorporated elements that symbolized diversity,
  //       dynamism, and the complexity of the topics discussed on the podcast.
  //       <br />
  //       <br />
  //       To ensure consistency, I developed comprehensive branding guidelines that provided clear
  //       instructions on logo usage, color palettes, typography, and design elements. These
  //       guidelines served as a roadmap for maintaining a cohesive visual identity across all
  //       touchpoints.
  //     </div>
  //   ),
  //   question: (
  //     <div>
  //       How might we engage users representing diverse backgrounds while upholding the podcast's
  //       commitment to exploration and forward thinking?
  //     </div>
  //   ),
  //   research: (
  //     <div>
  //       Client-provided insights into their vision and audience formed the foundation for creative
  //       exploration and brand redesign efforts. Additionally, I listened to their podcast episodes
  //       to gain an understanding of their existing content and analyzed other successful podcast
  //       brands that catered to a similar demographic to understand effective visual storytelling and
  //       engagement strategies.
  //     </div>
  //   ),
  //   ideation: (
  //     <div>
  //       During the ideation phase, I brainstormed a variety of concepts spanning logo design, color
  //       palettes, typography choices, and visual elements. Throughout this process, I maintained a
  //       collaborative dialogue with the client, incorporating their feedback and insights. Notably,
  //       the client expressed an affinity for the work of Karim Rashid. Inspired by Rashid's style,
  //       the design approach incorporated 3D abstract shape elements.
  //       <br />
  //       <br />
  //       The primary objective was to create a visual identity that encapsulated the podcast's
  //       diverse range of content while preserving a cohesive and unified brand narrative.
  //     </div>
  //   ),

  //   features: [
  //     [
  //       'new logo',
  //       <div>
  //         The brand redesign introduced a new logo that incorporated dynamic elements reflecting
  //         growth, exploration, and diversity. The design featured abstract shapes and colors that
  //         symbolized the multifaceted nature of the podcast's topics. This modern and vibrant logo
  //         served as the anchor of the refreshed brand identity.
  //       </div>,
  //       require('../images/next-iteration-04.png')
  //     ],
  //     [
  //       'branding guidelines',
  //       <div>
  //         To ensure consistency in branding, we developed comprehensive guidelines that detailed
  //         logo usage, color codes, typography choices, and design principles. These guidelines
  //         empowered the client to maintain a cohesive and recognizable visual identity across
  //         various platforms and materials.
  //       </div>,
  //       require('../images/next-iteration-05.png')
  //     ],
  //     [
  //       'podcast assets',
  //       <div>
  //         A key update was providing podcast thumbnail designs that aligned with the new brand
  //         identity. These thumbnails were optimized for online platforms, enticing potential
  //         listeners with visually appealing and thematically relevant imagery.
  //       </div>,
  //       require('../images/next-iteration-06.png')
  //     ],
  //     [
  //       'website exploration',
  //       <div>
  //         To expand the podcast's reach and engagement, we explored potential website ideas that
  //         incorporated the redesigned logo and branding elements.
  //       </div>,
  //       require('../images/next-iteration-07.png')
  //     ]
  //   ],
  //   images: [
  //     require('../images/next-iteration-01.png'),
  //     require('../images/next-iteration-02.png'),
  //     require('../images/next-iteration-03.png')
  //   ]
  // },
  // {
  //   title: 'intro to illustrator & photoshop',
  //   timeline: '1 Semester (taught for 3 semesters!)',
  //   description:
  //     'A University of California, Berkeley course for students who want to kickstart their journey into design',
  //   role: 'Course Instructor',
  //   team: (
  //     <div>
  //       1 Course Instructor <br />1 Teaching Assistant
  //     </div>
  //   ),
  //   type: 'Design Education, Graphic Design',
  //   tools: 'Illustrator / Photoshop / XD',
  //   designId: 'intro_to_illustrator_and_photoshop',
  //   url: 'https://decal.berkeley.edu/courses/6967',
  //   end: 'find the course information',
  //   overview: (
  //     <div>
  //       Intro to Photoshop & Illustrator is an official university course sponsored by a faculty
  //       member. This comprehensive course was designed by the creative agency I was a part of
  //       (Innovative Design) and helped to equip students with the fundamental skills necessary for
  //       effective graphic design and digital illustration. Over the course of three semesters, I
  //       served as the instructor for this program and aided with curriculum revisions. Before
  //       becoming an instructor, I was a TA and student of this course.*
  //       <br />
  //       <br />
  //       *The works featured are designs I made as a student!
  //     </div>
  //   ),
  //   problem: (
  //     <div>
  //       The challenge lay in providing students with a solid foundation in graphic design tools with
  //       a curriculum was both engaging and comprehensive. As the instructor, I needed to strike a
  //       balance between conveying complex design principles, keeping up with contemporary trends,
  //       and creating an environment conducive to constructive feedback for skill development.
  //     </div>
  //   ),
  //   solution: (
  //     <div>
  //       The curriculum featured a series of comprehensive tutorials and hands-on exercises focused
  //       on Adobe Photoshop and Illustrator CC. The course aimed to empower students to master
  //       technical tools while fostering their design skills. It also provided opportunities for
  //       students to explore graphic design principles and implement them in practical projects. A
  //       key component of the course was cultivating a culture of constructive feedback, enabling
  //       students to grow as designers through peer evaluations and instructor guidance.
  //     </div>
  //   ),
  //   question: (
  //     <div>
  //       How might we address the need for design education in an academic environment where design
  //       courses are limited?
  //     </div>
  //   ),
  //   research: '',
  //   ideation: '',

  //   features: [
  //     [
  //       'build technical skills in illustrator and photoshop',
  //       <div>
  //         The course featured a well-organized curriculum that started with the basics of Adobe
  //         Illustrator and Photoshop. It progressively advanced to cover more advanced concepts so
  //         that students built a strong foundation before tackling complex design tasks.
  //         <br />
  //         <br />
  //         To reinforce learning, practical exercises were integrated into the curriculum. These
  //         exercises encouraged students to apply what they learned, fostering a deeper understanding
  //         of design principles.
  //       </div>,
  //       require('../images/illustrator-04.png')
  //     ],
  //     [
  //       'explore graphic design principles and their practical implementation',
  //       <div>
  //         To prepare students for the demands of the design industry, the course covered essential
  //         design concepts such as isometric design, recoloring techniques, and photo retouching.
  //         These concepts equipped students with the skills needed to excel in diverse design
  //         projects.
  //       </div>,
  //       require('../images/illustrator-05.png')
  //     ],
  //     [
  //       'cultivate a culture of constructive feedback',
  //       <div>
  //         A fundamental aspect of the course was the cultivation of a culture of constructive
  //         feedback. This encouraged students to learn not only from their own work but also from the
  //         perspectives of their peers. It fostered a collaborative and growth-oriented learning
  //         environment.
  //       </div>,
  //       require('../images/illustrator-03.png')
  //     ]
  //   ],
  //   images: [
  //     require('../images/illustrator-01.png'),
  //     require('../images/illustrator-02.png'),
  //     require('../images/illustrator-03.png')
  //   ]
  // },
  // {
  //   title: 'assurance collection',
  //   timeline: '4 weeks',
  //   description: 'An apparel collection that showcases themes of assurance and spirituality ',
  //   role: 'Graphic Designer',
  //   team: (
  //     <div>
  //       4 Graphic Designers <br />1 Content Writer
  //     </div>
  //   ),
  //   type: 'Graphic Design, Apparel Design',
  //   tools: 'Illustrator / Photoshop',
  //   designId: 'assurance',
  //   url: 'https://yhwhapparel.medium.com/introducing-the-assurance-collection-2228b3de414',
  //   end: 'read more about the intentions behind the design',
  //   overview: (
  //     <div>
  //       The Assurance Collection marks a significant milestone for YHWH Apparel, an apparel brand
  //       with a unique blend of faith and fashion. This collection, consisting of long-sleeve
  //       t-shirts and tote bags, is not only a testament to the brand's commitment to creativity but
  //       also a reflection of its deep spiritual values.
  //       <br />
  //       <br />
  //       As a team of four graphic designers and a content writer, we collaborated closely to bring
  //       this collection to life. My design, utilizing a technique that stitched together images in a
  //       surreal manner with Photoshop, was chosen as the visual centerpiece of the collection.
  //       Alongside my fellow graphic designers, who worked on typography and layout, we crafted a
  //       collection that embodies the theme of "assurance" in a visually compelling way.
  //       <br />
  //       <br />
  //       The profits from this collection supported Letters of Hope, a nonprofit that spreads the
  //       Gospel to the incarcerated.
  //     </div>
  //   ),
  //   problem: (
  //     <div>
  //       The challenge lay in translating the theme of assurance into a collection that not only
  //       conveyed a powerful message but also resonated with our audience. Furthermore, the time
  //       constraints posed by the impending launch date added an element of urgency to the design
  //       process.
  //     </div>
  //   ),
  //   solution: (
  //     <div>
  //       Our approach involved a deep dive into the theme of assurance through prayer, Bible study,
  //       and scriptural exploration. We sought to understand the essence of assurance in Christ and
  //       how it related to the world's uncertainties and challenges. This foundational understanding
  //       informed our design choices.
  //       <br />
  //       <br />
  //       The design process was a collaborative effort among the team members. We drew inspiration
  //       from passages like Acts 16:23–34, Hebrews 10:19–25, Psalm 118:24, John 11:1–6, 17–27, and
  //       Habakkuk 1:1–5, aligning our designs with these scriptural references. Our collective vision
  //       centered on conveying the goodness of God, the complexities of life, and the comfort,
  //       confidence, and community found in Christ. Visually, we aimed for a nature-inspired,
  //       earth-related aesthetic.
  //     </div>
  //   ),
  //   question: (
  //     <div>
  //       How might we create a collection that effectively communicates the theme of assurance?
  //     </div>
  //   ),
  //   research: (
  //     <div>
  //       Our research began with prayer and Bible study, an integral part of the YHWH Apparel design
  //       process. We delved into the Word of God to seek inspiration and insight. We explored
  //       scriptures related to assurance and examined the concept from various angles.
  //       <br />
  //       <br />
  //       In addition to scriptural exploration, we recognized the importance of understanding
  //       contemporary design trends that resonate with our target audience—college students and
  //       twenty-somethings. We delved into the visual preferences and aesthetics that captivate this
  //       demographic, aiming to create designs that would genuinely connect with them.
  //     </div>
  //   ),
  //   ideation: (
  //     <div>
  //       Drawing from our research, we initiated the ideation process. Together, we reflected on the
  //       theme of assurance and the scriptures that resonated with it. Our brainstorming sessions
  //       generated key messages that emphasized the challenges of life and the assurance found in
  //       Christ. Visually, we envisioned an aesthetic inspired by nature and the Earth.
  //       <br />
  //       <br />
  //       One of our primary sources of inspiration was the growing trend of surrealism in art and
  //       design. We recognized that surreal and abstract styles had a unique ability to spark
  //       curiosity and contemplation. Taking cues from artists like Kanghee Kim, whose work pushes
  //       the boundaries of reality, we decided to experiment with surreal-style photo manipulations.
  //       These manipulations allowed us to create designs that were not only visually stunning but
  //       also thought-provoking.
  //     </div>
  //   ),

  //   features: [
  //     [
  //       'long sleeve t-shirt',
  //       <div>
  //         Our long-sleeve t-shirt, inspired by Habakkuk 3:17–19, boldly declares "Assurance" in a
  //         simple sans-serif font on the front. The back of the shirt features direct scripture from
  //         Habakkuk 3, presented in a unique typography and layout design. The focal point is a
  //         surreal-style photo manipulation
  //       </div>,
  //       require('../images/assurance-04.png')
  //     ],
  //     [
  //       'tote bag',
  //       <div>
  //         The tote bag design draws from Habakkuk 1:1–5, acknowledging the brokenness and challenges
  //         in the world. It features an editorial, newspaper-style layout with excerpts from
  //         Habakkuk. The surreal-style photo manipulation symbolizes the assurance and peace of
  //         knowing that God is in control, even when His work is not immediately visible.
  //       </div>,
  //       require('../images/assurance-05.png')
  //     ],
  //     [
  //       'social media assets',
  //       <div>
  //         In conjunction with the launch, we designed a set of social media assets to promote the
  //         collection effectively across various platforms. These assets were carefully crafted to
  //         maintain a cohesive visual identity and engage our audience in meaningful conversations
  //         about assurance and faith.
  //       </div>,
  //       require('../images/assurance-06.png')
  //     ],
  //     [
  //       'website assets',
  //       <div>
  //         To ensure a seamless online shopping experience, we created website assets that align with
  //         the collection's branding and imagery. These assets enhance the user interface and
  //         maintain a consistent visual identity across the website, making it easier for customers
  //         to explore and purchase products from the Assurance Collection.
  //       </div>,
  //       require('../images/assurance-07.png')
  //     ]
  //   ],
  //   images: [
  //     require('../images/assurance-01.png'),
  //     require('../images/assurance-02.png'),
  //     require('../images/assurance-03.png')
  //   ]
  // }
  // {
  //   title: '"Jane Doe" & "John Smith\'s" Wedding',
  //   type: 'Graphic Design',
  //   designId: 'doe_wedding',
  //   url: '',
  //   images: [
  //     require('../images/wedding-01.png'),
  //     require('../images/wedding-02.png'),
  //     require('../images/wedding-03.png'),
  //     require('../images/wedding-04.png')
  //   ]
  // },
  // {
  //   title: 'Assurance',
  //   type: 'Graphic Design',
  //   designId: 'assurance',
  //   url: 'http://www.yhwhapparel.com/',
  //   images: [
  //     require('../images/assurance-01.png'),
  //     require('../images/assurance-02.png'),
  //     require('../images/assurance-03.png'),
  //     require('../images/assurance-04.png')
  //   ]
  // },
  // {
  //   title: 'Asha Berkeley',
  //   type: 'Branding & Marketing',
  //   designId: 'asha_berkeley',
  //   url: 'https://berkeley.ashanet.org/',
  //   images: [
  //     require('../images/asha-01.png'),
  //     require('../images/asha-02.png'),
  //     require('../images/asha-03.png'),
  //     require('../images/asha-04.png')
  //   ]
  // }
];

export default Designs;
