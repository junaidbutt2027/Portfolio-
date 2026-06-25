'use client';

import React, { useState, useEffect } from 'react';
import heroData from './data/hero.json';
import servicesData from './data/services.json';
import portfolioData from './data/portfolio.json';
import resumeData from './data/resume.json';
import testimonialsData from './data/testimonials.json';
import blogsData from './data/blogs.json';

export default function IndexPage() {
  const [mounted, setMounted] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderFade, setPreloaderFade] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [activeBlog, setActiveBlog] = useState(null);

  useEffect(() => {
    setMounted(true);
    
    // Control preloader fade out and unmount using React state
    const fadeTimer = setTimeout(() => {
      setPreloaderFade(true);
      const unmountTimer = setTimeout(() => {
        setShowPreloader(false);
      }, 350);
      return () => clearTimeout(unmountTimer);
    }, 1000);

    if (portfolioData && portfolioData.length > 0) setActiveProject(portfolioData[0]);
    if (servicesData.specializations && servicesData.specializations.length > 0) {
      setActiveService(servicesData.specializations[0]);
    }
    if (blogsData && blogsData.length > 0) setActiveBlog(blogsData[0]);
    if (heroData && heroData.name) {
      document.title = `${heroData.name} - Personal Portfolio`;
    }

    return () => clearTimeout(fadeTimer);
  }, []);

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        if (typeof window !== 'undefined' && typeof window.initializePortfolio === 'function') {
          window.initializePortfolio();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="inversweb-preloader is-loading" suppressHydrationWarning={true}>
        <div className="inversweb-preloader-inner" suppressHydrationWarning={true}>
            <div className="inversweb-preloader-ball-wrap" suppressHydrationWarning={true}>
                <div className="inversweb-preloader-ball-inner-wrap" suppressHydrationWarning={true}>
                    <div className="inversweb-preloader-ball-inner" suppressHydrationWarning={true}>
                        <div className="inversweb-preloader-ball" suppressHydrationWarning={true}></div>
                    </div>
                    <div className="inversweb-preloader-ball-shadow" suppressHydrationWarning={true}></div>
                </div>
                <div id="inversweb-weave-anim" className="inversweb-preloader-text" suppressHydrationWarning={true}>
                  {"Loading...".split("").map((c, i) => <span key={i}>{c === " " ? "\u00A0" : c}</span>)}
                </div>
            </div>
        </div>
        <div className="inversweb-preloader-overlay" suppressHydrationWarning={true}></div>
      </div>
    );
  }

  return (
    <>
      {/* Preloader Start */}
      {showPreloader && (
        <div className={`inversweb-preloader ${preloaderFade ? 'is-loaded' : 'is-loading'}`}
             style={{
               opacity: preloaderFade ? 0 : 1,
               transition: 'opacity 350ms ease-in-out',
               display: showPreloader ? 'block' : 'none'
             }}
             suppressHydrationWarning={true}>
            <div className="inversweb-preloader-inner" suppressHydrationWarning={true}>
                <div className="inversweb-preloader-ball-wrap" suppressHydrationWarning={true}>
                    <div className="inversweb-preloader-ball-inner-wrap" suppressHydrationWarning={true}>
                        <div className="inversweb-preloader-ball-inner" suppressHydrationWarning={true}>
                            <div className="inversweb-preloader-ball" suppressHydrationWarning={true}></div>
                        </div>
                        <div className="inversweb-preloader-ball-shadow" suppressHydrationWarning={true}></div>
                    </div>
                    <div id="inversweb-weave-anim" className="inversweb-preloader-text" suppressHydrationWarning={true}>
                      {"Loading...".split("").map((c, i) => <span key={i}>{c === " " ? "\u00A0" : c}</span>)}
                    </div>
                </div>
            </div>
            <div className="inversweb-preloader-overlay" suppressHydrationWarning={true}></div>
        </div>
      )}
      {/* Preloader end */}

      {/* Start Header Area */}
      <header className="tmp-header-area header-one header-defalut-spacing header--sticky header--transparent">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="header-content">
                          <div className="logo">
                              <a href="/">
                                  <img className="logo-dark" src="/assets/images/logo/main-logo.svg" alt="logo" />
                                  <img className="logo-white" src="/assets/images/logo/main-logo.svg" alt="logo" />
                              </a>
                          </div>
                          <div className="tmp-header-right">
                              <nav className="tmp-mainmenu-nav d-none d-xl-block tmp-on-hover-animation">
                                  <nav className="navbar-example2 onepagenav">
                                      <ul className="tmp-mainmenu nav nav-pills">
                                          <li><a href="/" className="external">Dashboard</a></li>
                                          <li className="current"><a className="smoth-animation" href="/index#home">Home</a></li>
                                          <li><a className="smoth-animation" href="/index#service">Services</a></li>
                                          <li><a className="smoth-animation" href="/index#portfolio">Portfolio</a></li>
                                          <li><a className="smoth-animation" href="/index#blog">Blog</a></li>
                                          <li><a className="smoth-animation" href="/index#contact">Contact</a></li>
                                      </ul>
                                  </nav>
                              </nav>
                              <div className="header-btn tmp-button-group d-flex align-items-center">
                                  <a className="tmp-btn btn-border tmp-switch-btn btn-sm hover-transform-none radius-round d-none d-sm-block" href="/index#contact">
                                      <span data-text="Let’s Talk">Let’s Talk</span>
                                  </a>
                                  <a className="tmp-btn tmp-switch-btn btn-sm hover-transform-none radius-round" href="/index#contact">
                                      <span data-text="Join Now">Join Now</span>
                                  </a>
                              </div>
                              <div className="tmp-side-collups-area d-block d-xl-none">
                                  <button className="tmp-menu-bars humberger_menu_active"><i className="fa-regular fa-bars-staggered"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
      {/* End Header Area */}

      {/* Start Popup Mobile Menu  */}
      <div className="d-block d-xl-none">
          <div className="tmp-popup-mobile-menu">
              <div className="inner">
                  <div className="header-top">
                      <div className="logo">
                          <a href="/" className="logo-area">
                              <img className="logo-dark" src="/assets/images/logo/main-logo.svg" alt="logo" />
                              <img className="logo-white" src="/assets/images/logo/main-logo.svg" alt="logo" />
                          </a>
                      </div>
                      <div className="close-menu">
                          <button className="close-button tmp-round-action-btn">
                              <i className="fa-sharp fa-light fa-xmark"></i>
                          </button>
                      </div>
                  </div>

                  <ul className="tmp-mainmenu onepagenav-click">
                      <li><a href="/" className="external">Dashboard</a></li>
                      <li><a className="smoth-animation" href="/index#home">Home</a></li>
                      <li><a className="smoth-animation" href="/index#service">Services</a></li>
                      <li><a className="smoth-animation" href="/index#portfolio">Portfolio</a></li>
                      <li><a className="smoth-animation" href="/index#resume">Resume</a></li>
                      <li><a className="smoth-animation" href="/index#pricing">Pricing</a></li>
                      <li><a className="smoth-animation" href="/index#blog">Blog</a></li>
                      <li><a className="smoth-animation" href="/index#contacts">Contact</a></li>
                  </ul>

                  <div className="social-wrapper mt--40">
                      <span className="subtitle">find with me</span>
                      <div className="social-link">
                          {heroData.socials.map((social, idx) => (
                              <a key={idx} href={social.url} target="_blank" aria-label={social.platform}><i className={social.icon}></i></a>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* End Popup Mobile Menu  */}

      {/* Start Banner Area  */}
      <div className="banner-style-1 tmp-hero banner-bg-shape" id="home">
          <div className="tmp-hero-shape">
              <div className="tmp-sbl">
                  <img src={heroData.shapeImage1} alt="" />
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="content-wrapper">
                      <div className="content">
                          <div className="flex-column tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <div className="tmp-fsb fsb-2">
                                  <div className="border-left"></div>
                                  <div className="border-right"></div>
                                  <h6 className="subtitle color-white">
                                      {heroData.subtitle}
                                  </h6>
                              </div>
                          </div>
                          <h1 className="title mt-30 mb-30 tmp-scroll-trigger tmp-fade-in animation-order-2">
                              <span className="h2 d-xl-block d-lg-block fw-bold">Hi I Am</span>
                              <span className="d-xl-block color-white">{heroData.name}</span>
                              a <span className="header-caption">
                                  <span className="cd-headline clip is-full-width">
                                          <span className="cd-words-wrapper">
                                              {heroData.roles.map((role, idx) => (
                                                  <b key={idx} className={`${idx === 0 ? 'is-visible' : 'is-hidden'} theme-gradient`}>{role}</b>
                                              ))}
                                          </span>
                                  </span>
                              </span>
                          </h1>
                          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                              {heroData.description}
                          </p>
                          <div className="d-flex align-items-center gap-5 mt-40 flex-wrap max-content">
                              <a className="tmp-btn hover-icon-reverse radius-round tmp-scroll-trigger tmp-fade-in animation-order-4" href={heroData.cvLink}>
                                  <span className="icon-reverse-wrapper">
                                      <span className="btn-text">Download CV</span>
                                      <span className="btn-icon"><i className="fa-light fa-download"></i></span>
                                      <span className="btn-icon"><i className="fa-light fa-download"></i></span>
                                  </span>
                              </a>
                              <div className="tmp-social-default md-size tmp-scroll-trigger tmp-fade-in animation-order-5">
                                  {heroData.socials.map((social, idx) => (
                                      <a key={idx} href={social.url} target="_blank" className="tmp-social-item" aria-label={social.platform}><i className={social.icon}></i></a>
                                  ))}
                              </div>
                          </div>
                      </div>
                      <div className="thumbnail-wrapper">
                          <div className="tmp-hero-image">
                              <div className="tmp-hero-shape">
                                  <div className="tmp-shape-top"> </div>
                                  <div className="tmp-siback">
                                      <img src={heroData.shapeImage3} alt="shape images" />
                                  </div>
                                  <div className="tmp-sibackimage">
                                      <img src={heroData.shapeImage2} alt="shape images" />
                                  </div>
                              </div>
                              <div className="thumbnail">
                                  <img className="tmp-scroll-trigger tmp-fade-in animation-order-2" src={heroData.mainImage} alt="banner images" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* End Banner Area  */}

      {/* service section */}
      <section className="tmp-section bg-color-secondary-alt modern-service-style tmp-section-gap" id="service">
          <div className="tmp-section-overlay"></div>
          <div className="container">
              {/* Start Section Title  */}
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="tmp-section-content mb--60 text-center">
                          <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <div className="border-left"></div>
                              <div className="border-right"></div>
                              <h2 className="subtitle h6">My Specializations Services</h2>
                          </div>
                          <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">What I Do</h2>
                          <p className="tmp-section-desc mx-auto tmp-scroll-trigger tmp-fade-in animation-order-3">Develop comprehensive content strategies tailored to your unique goals and target audience, ensuring that every piece of content.</p>
                      </div>
                  </div>
              </div>
              {/* End Section Title  */}
              <div className="row g-5">
                  {servicesData.specializations.map((service, idx) => (
                      <div key={idx} className={`col-xl-4 col-lg-6 col-md-6 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`}>
                          <div className="service service-style-1 service-card tmp-four-side-border" data-bs-toggle="modal" data-bs-target="#exampleModalService" onClick={() => setActiveService(service)}>
                              <div className="inner">
                                  <div className="tmp-left"></div>
                                  <div className="tmp-right"></div>
                                  <div className="tmp-bottom"></div>
                                  <div className="tmp-bottom-right"></div>
                                  <div className="card-body">
                                      <div className="tmp-card-icon">
                                          <img src={service.icon} alt={service.title} />
                                      </div>
                                      <h3 className="h4 tmp-card-title">
                                          <a href="#" aria-label={service.ariaLabel} onClick={(e) => e.preventDefault()}>{service.title}</a>
                                      </h3>
                                      <p className="tmp-card-desc">{service.description}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
              <div className="row">
                  <div className="col-lg-12 mt-5">
                      <div className="service-style-1 service-slider tmp-four-side-border">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>

                          <div className="card-body">
                              <div className="tmp-service-slider overflow-hidden">
                                  <div className="swiper-wrapper slide-transtion">
                                      {servicesData.sliderItems.map((item, idx) => (
                                          <div key={idx} className="swiper-slide">
                                              <div className="tmp-small-card">
                                                  <div className="tmp-small-card-icon">
                                                      <img src={item.icon} alt="" />
                                                  </div>
                                                  <h4 className="h5 tmp-small-card-title">{item.title}</h4>
                                              </div>
                                          </div>
                                      ))}
                                      {/* duplicate slides for swiper loop */}
                                      {servicesData.sliderItems.map((item, idx) => (
                                          <div key={`dup-${idx}`} className="swiper-slide">
                                              <div className="tmp-small-card">
                                                  <div className="tmp-small-card-icon">
                                                      <img src={item.icon} alt="" />
                                                  </div>
                                                  <h4 className="h5 tmp-small-card-title">{item.title}</h4>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* service section end */}

      {/* work section */}
      <section className="tmp-section tmp-section-gap" id="portfolio">
          <div className="container">
              {/* Start Section Title  */}
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="tmp-section-content mb--60 text-center">
                          <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <div className="border-left"></div>
                              <div className="border-right"></div>
                              <h2 className="h6 subtitle color-secondary">My Awesome Work</h2>
                          </div>
                          <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">My Portfolio</h2>
                          <p className="tmp-section-desc mx-auto tmp-scroll-trigger tmp-fade-in animation-order-3">With a strong foundation in frontend development and a keen eye for design, I specialize in creating interactive and responsive web.</p>
                      </div>
                  </div>
              </div>
              {/* End Section Title  */}
              <div className="row g-5 invers-arrange-container">
                  {portfolioData.map((project, idx) => (
                      <div key={project.id || idx} className={`col-lg-6 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1} invers-arrange-item`} onClick={() => setActiveProject(project)}>
                          <div className="portfolio-style-1 tmp-four-side-border color-border-shape-secondary inv-hover-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <div className="tmp-left"></div>
                              <div className="tmp-right"></div>
                              <div className="tmp-bottom"></div>
                              <div className="tmp-bottom-right"></div>

                              <div className="content">
                                  <div className="inner-content">
                                      <h3 className="h3 title">
                                          <a href="#" aria-label={project.title} onClick={(e) => e.preventDefault()}>{project.title} <i className="fa-light fa-arrow-up-right"></i></a>
                                      </h3>
                                      <p className="description">{project.description}</p>
                                  </div>
                                  <div className="d-flex flex-wrap justify-content-between align-items-center mt-4 mb-40 gap-4">
                                      <div className="d-flex gap-3 ">
                                          {project.badges.map((badge, bidx) => (
                                              <a key={bidx} href="#" aria-label={badge} className={`tmp-badge-cat ${bidx === 1 ? 'cat-two' : ''}`} onClick={(e) => e.preventDefault()}>{badge}</a>
                                          ))}
                                      </div>
                                      <div className="inner-content">
                                          <span className="tmp-blog-time"><i className="fa-light fa-heart"></i> {project.likes}</span>
                                      </div>
                                  </div>

                                  <div className="thumbnail-wrapepr">
                                      <a className="thumb-img" href="#" onClick={(e) => e.preventDefault()}>
                                          <figure className="thumbnail inv-hover-img" data-displacement={project.displacement} data-intensity="0.2" data-speedin="1" data-speedout="1">
                                              <img src={project.image} alt="" />
                                          </figure>
                                      </a>
                                      {project.videoUrl && (
                                          <a className="rounded-player-2 popup-video position-center with-animation btn-white-color" href={project.videoUrl}>
                                              <span className="play-icon"></span>
                                          </a>
                                      )}
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      {/* work section end */}

      {/* resume section */}
      <section className="tmp-section bg-color-secondary-alt modern-service-style tmp-section-gap main-resume" id="resume">
          <div className="tmp-section-overlay to-top"></div>
          <div className="container">
              {/* Start Section Title  */}
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="tmp-section-content mb--60 text-center">
                          <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <div className="border-left"></div>
                              <div className="border-right"></div>
                              <h2 className="subtitle h6">15+ YEARS OF EXPERIENCE</h2>
                          </div>
                          <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">My Resume</h2>
                          <p className="tmp-section-desc mx-auto tmp-scroll-trigger tmp-fade-in animation-order-3">As a frontend specialist, I excel in building captivating user interfaces that not only look great but also provide seamless navigation.</p>
                      </div>
                  </div>
              </div>
              {/* End Section Title  */}
              <div className="row g-5">
                  <div className="col-xl-8 col-lg-12 tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <div className="resume-style-1 tmp-four-side-border border-gap-40">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>
                          <div className="tmp-skill-full-inner">
                              <h3 className="main-title">Educational Experience</h3>
                              <div className="row row-cols-md-2 row-cols-sm-1 justify-content-between tmp-resume">
                                  <div className="content">
                                      {resumeData.education.slice(0, 2).map((edu, idx) => (
                                          <div key={idx} className="tmp-skill-single position-relative">
                                              <div className="time-and-grade">
                                                  <span className="time">{edu.time}</span>
                                                  <span className="skill-grade">{edu.grade}</span>
                                              </div>
                                              <h4 className="title h5"><a href="/index#">{edu.title}</a></h4>
                                              <p className="subtitle">{edu.subtitle}</p>
                                          </div>
                                      ))}
                                  </div>
                                  <div className="content">
                                      {resumeData.education.slice(2).map((edu, idx) => (
                                          <div key={idx} className="tmp-skill-single position-relative">
                                              <div className="time-and-grade">
                                                  <span className="time">{edu.time}</span>
                                                  <span className="skill-grade">{edu.grade}</span>
                                              </div>
                                              <h4 className="title h5"><a href="/index#">{edu.title}</a></h4>
                                              <p className="subtitle">{edu.subtitle}</p>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-xl-4 col-lg-6 tmp-scroll-trigger tmp-fade-in animation-order-2">
                      <div className="resume-style-1 tmp-four-side-border border-gap-40">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>
                          <div className="resume-inner-content">
                              <h3 className="main-title text-start">Stay With Me</h3>
                              <div className="tmp-social-default large-icon mt--40">
                                  {heroData.socials.map((social, idx) => (
                                      <a key={idx} href={social.url} target="_blank" className="tmp-social-item" aria-label={social.platform}><i className={social.icon}></i></a>
                                  ))}
                              </div>
                              <div className="view-btn mt-80">
                                  <a className="tmp-btn hover-icon-reverse radius-round btn-md" href="/contact">
                                      <span className="icon-reverse-wrapper">
                                          <span className="btn-text">View My Profile</span>
                                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                      </span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-6 col-xl-4 tmp-scroll-trigger tmp-fade-in animation-order-3">
                      <div className="resume-style-1 tmp-four-side-border border-gap-40">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>

                          <div className="resume-inner-content text-start">
                              <div className="tmp-skill-full-inner">
                                  <h3 className="main-title">Job Experience</h3>
                                  <div className="row tmp-resume">
                                      <div className="content">
                                          {resumeData.experience.map((exp, idx) => (
                                              <div key={idx} className="tmp-skill-single position-relative">
                                                  <div className="time-and-grade">
                                                      <span className="time">{exp.time}</span>
                                                      <span className="skill-grade">{exp.grade}</span>
                                                  </div>
                                                  <h4 className="title h5"><a href="/index#">{exp.title}</a></h4>
                                                  <p className="subtitle">{exp.subtitle}</p>
                                              </div>
                                          ))}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-6 col-xl-4 col-xxl-3 tmp-scroll-trigger tmp-fade-in animation-order-4">
                      <div className="resume-style-1 tmp-four-side-border border-gap-40">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>
                          <div className="resume-inner-content text-start">
                              <div className="tmp-skill-full-inner">
                                  <h3 className="main-title">Interview</h3>
                                  <div className="row tmp-interview flex-column gap-4">
                                      {resumeData.interviews.map((item, idx) => (
                                          <div key={idx} className="d-flex gap-3 align-items-center">
                                              <div className="tmp-ivi">
                                                  <img src={item.icon} alt="" />
                                              </div>
                                              <div className="tmp-ivi-content">
                                                  <h4 className="h6 tmp-ivi-title fw-bold mb-0"><a href="/index#">{item.title}</a></h4>
                                                  <span className="tmp-ivi-date">{item.date}</span>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-6 col-xl-4 col-xxl-5 tmp-scroll-trigger tmp-fade-in animation-order-5">
                      <div className="resume-style-1 tmp-four-side-border border-gap-40">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>
                          <div className="resume-inner-content text-start">
                              <div className="tmp-skill-full-inner">
                                  <h3 className="main-title">Professional Skills</h3>
                                  <div className="row tmp-skill-progress flex-column gap-20">
                                      {resumeData.skills.map((skill, idx) => (
                                          <div key={idx} className="d-flex flex-column">
                                              <div className="tmp-progress w-100">
                                                  <h4 className="h6 tmp-title">{skill.name}</h4>
                                                  <div className="progress progress-bar-animated" role="progressbar" aria-valuenow={skill.percentage.replace('%','')} aria-valuemin="0" aria-valuemax="100">
                                                      <div className="progress-bar wow fadeInLeft" style={{width: skill.percentage}}></div>
                                                  </div>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-3 col-xl-2 col-md-4 col-sm-3 col-12 order-md-1 order-sm-1 tmp-scroll-trigger tmp-fade-in animation-order-6">
                      <div className="resume-style-1">
                          <div className="resume-inner-content">
                              <h2 className="h6 fw-bold text-center">Skills On</h2>
                              <div className="tmp-skill-marque">
                                  <div className="single-marque">
                                      {resumeData.skillsMarque.map((skill, idx) => (
                                          <div key={idx} className={`tmp-skill-marque-single ${skill.name}`}>
                                              <img src={skill.icon} alt="" />
                                          </div>
                                      ))}
                                  </div>
                                  <div className="single-marque">
                                      {resumeData.skillsMarque.map((skill, idx) => (
                                          <div key={`dup-${idx}`} className={`tmp-skill-marque-single ${skill.name}`}>
                                              <img src={skill.icon} alt="" />
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-12 col-xl-7 tmp-scroll-trigger tmp-fade-in animation-order-7">
                      <div className="resume-style-1 tmp-four-side-border border-gap-40">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>
                          <div className="resume-inner-content text-start">
                              <div className="tmp-funfact">
                                  {resumeData.funfacts && resumeData.funfacts.map((fact, idx) => (
                                      <div key={idx} className="tmp-funfact-single">
                                          <h2 className="fw-bold"><span className="counter">{fact.count}</span>{fact.suffix}</h2>
                                          <p>{fact.label}</p>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-6 col-xl-3 col-md-8 col-sm-9 tmp-scroll-trigger tmp-fade-in animation-order-8">
                      <div className="resume-style-1 tmp-four-side-border border-gap-40">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>
                          <div className="resume-inner-content text-start">
                              <h3 className="main-title text-start">{resumeData.stayWithMe && resumeData.stayWithMe.title}</h3>
                              <div className="tmp-big-icon">
                                  <i className={resumeData.stayWithMe && resumeData.stayWithMe.icon}></i>
                              </div>
                              <div className="contact-btn mt--40">
                                  <a className="tmp-btn btn-md hover-icon-reverse radius-round" href={resumeData.stayWithMe && resumeData.stayWithMe.buttonLink}>
                                      <span className="icon-reverse-wrapper">
                                          <span className="btn-text">{resumeData.stayWithMe && resumeData.stayWithMe.buttonText}</span>
                                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                      </span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* resume section end */}

      {/* testimonial section */}
      <section className="tmp-section tmp-section-gap" id="testimonial">
          <div className="container">
              {/* Start Section Title  */}
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="tmp-section-content mb--60 text-center tmp-scroll-trigger tmp-fade-in animation-order-1">
                          <div className="tmp-fsb">
                              <div className="border-left"></div>
                              <div className="border-right"></div>
                              <h2 className="subtitle h6">See My Customer</h2>
                          </div>
                          <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">Awesome Clients</h2>
                          <p className="tmp-section-desc mx-auto tmp-scroll-trigger tmp-fade-in animation-order-3">My awesome clients foundation in frontend development and a keen eye for design, I specialize in creating interactive and responsive web.</p>
                      </div>
                  </div>
              </div>
              {/* End Section Title  */}
          </div>
          <div className="marque mb--30">
              <div className="tmp-main-review tmp-top-marque d-flex gap-5">
                  {testimonialsData.topMarque.map((review, idx) => (
                      <div key={idx} className="testimonial-style-1 tmp-four-side-border color-border-shape-secondary">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>
                          <div className="card-body text-start">
                              <div className="quote">
                                  <i className="fa-solid fa-quote-left"></i>
                              </div>
                              <div className="review-hover"></div>
                              <div className="tmp-review-content">
                                  <div className="tmp-review-rating">
                                      {Array.from({ length: review.rating }).map((_, i) => (
                                          <i key={i} className="fa-solid fa-star"></i>
                                      ))}
                                  </div>
                                  <h3 className="h6 review-text">{review.quote}</h3>
                                  <div className="testimonial-info">
                                      <div className="thumbnail">
                                          <figure>
                                              <img src={review.author.image} alt="" />
                                          </figure>
                                      </div>
                                      <div className="author-content">
                                          <h4 className="h6 author-name">{review.author.name}</h4>
                                          <span className="designation">{review.author.designation}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
                  {/* duplicates for marque loop */}
                  {testimonialsData.topMarque.map((review, idx) => (
                      <div key={`dup-t-${idx}`} className="testimonial-style-1 tmp-four-side-border color-border-shape-secondary">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>
                          <div className="card-body text-start">
                              <div className="quote">
                                  <i className="fa-solid fa-quote-left"></i>
                              </div>
                              <div className="review-hover"></div>
                              <div className="tmp-review-content">
                                  <div className="tmp-review-rating">
                                      {Array.from({ length: review.rating }).map((_, i) => (
                                          <i key={i} className="fa-solid fa-star"></i>
                                      ))}
                                  </div>
                                  <h3 className="h6 review-text">{review.quote}</h3>
                                  <div className="testimonial-info">
                                      <div className="thumbnail">
                                          <figure>
                                              <img src={review.author.image} alt="" />
                                          </figure>
                                      </div>
                                      <div className="author-content">
                                          <h4 className="h6 author-name">{review.author.name}</h4>
                                          <span className="designation">{review.author.designation}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
          <div className="marque">
              <div className="tmp-main-review tmp-bottom-marque d-flex gap-5">
                  {testimonialsData.bottomMarque.map((review, idx) => (
                      <div key={idx} className="testimonial-style-1 tmp-four-side-border color-border-shape-secondary">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>
                          <div className="card-body text-start">
                              <div className="review-hover"></div>
                              <div className="quote">
                                  <i className="fa-solid fa-quote-left"></i>
                              </div>
                              <div className="tmp-review-content">
                                  <div className="tmp-review-rating">
                                      {Array.from({ length: review.rating }).map((_, i) => (
                                          <i key={i} className="fa-solid fa-star"></i>
                                      ))}
                                  </div>
                                  <h3 className="h6 review-text">{review.quote}</h3>
                                  <div className="testimonial-info">
                                      <div className="thumbnail">
                                          <figure>
                                              <img src={review.author.image} alt="" />
                                          </figure>
                                      </div>
                                      <div className="author-content">
                                          <h4 className="h6 author-name">{review.author.name}</h4>
                                          <span className="designation">{review.author.designation}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
                  {/* duplicates for marque loop */}
                  {testimonialsData.bottomMarque.map((review, idx) => (
                      <div key={`dup-b-${idx}`} className="testimonial-style-1 tmp-four-side-border color-border-shape-secondary">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>
                          <div className="card-body text-start">
                              <div className="review-hover"></div>
                              <div className="quote">
                                  <i className="fa-solid fa-quote-left"></i>
                              </div>
                              <div className="tmp-review-content">
                                  <div className="tmp-review-rating">
                                      {Array.from({ length: review.rating }).map((_, i) => (
                                          <i key={i} className="fa-solid fa-star"></i>
                                      ))}
                                  </div>
                                  <h3 className="h6 review-text">{review.quote}</h3>
                                  <div className="testimonial-info">
                                      <div className="thumbnail">
                                          <figure>
                                              <img src={review.author.image} alt="" />
                                          </figure>
                                      </div>
                                      <div className="author-content">
                                          <h4 className="h6 author-name">{review.author.name}</h4>
                                          <span className="designation">{review.author.designation}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* client section */}
          <div className="tmp-section tmp-section-gapTop">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="tmp-client-title mb-60 tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <h5>Trusted by World’s Awesome Clients</h5>
                          </div>
                      </div>
                  </div>
                  <div className="row mb-5">
                      <div className="col-lg-12">
                          <div className="tmp-client-testimonial">
                              <div className="card tmp-custom-card tmp-four-side-border color-border-shape-primary">
                                  <div className="tmp-left"></div>
                                  <div className="tmp-right"></div>
                                  <div className="tmp-bottom"></div>
                                  <div className="tmp-bottom-right"></div>
                                  <div className="card-body text-start">
                                      <div className="tmp-client-slider overflow-hidden swiper-button-controler">
                                          <div className="swiper-wrapper">
                                              {testimonialsData.clientTestimonials && testimonialsData.clientTestimonials.map((slide, idx) => (
                                                  <div key={idx} className="swiper-slide">
                                                      <div className="tmp-client-testimonial-content inv-hover-item">
                                                          <div className="tmp-client-quote">
                                                              <i className="fa-solid fa-quote-left"></i>
                                                          </div>
                                                          <div className="author-content inv-hover-img" data-displacement={slide.displacement} data-intensity="0.2" data-speedin="1" data-speedout="1">
                                                              <img src={slide.author.image} alt="" />
                                                              <a className="rounded-player-2 popup-video position-center btn-sm with-animation btn-white-color" href={slide.videoUrl}>
                                                                  <span className="play-icon"></span>
                                                              </a>
                                                          </div>
                                                          <div className="text-content">
                                                              <h3 className="h6 text-content-desc" dangerouslySetInnerHTML={{ __html: slide.quote }} />
                                                              <div className="author-content-meta">
                                                                  <h4 className="h6 fw-bold mb-0">{slide.author.name}</h4>
                                                                  <span className="text-xxs">{slide.author.designation}</span>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              ))}
                                          </div>

                                          <div className="slider-button">
                                              <div className="swiper-btn swiper-button-prev">
                                                  <div className="custom-overfolow-btn">
                                                      <i className="invers-icon fal fa-arrow-left"></i>
                                                      <i className="invers-icon-top fal fa-arrow-left"></i>
                                                  </div>
                                              </div>
                                              <div className="swiper-btn swiper-button-next">
                                                  <div className="custom-overfolow-btn">
                                                      <i className="invers-icon fal fa-arrow-right"></i>
                                                      <i className="invers-icon-top fal fa-arrow-right"></i>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="right-shape-image">
                                  <img src="/assets/images/shape/right-shape.png" alt="right shape images" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row g-5">
                      {testimonialsData.brands && testimonialsData.brands.map((brand, idx) => (
                          <div key={idx} className={`col-xl-3 col-lg-3 col-md-4 col-sm-6 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`}>
                              <div className="tmp-client-card text-center">
                                  <a href="/index#" aria-label="client">
                                      <img src={brand} alt="" />
                                  </a>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
          {/* client section end */}
      </section>
      {/* testimonial section end */}

      {/* blog section */}
      <section className="tmp-section tmp-section-gapBottom" id="blog">
          <div className="container">
              {/* Start Section Title  */}
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="tmp-section-content mb--60 text-center">
                          <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <div className="border-left"></div>
                              <div className="border-right"></div>
                              <h2 className="h6 subtitle color-secondary">My Recent Post</h2>
                          </div>
                          <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">Recent Post</h2>
                          <p className="tmp-section-desc mx-auto tmp-scroll-trigger tmp-fade-in animation-order-3">With a strong foundation in frontend development and a keen eye for design, I specialize in creating interactive and responsive web.</p>
                      </div>
                  </div>
              </div>
              {/* End Section Title  */}
              <div className="row g-5 invers-arrange-container">
                  {blogsData.map((blog, idx) => (
                      <div key={blog.id || idx} className="col-lg-6 tmp-scroll-trigger" onClick={() => setActiveBlog(blog)}>
                          <div className="blog-style-1 tmp-four-side-border color-border-shape-secondary inv-hover-item" data-bs-toggle="modal" data-bs-target="#blogModal">
                              <div className="tmp-left"></div>
                              <div className="tmp-right"></div>
                              <div className="tmp-bottom"></div>
                              <div className="tmp-bottom-right"></div>
                              <div className="inner">
                                  <div className="thumbnail">
                                      <a href="#" onClick={(e) => e.preventDefault()}>
                                          <figure className="thumbnail inv-hover-img" data-displacement="/assets/images/main/stripe.webp" data-intensity="0.2" data-speedin="1" data-speedout="1">
                                              <img src={blog.image} alt="" />
                                          </figure>
                                          {blog.pinned && (
                                              <div className="blog-pin">
                                                  <i className="fa-solid fa-thumbtack"></i>
                                              </div>
                                          )}
                                      </a>
                                      {blog.videoUrl && (
                                          <a className="rounded-player-2 popup-video position-center with-animation btn-white-color" href={blog.videoUrl}>
                                              <span className="play-icon"></span>
                                          </a>
                                      )}
                                  </div>
                                  <div className="content">
                                      <div className="d-flex flex-wrap justify-content-between align-items-center my-5 gap-4">
                                          <div className="d-flex gap-3 flex-wrap">
                                              {blog.categories.map((cat, cidx) => (
                                                  <a key={cidx} href="#" aria-label={cat} className={`tmp-badge-cat ${cidx === 1 ? 'cat-two' : ''}`} onClick={(e) => e.preventDefault()}>{cat}</a>
                                              ))}
                                          </div>
                                          <div className="blog-read-time">
                                              <span className="tmp-blog-time"><i className="fa-light fa-clock"></i> {blog.readTime}</span>
                                          </div>
                                      </div>
                                      <h3 className="h4 title">
                                          <a className="invers-hover-link" href="#" aria-label={blog.title} onClick={(e) => e.preventDefault()}>
                                              {blog.title} <i className="fa-light fa-arrow-up-right"></i>
                                          </a>
                                      </h3>
                                      <p className="description">
                                          {blog.description}
                                      </p>
                                  </div>
                                  <ul className="blog-meta">
                                      <li className="author-info">
                                          <img src={blog.author.image} alt="author" />
                                          <a className="author-name" href="#" aria-label={blog.author.name} onClick={(e) => e.preventDefault()}>{blog.author.name}</a>
                                      </li>
                                      <li className="blog-date"><i className="fa-light fa-calendar"></i> {blog.date}</li>
                                  </ul>
                                  <div className="modern-blur-action"></div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      {/* blog section end */}

      {/* contact section */}
      <section className="tmp-section tmp-section-gapBottom" id="contact">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-12 col-xl-12 col-xxl-12">
                      <div className="tmp-section-content mb--60 text-center">
                          <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <div className="border-left"></div>
                              <div className="border-right"></div>
                              <h2 className="h6 subtitle color-secondary">Contact with me</h2>
                          </div>
                          <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">Contact with me</h2>
                      </div>
                  </div>
              </div>
              <div className="row g-5 invers-arrange-container">
                  <div className="col-lg-7 col-xl-8">
                      <div className="contact-form-style-1 tmp-four-side-border color-border-shape-secondary tmp-scroll-trigger tmp-fade-in animation-order-1">
                          <div className="tmp-left"></div>
                          <div className="tmp-right"></div>
                          <div className="tmp-bottom"></div>
                          <div className="tmp-bottom-right"></div>
                          <div className="tmp-contact-form">
                              <h3 className="tmp-contact-title fw-bold mb-5">Send me a message</h3>
                              <div className="tmp-contact-form-shape"></div>
                              <div id="form-messages" className="error"></div>
                              <form id="contact-form" className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                  <div className="row g-5">
                                      <div className="col-lg-6">
                                          <div className="form-group">
                                              <input type="text" placeholder="Your Name" name="name" id="contact-name" className="form-control" aria-label="Your Name" required="" />
                                          </div>
                                      </div>
                                      <div className="col-lg-6">
                                          <div className="form-group">
                                              <input type="text" placeholder="Your Phone" id="contact-phone" className="form-control" aria-label="Your Name" required="" />
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="form-group">
                                              <input type="email" placeholder="Your Email" id="contact-email" name="email" className="form-control" aria-label="Your Email" required="" />
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="form-group">
                                              <input type="text" placeholder="Subject" id="subject" name="subject" className="form-control" aria-label="Subject" required="" />
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="form-group">
                                              <textarea name="message" id="contact-message" rows="10" placeholder="Your Message" className="form-control" aria-label="Your Message" required=""></textarea>
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="form-group">
                                              <div className="contact-btn">
                                                  <button name="submit" type="submit" id="submit" className="like-button tmp-btn btn-md hover-icon-reverse radius-round">
                                                      <span className="icon-reverse-wrapper">
                                                          <span className="btn-text">Send Message</span>
                                                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                      </span>
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-5 col-xl-4 invers-arrange-item">
                      <div className="tmp-contact-info tmp-scroll-trigger tmp-fade-in animation-order-2">
                          <div className="single-contact-info">
                              <div className="tmp-icon mb-4">
                                  <i className="fa-solid fa-headset"></i>
                              </div>
                              <h3 className="h5 tmp-contact-info-title fw-bold mb-3">Get Support</h3>
                              <p className="text-small">If you want to communicate with live please <span>Skype online</span> contact me.</p>
                              <div className="d-flex flex-column gap-1 mt-4">
                                  <div className="tmp-action">
                                      <span>Phone Number:</span>
                                      <a href="tel:+880123456789">+880 123 456 789</a>
                                  </div>
                                  <div className="tmp-action">
                                      <span>Phone Number:</span>
                                      <a href="tel:+880123456789">+880 123 456 789</a>
                                  </div>
                              </div>
                          </div>
                          <div className="single-contact-info">
                              <div className="tmp-icon mb-4">
                                  <i className="fa-solid fa-envelope"></i>
                              </div>
                              <h3 className="h5 tmp-contact-info-title fw-bold mb-3">Communication With Mail</h3>
                              <p className="text-small">Please submit your email in my email and please as soon as possible.</p>
                              <div className="d-flex flex-column gap-1 mt-4">
                                  <div className="tmp-action">
                                      <span>Email Address:</span>
                                      <a href="mailto:irin@example.com">irin@example.com</a>
                                  </div>
                                  <div className="tmp-action">
                                      <span>Email Address:</span>
                                      <a href="mailto:irin@example.com">irin2@example.com</a>
                                  </div>
                              </div>
                          </div>
                          <div className="single-contact-info">
                              <div className="tmp-icon mb-4">
                                  <i className="fa-brands fa-rocketchat"></i>
                              </div>
                              <h3 className="h5 tmp-contact-info-title fw-bold mb-3">Want to chat now</h3>
                              <p className="text-small">Chat with me its more experts of find out more and more informative way to learn about me.</p>
                              <a className="tmp-btn mt--30 hover-icon-reverse radius-round btn-md" href="/contact">
                                  <span className="icon-reverse-wrapper">
                                      <span className="btn-text">Open Chat With Me</span>
                                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                  </span>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* contact section end */}

      {/* footer section */}
      <footer className="tmp-footer footer-main position-relative">
          <div className="tmp-footer-shape"></div>
          <div className="container">
              <div className="row">
                  <div className="tmp-footer-wrapper tmp-section-padding tmp-border-bottom d-flex justify-content-between flex-wrap gap-5">
                      <div className="tmp-footer-left min-fit mr-50">
                          <a href="/" className="tmp-footer-logo mb-1">
                              <img className="logo-image" width="150" height="40" src="/assets/images/logo/main-logo.svg" alt="logo" />
                          </a>
                          <h4 className="tmp-footer-mail mt-5 mb-5 d-block">
                              Create something great
                              <a className="hover-moving-primary" href="mailto:contact@example.com">contact@example.com</a>
                          </h4>
                          <div className="tmp-social-default sm-size justify-content-start">
                              {heroData.socials.map((social, idx) => (
                                  <a key={idx} href={social.url} target="_blank" className="tmp-social-item" aria-label={social.platform}><i className={social.icon}></i></a>
                              ))}
                          </div>
                      </div>
                      <div className="tmp-footer-menus d-flex justify-content-between w-100">
                          <div className="tmp-widget">
                              <div className="tmp-widget-title">
                                  <h4>Menu</h4>
                              </div>
                              <div className="tmp-widget-menu">
                                  <ul className="list-unstyled mb-0 link-hover-animation">
                                      <li><a href="/index#" aria-label="About Me">About Me</a></li>
                                      <li><a href="/index#" aria-label="Photoshop">Photoshop</a></li>
                                      <li><a href="/index#" aria-label="Database">Database</a></li>
                                      <li><a href="/index#" aria-label="Figma Design">Figma Design</a></li>
                                      <li><a href="/index#" aria-label="Adobe XD">Adobe XD</a></li>
                                  </ul>
                              </div>
                          </div>

                          <div className="tmp-widget">
                              <div className="tmp-widget-title">
                                  <h4>Resources</h4>
                              </div>
                              <div className="tmp-widget-menu">
                                  <ul className="list-unstyled mb-0 link-hover-animation">
                                      <li><a href="/index#" aria-label="Support Center">Support Center</a></li>
                                      <li><a href="/index#" aria-label="Terms of My Service">Terms of My Service</a></li>
                                      <li><a href="/index#" aria-label="Privacy and Policyl">Privacy and Policy</a></li>
                                      <li><a href="/index#" aria-label="React Router">React Router</a></li>
                                      <li><a href="/index#" aria-label="Photoshop Design">Photoshop Design</a></li>
                                  </ul>
                              </div>
                          </div>

                          <div className="tmp-widget">
                              <div className="tmp-widget-title">
                                  <h4>Developers</h4>
                              </div>
                              <div className="tmp-widget-menu">
                                  <ul className="list-unstyled mb-0 link-hover-animation">
                                      <li><a href="/index#" aria-label="Contact">Contact Me</a></li>
                                      <li><a href="/index#" aria-label="About Me">About Me</a></li>
                                      <li><a href="/index#" aria-label="Management">Management</a></li>
                                      <li><a href="/index#" aria-label="Support Policy">Support Policy</a></li>
                                      <li><a href="/index#" aria-label="Adobe XD">Adobe XD</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row justify-content-center w-100 text-center">
                  <div className="tmp-copyright py-6">
                      <p>&copy; <span id="year" suppressHydrationWarning={true}>{new Date().getFullYear()}</span> All Rights Reserved.</p>
                  </div>
              </div>
          </div>
      </footer>
      {/* footer section end */}


      {/* Modal - Project Details */}
      <div className="modal tmp-modal fade" id="exampleModal" role="dialog" aria-modal="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close like-button" data-bs-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i className="fa-sharp fa-light fa-xmark"></i></span>
                      </button>
                  </div>
                  <div className="modal-body">
                      {activeProject && (
                          <div className="row g-5 align-items-center">
                              <div className="col-lg-12">
                                  <div className="portfolio-popup-thumbnail">
                                      <div className="image">
                                          <img className="w-100" src={activeProject.image} alt={activeProject.title} />
                                      </div>
                                      <div className="like-product like-button">
                                          <i className="fa-regular fa-thumbs-up"></i>
                                          <span>{activeProject.likes}</span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-12">
                                  <div className="text-content-pd">
                                      <span className="category">{activeProject.badges.join(' - ')}</span>
                                      <h3 className="mb--30">{activeProject.title}</h3>
                                      <p className="mb--20">{activeProject.description}</p>
                                      <p>Client: <strong>{activeProject.client}</strong> | Services: <strong>{activeProject.services}</strong> | Project Date: <strong>{activeProject.projectDate}</strong></p>

                                      <div className="button-group-modal-bottom mt--40">
                                          <div className="button-group service-more-btn">
                                              <a className="tmp-btn icon-hover radius-round btn-sm" href={activeProject.previewLink} target="_blank">
                                                  <span className="btn-text">VIEW PROJECT</span>
                                                  <span className="btn-icon"><i className="fa-light fa-arrow-right"></i></span>
                                              </a>
                                          </div>
                                          <div className="social-share-with-text">
                                              <span>Share :</span>
                                              <div className="tmp-social-default sm-size justify-content-start">
                                                  {heroData.socials.map((social, idx) => (
                                                      <a key={idx} href={social.url} target="_blank" className="tmp-social-item" aria-label={social.platform}><i className={social.icon}></i></a>
                                                  ))}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </div>

      {/* Modal - Blog Details */}
      <div className="tmp-modal modal fade" id="blogModal">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="tmp-work-modal-content">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                          <i className="fa-sharp fa-light fa-xmark"></i>
                      </button>
                      {activeBlog && (
                          <>
                              <div className="tmp-work-modal-thumb">
                                  <figure className="w-100">
                                      <img className="w-100" src={activeBlog.image} alt={activeBlog.title} />
                                  </figure>
                              </div>
                              <h3 className="fw-bold mb-4">{activeBlog.title}</h3>
                              <p className="subtitle text-muted mb-4">{activeBlog.date} | {activeBlog.readTime} | {activeBlog.categories.join(' - ')}</p>
                              <p>{activeBlog.description}</p>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum vestibulum imperdiet. 
                                  Quisque sed nunc vitae ligula aliquet lobortis. Phasellus sollicitudin, magna eu aliquam sollicitudin, 
                                  lectus diam facilisis urna, in efficitur urna erat vel sem.
                              </p>
                              
                              {/* comment form */}
                              <div className="th-comment-form mt--35">
                                  <div className="th-contact-form">
                                      <h3 className="th-title">Leave a reply</h3>
                                      <form className="th-form" onSubmit={(e) => e.preventDefault()}>
                                          <div className="d-flex flex-wrap flex-sm-nowrap gap-md-4 gap-sm-4 gap-0 w-100">
                                              <div className="form-group w-100">
                                                  <input type="text" name="name" className="form-control" required placeholder="Your Name" />
                                              </div>
                                              <div className="form-group w-100">
                                                  <input type="email" name="email" className="form-control" required placeholder="Your Email" />
                                              </div>
                                          </div>
                                          <div className="form-group">
                                              <input type="url" name="website" className="form-control" placeholder="Your Website" />
                                          </div>
                                          <div className="form-group">
                                              <textarea name="msg" className="form-control" required placeholder="Enter Your Message"></textarea>
                                          </div>
                                          <div className="form-group">
                                              <button className="tmp-btn icon-hover radius-round" type="submit">
                                                  <span className="btn-text">Submit Comment</span>
                                                  <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                              </button>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </>
                      )}
                  </div>
              </div>
          </div>
      </div>

      {/* Modal - Service Details */}
      <div className="modal tmp-modal fade" id="exampleModalService" role="dialog" aria-modal="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close like-button" data-bs-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i className="fa-sharp fa-light fa-xmark"></i></span>
                      </button>
                  </div>
                  <div className="modal-body">
                      {activeService && (
                          <div className="row g-5 align-items-center">
                              <div className="col-lg-12">
                                  <div className="portfolio-popup-thumbnail">
                                      <div className="image">
                                          <img className="w-100" src="/assets/images/services/service-detials-popup.webp" alt="slide" />
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-12">
                                  <div className="text-content-pd">
                                      <span className="category">Specialization</span>
                                      <h3 className="mb--30">{activeService.title}</h3>
                                      <p className="mb--20">{activeService.description}</p>

                                      <div className="service-details-list-wrapper">
                                          <div className="single-details-method">
                                              <h4 className="title">Delivery Process</h4>
                                              <ul className="single-list">
                                                  <li>Comprehensive analysis of client requirements</li>
                                                  <li>Wireframing and initial interactive prototypes</li>
                                                  <li>Incremental software updates and code validation</li>
                                                  <li>Responsive UI deployment and cross-browser audits</li>
                                                  <li>Ongoing support and performance monitoring</li>
                                              </ul>
                                          </div>
                                      </div>

                                      <p>Our online tools and professional frameworks are tailored to scale business platforms seamlessly. We bring standard practices, clean styles, and optimized solutions to every project.</p>

                                      <div className="button-group-modal-bottom mt--40">
                                          <div className="button-group service-more-btn">
                                              <a className="tmp-btn icon-hover radius-round btn-sm" href="/contact">
                                                  <span className="btn-text">VIEW MORE</span>
                                                  <span className="btn-icon"><i className="fa-light fa-arrow-right"></i></span>
                                              </a>
                                          </div>
                                          <div className="social-share-with-text">
                                              <span>Share :</span>
                                              <div className="tmp-social-default sm-size justify-content-start">
                                                  {heroData.socials.map((social, idx) => (
                                                      <a key={idx} href={social.url} target="_blank" className="tmp-social-item" aria-label={social.platform}><i className={social.icon}></i></a>
                                                  ))}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
