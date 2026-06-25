'use client';

import React, { useState, useEffect } from 'react';
import heroData from './data/hero.json';
import aboutData from './data/about.json';
import servicesData from './data/services.json';
import portfolioData from './data/portfolio.json';
import pricingData from './data/pricing.json';
import testimonialsData from './data/testimonials.json';
import blogsData from './data/blogs.json';

export default function FreelancerPage() {
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
    if (servicesData && servicesData.length > 0) setActiveService(servicesData[0]);
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
      <div id="root" suppressHydrationWarning={true}>
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
      </div>
    );
  }

  return (
    <>
      <div id="root" suppressHydrationWarning={true}>
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
        <header className="tmp-header-area header-one header-defalut-spacing header--sticky header-not--transparent tmp-border-bottom">
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
                                            <li className="current"><a className="smoth-animation" href="/freelancer#home">Home</a></li>
                                            <li><a className="smoth-animation" href="/freelancer#service">Services</a></li>
                                            <li><a className="smoth-animation" href="/freelancer#portfolio">Portfolio</a></li>
                                            <li><a className="smoth-animation" href="/freelancer#blog">Blog</a></li>
                                            <li><a className="smoth-animation" href="/freelancer#contact">Contact</a></li>
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
                        <li><a className="smoth-animation" href="/freelancer#home">Home</a></li>
                        <li><a className="smoth-animation" href="/freelancer#service">Services</a></li>
                        <li><a className="smoth-animation" href="/freelancer#portfolio">Portfolio</a></li>
                        <li><a className="smoth-animation" href="/freelancer#resume">Resume</a></li>
                        <li><a className="smoth-animation" href="/freelancer#pricing">Pricing</a></li>
                        <li><a className="smoth-animation" href="/freelancer#blog">Blog</a></li>
                        <li><a className="smoth-animation" href="/freelancer#contacts">Contact</a></li>
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

        {/* hero section */}
        <div className="banner-style-9 tmp-section freelancer-hero" id="home">
            <div className="shape">
                <div className="shape-1"></div>
                <div className="shape-2">
                    <img src={heroData.shapeImage} alt="" />
                </div>
            </div>

            <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                    <div className="col-lg-7">
                        <div className="banner-content">
                            <span className="subtitle">{heroData.subtitle}</span>
                            <h1 className="title" data-wow-delay=".4s">
                                Hi, I’m <br /> {heroData.name}
                                <br /> a
                                <span className="header-caption">
                                    <span className="cd-headline clip is-full-width">
                                            <span className="cd-words-wrapper">
                                                {heroData.roles.map((role, idx) => (
                                                    <b key={idx} className={`${idx === 0 ? 'is-visible' : 'is-hidden'} theme-gradient`}>{role}</b>
                                                ))}
                                            </span>
                                    </span>
                                </span>
                            </h1>
                            <p className="description" data-wow-delay=".5s" dangerouslySetInnerHTML={{ __html: heroData.description.replace('\n', '<br />') }} />
                            <div className="btn-group d-flex flex-wrap gap-3 max-content mt-40" data-wow-delay=".6s">
                                <a className="tmp-btn radius-round rounded-pill tmp-switch-btn btn-border" href={heroData.cvLink}>
                                    <span data-text="Download My CV">Download My CV</span>
                                </a>
                                <a className="tmp-btn radius-round rounded-pill tmp-switch-btn" href={heroData.profileLink}>
                                    <span data-text="View My Profile">View My Profile</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="thumbnail-wrapper">
                            <div className="badge-title">
                                <span>{heroData.experienceBadge}</span>
                            </div>
                            <figure className="thumbnail">
                                <img src={heroData.mainImage} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tmp-marque-animation">
                <div className="tmp-marque-text">
                    {heroData.marqueeText.map((text, idx) => (
                        <span key={idx}>{text}</span>
                    ))}
                </div>
            </div>
        </div>
        {/* hero section end */}

        {/* marque slider */}
        <div className="tmp-section marque-section-bg">
            <div className="marque-slider">
                <div className="swiper-wrapper align-items-center">
                    {heroData.brands.map((brand, idx) => (
                        <div key={idx} className="swiper-slide">
                            <div className="single-brand-slide">
                                <a href="/freelancer#" aria-label="brand">
                                    <img src={brand} alt="" />
                                </a>
                            </div>
                        </div>
                    ))}
                    {/* duplicate slides for swiper loop */}
                    {heroData.brands.map((brand, idx) => (
                        <div key={`dup-${idx}`} className="swiper-slide">
                            <div className="single-brand-slide">
                                <a href="/freelancer#" aria-label="brand">
                                    <img src={brand} alt="" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {/* marque slider end */}

        {/* about section */}
        <div className="tmp-section tmp-section-padding" id="resume">
            <div className="container">
                <div className="row g-5 invers-arrange-container">
                    <div className="col-md-6 col-lg-6 col-xl-3 col-xxl-3 invers-arrange-item">
                        <div className="about-author position-relative tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <img height="300" width="230" className="mx-auto" src={aboutData.avatarImage} alt="" />
                            <a className="rounded-player-2 popup-video position-right-bottom btn-sm btn-white-color" href={aboutData.videoUrl}>
                                <span className="play-icon"></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-5 col-xxl-5">
                        <div className="about-content position-relative tmp-scroll-trigger tmp-fade-in animation-order-2">
                            <div className="box-shape">
                                <img src="/assets/images/freelancer/about/linear-shape.svg" alt="" />
                            </div>
                            <h2 className="about-title fw-bold">{aboutData.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: aboutData.subtitle.replace('\n', '<br />') }} />
                            <p>{aboutData.description}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-4 invers-arrange-item">
                        <div className="about-content position-relative tmp-scroll-trigger tmp-fade-in animation-order-3">
                            <div className="box-shape">
                                <img src="/assets/images/freelancer/about/linear-shape.svg" alt="" />
                            </div>
                            <h3 className="h4 about-title font-30 fw-bold">Achievement</h3>
                            <div className="d-flex flex-column gap-2">
                                {aboutData.achievements.map((ach, idx) => (
                                    <div key={idx} className="item mb--5">
                                        <span className="h5 mb-2 d-block fw-bold mb--0">{ach.count}</span>
                                        <p>{ach.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-4 invers-arrange-item">
                        <div className="about-content position-relative tmp-scroll-trigger tmp-fade-in animation-order-4">
                            <div className="box-shape">
                                <img src="/assets/images/freelancer/about/linear-shape.svg" alt="" />
                            </div>
                            <h3 className="h4 about-title font-30 fw-bold">Experience</h3>
                            <div className="d-flex flex-column gap-3">
                                {aboutData.experience.map((exp, idx) => (
                                    <div key={idx} className="item">
                                        <p className="mb-0">{exp.year}</p>
                                        <span className="h5 mb-0 fw-bold">{exp.role}</span>
                                        <p>{exp.company}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                        <div className="about-content position-relative tmp-scroll-trigger tmp-fade-in animation-order-5">
                            <div className="box-shape">
                                <img src="/assets/images/freelancer/about/linear-shape.svg" alt="" />
                            </div>
                            <h3 className="h4 about-title font-30 fw-bold">Education</h3>
                            <div className="d-flex flex-column gap-3">
                                {aboutData.education.map((edu, idx) => (
                                    <div key={idx} className="item">
                                        <p className="mb-0">{edu.year}</p>
                                        <span className="h5 mb-0 fw-bold">{edu.degree}</span>
                                        <p>{edu.school}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-4 invers-arrange-item">
                        <div className="about-content position-relative tmp-scroll-trigger tmp-fade-in animation-order-6">
                            <div className="box-shape">
                                <img src="/assets/images/freelancer/about/linear-shape.svg" alt="" />
                            </div>
                            <h3 className="h4 about-title font-30 fw-bold">Follow me</h3>
                            <div className="tmp-social main">
                                {heroData.socials.map((social, idx) => (
                                    <a key={idx} href={social.url} target="_blank" className="tmp-social-item" aria-label={social.platform}><i className={social.icon}></i></a>
                                ))}
                            </div>
                            <a className="tmp-btn icon-hover mt--75 btn-main radius-round btn-md" href="/freelancer#contact">
                                <span className="btn-text">Contact Me</span>
                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* about section end */}

        {/* service section */}
        <section className="tmp-section freelancer-section-bg tmp-section-padding" id="service">
            <div className="section-shape">
                <div className="shape-one"></div>
            </div>
            <div className="container">
                {/* Start Section Title  */}
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="tmp-section-content mb--60 text-center">
                            <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <div className="border-left"></div>
                                <div className="border-right"></div>
                                <h2 className="h6 subtitle">My Specializations Services</h2>
                            </div>
                            <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">What I Do</h2>
                            <p className="tmp-section-desc mx-auto tmp-scroll-trigger tmp-fade-in animation-order-3">Develop comprehensive content strategies tailored to your unique goals and target audience, ensuring that every piece of content.</p>
                        </div>
                    </div>
                </div>
                {/* End Section Title  */}
                <div className="row g-5 model-service-hover">
                    {servicesData.map((service, idx) => (
                        <div key={idx} className="col-xl-4 col-lg-6 col-md-6">
                            <div className={`service-style-4 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`} data-bs-toggle="modal" data-bs-target="#exampleModalService" onClick={() => setActiveService(service)}>
                                <div className="shape"></div>
                                <div className="icon">
                                    <img src={service.icon} alt="" />
                                </div>
                                <h3 className="h5 title">
                                    <a href="#" aria-label={service.ariaLabel} onClick={(e) => e.preventDefault()}>{service.title}</a>
                                </h3>
                                <p className="description">{service.description}</p>
                                <a href="#" className="tmp-service-link" onClick={(e) => e.preventDefault()}><i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* service section end */}

        {/* portfolio section */}
        <section className="tmp-section tmp-section-padding" id="portfolio">
            <div className="tmp-section-shape">
                <div className="shape-one">
                    <img src="/assets/images/freelancer/portfolio/shape-one.svg" alt="" />
                </div>
            </div>
            <div className="container">
                {/* Start Section Title  */}
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="tmp-section-content mb--60 text-center">
                            <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <div className="border-left"></div>
                                <div className="border-right"></div>
                                <h2 className="h6 subtitle">My Awesome Work</h2>
                            </div>
                            <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">My Portfolio</h2>
                            <p className="tmp-section-desc mx-auto tmp-scroll-trigger tmp-fade-in animation-order-3">With a strong foundation in frontend development and a keen eye for design, I specialize in creating interactive and responsive web.</p>
                        </div>
                    </div>
                </div>
                {/* End Section Title  */}
                <div className="row mb-60 justify-content-center text-center">
                    <div className="col-lg-8">
                        <div className="tmp-tab style-two tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">Web Design</button>
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#web" aria-controls="web">Web Development</button>
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#ui" aria-controls="ui">UI/UX Design</button>
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#mern" aria-controls="mern">MERN Stack</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    {/* All projects */}
                    <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all">
                        <div className="row g-5">
                            {portfolioData.map((project, idx) => (
                                <div key={project.id || idx} className="col-lg-4 col-md-6">
                                    <div className="portfolio-style-4 mb--30" onClick={() => setActiveProject(project)}>
                                        <a href="/freelancer#" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-label="portfolio" className="thumbnail" onClick={(e) => e.preventDefault()}>
                                            <img src={project.image} alt="" />
                                        </a>
                                        <div className="portfolio-meta">
                                            <div>
                                                <a href="/freelancer#" className="h5 fw-bold d-block mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => e.preventDefault()}>{project.title}</a>
                                                <a href="/freelancer#" className="cat d-block" onClick={(e) => e.preventDefault()}>{project.displayCategory}</a>
                                            </div>
                                            <div>
                                                <a href="/freelancer#" className="link view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => e.preventDefault()}><i className="fa-regular fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Web Development */}
                    <div className="tab-pane fade" id="web" role="tabpanel" aria-labelledby="web">
                        <div className="row g-5">
                            {portfolioData.filter(p => p.categories.includes('web')).map((project, idx) => (
                                <div key={project.id || idx} className="col-lg-4 col-md-6">
                                    <div className="portfolio-style-4 mb--30" onClick={() => setActiveProject(project)}>
                                        <a href="/freelancer#" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-label="portfolio" className="thumbnail" onClick={(e) => e.preventDefault()}>
                                            <img src={project.image} alt="" />
                                        </a>
                                        <div className="portfolio-meta">
                                            <div>
                                                <a href="/freelancer#" className="h5 fw-bold d-block mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => e.preventDefault()}>{project.title}</a>
                                                <a href="/freelancer#" className="cat d-block" onClick={(e) => e.preventDefault()}>{project.displayCategory}</a>
                                            </div>
                                            <div>
                                                <a href="/freelancer#" className="link view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => e.preventDefault()}><i className="fa-regular fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* UI/UX Design */}
                    <div className="tab-pane fade" id="ui" role="tabpanel" aria-labelledby="ui">
                        <div className="row g-5">
                            {portfolioData.filter(p => p.categories.includes('ui')).map((project, idx) => (
                                <div key={project.id || idx} className="col-lg-4 col-md-6">
                                    <div className="portfolio-style-4 mb--30" onClick={() => setActiveProject(project)}>
                                        <a href="/freelancer#" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-label="portfolio" className="thumbnail" onClick={(e) => e.preventDefault()}>
                                            <img src={project.image} alt="" />
                                        </a>
                                        <div className="portfolio-meta">
                                            <div>
                                                <a href="/freelancer#" className="h5 fw-bold d-block mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => e.preventDefault()}>{project.title}</a>
                                                <a href="/freelancer#" className="cat d-block" onClick={(e) => e.preventDefault()}>{project.displayCategory}</a>
                                            </div>
                                            <div>
                                                <a href="/freelancer#" className="link view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => e.preventDefault()}><i className="fa-regular fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MERN Stack */}
                    <div className="tab-pane fade" id="mern" role="tabpanel" aria-labelledby="mern">
                        <div className="row g-5">
                            {portfolioData.filter(p => p.categories.includes('mern')).map((project, idx) => (
                                <div key={project.id || idx} className="col-lg-4 col-md-6">
                                    <div className="portfolio-style-4 mb--30" onClick={() => setActiveProject(project)}>
                                        <a href="/freelancer#" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-label="portfolio" className="thumbnail" onClick={(e) => e.preventDefault()}>
                                            <img src={project.image} alt="" />
                                        </a>
                                        <div className="portfolio-meta">
                                            <div>
                                                <a href="/freelancer#" className="h5 fw-bold d-block mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => e.preventDefault()}>{project.title}</a>
                                                <a href="/freelancer#" className="cat d-block" onClick={(e) => e.preventDefault()}>{project.displayCategory}</a>
                                            </div>
                                            <div>
                                                <a href="/freelancer#" className="link view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => e.preventDefault()}><i className="fa-regular fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* portfolio section end */}


        {/* pricing section */}
        <section className="tmp-section tmp-section-padding freelancer-pricing-bg" id="pricing">
            <div className="section-shape">
                <div className="shape-one"></div>
            </div>
            <div className="container">
                {/* Start Section Title  */}
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="tmp-section-content mb--60 text-center">
                            <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <div className="border-left"></div>
                                <div className="border-right"></div>
                                <h2 className="h6 subtitle">My Pricing Plan</h2>
                            </div>
                            <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">My Pricing Plan</h2>
                            <p className="tmp-section-desc mx-auto tmp-scroll-trigger tmp-fade-in animation-order-3">Develop comprehensive content strategies tailored to your unique goals and target audience, ensuring that every piece of content.</p>
                        </div>
                    </div>
                </div>
                {/* End Section Title  */}
                <div className="row g-5">
                    {pricingData.map((plan, idx) => (
                        <div key={idx} className="col-lg-6 col-md-6 col-xl-4">
                            <div className={`tmp-pricing-card tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1} ${plan.popular ? 'active-pricing' : ''}`}>
                                <div className="tmp-pricing-card-shape"></div>
                                {plan.popular && <div className="tmp-pricing-card-feature">Popular</div>}
                                <div className="tmp-pricing-card-box">
                                    <h2 className="h5 pricing-plan-type">{plan.plan}</h2>
                                    <p className="tmp-pricing-card-desc">{plan.description}</p>
                                    <h1 className="tmp-pricing-card-price">{plan.price}</h1>

                                    <a className={`like-button tmp-btn radius-round hover-icon-reverse ${plan.popular ? '' : 'btn-border'} w-100`} href="#">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">ORDER NOW</span>
                                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                        </span>
                                    </a>

                                    <ul className="list-unstyled mb-0 tmp-list">
                                        {plan.features.map((feat, fidx) => (
                                            <li key={fidx}><i className="fa-light fa-check"></i> {feat}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* pricing section end */}

        {/* client section */}
        <section className="tmp-section pt-120 pt_sm--50 pb-120 pb_sm--50 ps-130" id="testimonial">
            <div className="container-fluid">
                {/* Start Section Title  */}
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="tmp-section-content mb--60 mb_sm--30 text-center tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <div className="tmp-fsb">
                                <div className="border-left"></div>
                                <div className="border-right"></div>
                                <h2 className="h6 subtitle">See My Customer</h2>
                            </div>
                            <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">Awesome Clients</h2>
                            <p className="tmp-section-desc mx-auto tmp-scroll-trigger tmp-fade-in animation-order-3">My awesome clients foundation in frontend development and a keen eye for design, I specialize in creating interactive and responsive web.</p>
                        </div>
                    </div>
                </div>
                {/* End Section Title  */}
                <div className="row">
                    <div className="padding-controler-testimonials model-review-slider overflow-hidden">
                        <div className="swiper-wrapper">
                            {testimonialsData.map((review, idx) => (
                                <div key={idx} className="swiper-slide">
                                    <div className="testimonial-style-4">
                                        <div className="shape-left">
                                            <img src="/assets/images/model/t-shape.svg" alt="" />
                                        </div>
                                        <div className="shape-right">
                                            <img src="/assets/images/model/t-comma.svg" alt="" />
                                        </div>
                                        <div className="shape-bottom"></div>

                                        <div className="content">
                                            <div className="rating-wrapper">
                                                <span className="rating-count">{review.rating}</span>
                                                <span className="rating-star">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <i key={i} className="fa-solid fa-star"></i>
                                                    ))}
                                                </span>
                                            </div>
                                            <p className="description">{review.quote}</p>
                                        </div>

                                        <div className="author-information">
                                            <div className="author-avatar">
                                                <img src={review.author.image} alt="" />
                                            </div>
                                            <div className="author-info mt-3">
                                                <h3 className="h6 fw-bold mb-1">{review.author.name}</h3>
                                                <p className="text-small">{review.author.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* client section end */}

        {/* blog section */}
        <section className="tmp-section tmp-section-padding position-relative bg-main" id="blog">
            <div className="container">
                {/* Start Section Title  */}
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="tmp-section-content mb--60 text-center">
                            <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <div className="border-left"></div>
                                <div className="border-right"></div>
                                <h2 className="h6 subtitle">My Recent Post</h2>
                            </div>
                            <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">Recent Post</h2>
                            <p className="tmp-section-desc mx-auto tmp-scroll-trigger tmp-fade-in animation-order-3">With a strong foundation in frontend development and a keen eye for design, I specialize in creating interactive and responsive web.</p>
                        </div>
                    </div>
                </div>
                {/* End Section Title  */}
                <div className="row g-5">
                    {blogsData.map((blog, idx) => (
                        <div key={idx} className="col-lg-6 col-md-6 col-xl-4" data-bs-toggle="modal" data-bs-target="#blogModal" onClick={() => setActiveBlog(blog)}>
                            <div className={`blog-style-4 inv-hover-item tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`}>
                                <div className="thumbnail">
                                    <a href="#" className="inv-hover-img" data-displacement="/assets/images/main/fluid.webp" data-intensity="0.2" data-speedin="1" data-speedout="1" aria-label={blog.title} onClick={(e) => e.preventDefault()}>
                                        <img src={blog.image} alt="" />
                                    </a>
                                    <div className="blog-date">
                                        <span className="day">{blog.date.day}</span>
                                        <span className="month">{blog.date.month}</span>
                                        <span className="year">{blog.date.year}</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="blog-category mb--10">
                                        <a href="#" className="cat d-block" onClick={(e) => e.preventDefault()}>{blog.category}</a>
                                    </div>
                                    <h3 className="h4 title invers-hover-link mb--30">
                                        <a href="#" aria-label={blog.title} onClick={(e) => e.preventDefault()}>
                                            {blog.title} <i className="fa-light fa-arrow-up-right"></i>
                                        </a>
                                    </h3>
                                    <div className="read-more-btn mt--10">
                                        <a href="#" className="link view-btn" onClick={(e) => e.preventDefault()}>Read Details <i className="fa-regular fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* blog section end */}

        {/* contact section */}
        <section className="tmp-section pb-120 pb_sm--50" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-xl-12 col-xxl-12">
                        <div className="tmp-section-content mb--60 text-center">
                            <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <div className="border-left"></div>
                                <div className="border-right"></div>
                                <h2 className="h6 subtitle">Contact with me</h2>
                            </div>
                            <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">Contact with me</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 invers-arrange-container">
                    <div className="col-lg-7 col-xl-8">
                        <div className="contact-form-style-1 variation-2 tmp-scroll-trigger tmp-fade-in animation-order-1">
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
                        <div className="tmp-contact-info variation-2 tmp-scroll-trigger tmp-fade-in animation-order-2">
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
                                <a className="tmp-btn mt--30 hover-icon-reverse radius-round btn-md" href="/freelancer#">
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
        <footer className="tmp-footer footer-freelancer-bg">
            <div className="tmp-footer-shape-images">
                <img src="/assets/images/freelancer/footer-shape.svg" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="tmp-footer-wrapper tmp-section-padding tmp-border-bottom gap-5 d-flex justify-content-between">
                        <div className="tmp-footer-left min-fit mr-50">
                            <a href="/" className="tmp-footer-logo mb-1">
                                <img className="logo-image" width="150" height="40" src="/assets/images/logo/freelancer.svg" alt="logo" />
                            </a>
                            <h4 className="tmp-footer-mail mt-5 mb-5 d-block">
                                Create something great
                                <a className="hover-moving-primary" href="mailto:irin@example.com">contact@example.com</a>
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
                                        <li><a href="/freelancer#" aria-label="About Me">About Me</a></li>
                                        <li><a href="/freelancer#" aria-label="Photoshop">Photoshop</a></li>
                                        <li><a href="/freelancer#" aria-label="Database">Database</a></li>
                                        <li><a href="/freelancer#" aria-label="Figma Design">Figma Design</a></li>
                                        <li><a href="/freelancer#" aria-label="Adobe XD">Adobe XD</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tmp-widget">
                                <div className="tmp-widget-title">
                                    <h4>Resources</h4>
                                </div>
                                <div className="tmp-widget-menu">
                                    <ul className="list-unstyled mb-0 link-hover-animation">
                                        <li><a href="/freelancer#" aria-label="Support Center">Support Center</a></li>
                                        <li><a href="/freelancer#" aria-label="Terms of My Service">Terms of My Service</a></li>
                                        <li><a href="/freelancer#" aria-label="Privacy and Policyl">Privacy and Policy</a></li>
                                        <li><a href="/freelancer#" aria-label="React Router">React Router</a></li>
                                        <li><a href="/freelancer#" aria-label="Photoshop Design">Photoshop Design</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tmp-widget">
                                <div className="tmp-widget-title">
                                    <h4>Developers</h4>
                                </div>
                                <div className="tmp-widget-menu">
                                    <ul className="list-unstyled mb-0 link-hover-animation">
                                        <li><a href="/freelancer#" aria-label="Contact">Contact Me</a></li>
                                        <li><a href="/freelancer#" aria-label="About Me">About Me</a></li>
                                        <li><a href="/freelancer#" aria-label="Management">Management</a></li>
                                        <li><a href="/freelancer#" aria-label="Support Policy">Support Policy</a></li>
                                        <li><a href="/freelancer#" aria-label="Adobe XD">Adobe XD</a></li>
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
      </div>


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
                                          <span>525</span>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-lg-12">
                                  <div className="text-content-pd">
                                      <span className="category">{activeProject.displayCategory}</span>
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
                              <p className="subtitle text-muted mb-4">{activeBlog.date.day} {activeBlog.date.month} {activeBlog.date.year} | {activeBlog.readTime} | {activeBlog.category}</p>
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
