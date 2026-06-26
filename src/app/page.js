'use client';

import React, { useState, useEffect } from 'react';
import heroData from './data/hero.json';
import servicesData from './data/services.json';
import portfolioData from './data/portfolio.json';
import skillsData from './data/skills.json';
import resumeData from './data/resume.json';
import testimonialsData from './data/testimonials.json';
import blogsData from './data/blogs.json';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderFade, setPreloaderFade] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [activeBlog, setActiveBlog] = useState(null);

  const hasServices = Array.isArray(servicesData) && servicesData.length > 0;
  const hasPortfolio = Array.isArray(portfolioData) && portfolioData.length > 0;
  const hasBlogs = Array.isArray(blogsData) && blogsData.length > 0;
  const hasTestimonials = testimonialsData && Array.isArray(testimonialsData.reviews) && testimonialsData.reviews.length > 0;
  
  const hasEducation = resumeData && Array.isArray(resumeData.education) && resumeData.education.length > 0;
  const hasExperience = resumeData && Array.isArray(resumeData.experience) && resumeData.experience.length > 0;
  const hasSkillsList = Array.isArray(skillsData) && skillsData.length > 0;
  const hasSkillsSection = hasSkillsList || hasEducation || hasExperience;
  
  const socials = (heroData && Array.isArray(heroData.socials)) ? heroData.socials : [];

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

    if (hasPortfolio) setActiveProject(portfolioData[0]);
    if (hasServices) setActiveService(servicesData[0]);
    if (hasBlogs) setActiveBlog(blogsData[0]);
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

  // Parse titleLine1 to match design styling ("I Design & Build")
  const firstTwoWords = (heroData && heroData.titleLine1) ? heroData.titleLine1.split(' ').slice(0, 2).join(' ') : '';
  const remainingWords = (heroData && heroData.titleLine1) ? heroData.titleLine1.split(' ').slice(2).join(' ') : '';

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
                                  <img className="logo-dark" src="assets/images/logo/main-logo.svg" alt="logo" />
                                  <img className="logo-white" src="assets/images/logo/main-logo.svg" alt="logo" />
                              </a>
                          </div>
                          <div className="tmp-header-right">
                              <nav className="tmp-mainmenu-nav d-none d-xl-block tmp-on-hover-animation">
                                  <nav className="navbar-example2 onepagenav">
                                      <ul className="tmp-mainmenu nav nav-pills">
                                          <li className="current"><a className="smoth-animation" href="#home">Home</a></li>
                                          {hasServices && <li><a className="smoth-animation" href="#service">Services</a></li>}
                                          {hasBlogs && <li><a className="smoth-animation" href="#blog">Blog</a></li>}
                                          <li><a className="smoth-animation" href="#contact">Contact</a></li>
                                          {hasPortfolio && <li><a className="smoth-animation" href="#portfolio">Portfolio</a></li>}
                                        </ul>
                                  </nav>
                              </nav>
                              <div className="header-btn tmp-button-group d-flex align-items-center">
                                  <a className="tmp-btn btn-border tmp-switch-btn btn-sm hover-transform-none radius-round d-none d-sm-block" href="#contact">
                                      <span data-text="Let’s Talk">Let’s Talk</span>
                                  </a>
                                  <a className="tmp-btn tmp-switch-btn btn-sm hover-transform-none radius-round" href="#contact">
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
                              <img className="logo-dark" src="assets/images/logo/main-logo.svg" alt="logo" />
                              <img className="logo-white" src="assets/images/logo/main-logo.svg" alt="logo" />
                          </a>
                      </div>
                      <div className="close-menu">
                          <button className="close-button tmp-round-action-btn">
                              <i className="fa-sharp fa-light fa-xmark"></i>
                          </button>
                      </div>
                  </div>

                  <ul className="tmp-mainmenu onepagenav-click">
                      <li><a className="smoth-animation" href="#home">Home</a></li>
                      {hasServices && <li><a className="smoth-animation" href="#service">Services</a></li>}
                      {hasPortfolio && <li><a className="smoth-animation" href="#portfolio">Portfolio</a></li>}
                      {hasSkillsSection && <li><a className="smoth-animation" href="#skill">Resume</a></li>}
                      {hasBlogs && <li><a className="smoth-animation" href="#blog">Blog</a></li>}
                      <li><a className="smoth-animation" href="#contact">Contact</a></li>
                  </ul>

                  <div className="social-wrapper mt--40">
                      <span className="subtitle">find with me</span>
                      <div className="social-link">
                          {socials.map((social, idx) => (
                              <a key={idx} href={social.url} target="_blank" aria-label={social.platform}><i className={social.icon}></i></a>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* End Popup Mobile Menu  */}

      {/* hero section */}
      <div className="banner-style-3 developer-banner tmp-hero pt--160 pt_sm--100 service-stack" id="home">
          <div className="container">
              <div className="row">
                  <div className="content-wrapper hero-developer-portfolio">
                      <div className="shape">
                          <div className="shape-1">
                              <img src={heroData?.shapeImage1} alt="" />
                          </div>
                          <div className="shape-2"></div>
                      </div>
                      <div className="content">
                          <div className="banner-top-title">
                              <div className="tmp-fsb fsb-2">
                                  <div className="border-left"></div>
                                  <div className="border-right"></div>
                                  <h6 className="subtitle">
                                      {heroData?.subtitle}
                                  </h6>
                              </div>
                              <div className="tmp-social main">
                                  {socials.map((social, idx) => (
                                      <a key={idx} href={social.url} target="_blank" className="tmp-social-item" aria-label={social.platform}><i className={social.icon}></i></a>
                                  ))}
                              </div>
                          </div>
                          <h1 className="title">
                              <span>{firstTwoWords}</span> {remainingWords} <br />
                              {heroData?.titleLine2}
                          </h1>
                          <div className="tmp-button-group">
                              <a className="tmp-btn hover-icon-reverse radius-round" href={heroData?.cvLink}>
                                  <span className="icon-reverse-wrapper">
                                      <span className="btn-text">Download CV</span>
                                  <span className="btn-icon"><i className="fa-light fa-download"></i></span>
                                  <span className="btn-icon"><i className="fa-light fa-download"></i></span>
                                  </span>
                              </a>
                              <a className="tmp-btn btn-border tmp-marquee-btn radius-round" href={heroData?.contactLink}>
                                  <span data-text="Contact Me">Contact Me</span>
                              </a>
                          </div>
                          <a href="#service" className="scroll-btn-wrap scroll-down-section mt-100">
                              Scroll down <span className="btn-border rounded-circle tmp-scroll-btn"><i className="fa-light fa-arrow-down"></i></span>
                          </a>
                      </div>
                      <div className="thumbnail">
                          <div className="tmp-hero-shape">
                              <div className="tmp-siback">
                                  <img src={heroData?.shapeImage2} alt="" />
                                  <div className="animated-dot"></div>
                              </div>
                              <div className="tmp-sib"></div>
                          </div>
                          <figure className="main-thumbnail">
                              <img src={heroData?.mainImage} alt="" />
                          </figure>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* hero section end */}

      {/* service section */}
      {hasServices && (
      <section className="tmp-section developer-service-bg fix tmp-section-gap" id="service">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="tmp-section-content mb--60 text-center">
                          <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <div className="border-left"></div>
                              <div className="border-right"></div>
                              <h2 className="h6 subtitle">What My Services</h2>
                          </div>
                          <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">
                              What My Services
                          </h2>
                      </div>
                  </div>
              </div>
              <div className="row g-5">
                  {servicesData.map((service, idx) => (
                      <div key={idx} className={`col-xl-4 col-lg-6 col-md-6 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`}>
                          <div className="service-style-3 text-center" data-bs-toggle="modal" data-bs-target="#exampleModalService" onClick={() => setActiveService(service)}>
                              <div className="inner">
                                  <div className="icon pb-50">
                                      <img src={service.icon} alt="" />
                                  </div>
                                  <h3 className="h5 title mb-4">
                                      <a href="#" aria-label={service.ariaLabel}>{service.title}</a>
                                  </h3>
                                  <p className="description">
                                      {service.description}
                                  </p>
                                  <div className="tmp-service-shape"></div>
                              </div>
                              <a href="#" className="over-link"></a>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      )}
      {/* service section end */}

      {/* work section */}
      {hasPortfolio && (
      <section className="tmp-section tmp-developer-work tmp-section-gap" id="portfolio">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="tmp-section-content mb--60 text-center">
                          <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <div className="border-left"></div>
                              <div className="border-right"></div>
                              <h2 className="h6 subtitle">My Recent Works</h2>
                          </div>
                          <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">
                              My Recent Works
                          </h2>
                      </div>
                  </div>
              </div>
              <div className="row tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <div className="tmp-tab mb-60">
                      <div className="nav nav-tabs d-flex gap-4 flex-wrap justify-content-center" id="nav-tab" role="tablist">
                          <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">All Projects</button>
                          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#web" aria-controls="web">Web Design</button>
                          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#figma" aria-controls="figma">Figma Design</button>
                          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#photoshop" type="button" role="tab" aria-controls="photoshop">Photoshop</button>
                          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#react" aria-controls="react">React js</button>
                      </div>
                  </div>
              </div>
              <div id="nav-tabContent" className="tab-content">
                  {/* All projects */}
                  <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all">
                      <div className="row gx-5 gy-60">
                          {portfolioData.map((project, idx) => (
                              <div key={project.id || idx} className={`col-lg-6 col-md-6 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`}>
                                  <div className="portfolio-style-3 inv-hover-item" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setActiveProject(project)}>
                                      <div className="thumbnail mb-30">
                                          <a href="#" className="inv-hover-img" data-displacement={project.displacement} data-intensity="0.2" data-speedin="1" data-speedout="1">
                                              <img src={project.image} alt={project.title} />
                                          </a>
                                      </div>
                                      <div className="content">
                                          <a href="#" aria-label={project.displayCategory} className="tmp-card-cat mb-4 d-block">{project.displayCategory}</a>
                                          <h3 className="h4 tmp-card-title mb-0">
                                              <a className="invers-hover-link" href="#" aria-label={project.title}>{project.title} <i className="fa-light fa-arrow-up-right"></i></a>
                                          </h3>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Web Design */}
                  <div className="tab-pane fade" id="web" role="tabpanel" aria-labelledby="web">
                      <div className="row gx-5 gy-60">
                          {portfolioData.filter(p => p.categories.includes('web')).map((project, idx) => (
                              <div key={project.id || idx} className={`col-lg-6 col-md-6 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`}>
                                  <div className="portfolio-style-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setActiveProject(project)}>
                                      <div className="thumbnail mb-30">
                                          <a href="#">
                                              <img src={project.image} alt={project.title} />
                                          </a>
                                      </div>
                                      <div className="content">
                                          <a href="#" aria-label={project.displayCategory} className="tmp-card-cat mb-4 d-block">{project.displayCategory}</a>
                                          <h3 className="h4 tmp-card-title mb-0">
                                              <a className="invers-hover-link" href="#" aria-label={project.title}>{project.title} <i className="fa-light fa-arrow-up-right"></i></a>
                                          </h3>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Figma Design */}
                  <div className="tab-pane fade" id="figma" role="tabpanel" aria-labelledby="figma">
                      <div className="row gx-5 gy-60">
                          {portfolioData.filter(p => p.categories.includes('figma')).map((project, idx) => (
                              <div key={project.id || idx} className={`col-lg-6 col-md-6 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`}>
                                  <div className="portfolio-style-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setActiveProject(project)}>
                                      <div className="thumbnail mb-30">
                                          <a href="#">
                                              <img src={project.image} alt={project.title} />
                                          </a>
                                      </div>
                                      <div className="content">
                                          <a href="#" aria-label={project.displayCategory} className="tmp-card-cat mb-4 d-block">{project.displayCategory}</a>
                                          <h3 className="h4 tmp-card-title mb-0">
                                              <a className="invers-hover-link" href="#" aria-label={project.title}>{project.title} <i className="fa-light fa-arrow-up-right"></i></a>
                                          </h3>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Photoshop */}
                  <div className="tab-pane fade" id="photoshop" role="tabpanel" aria-labelledby="photoshop">
                      <div className="row gx-5 gy-60">
                          {portfolioData.filter(p => p.categories.includes('photoshop')).map((project, idx) => (
                              <div key={project.id || idx} className={`col-lg-6 col-md-6 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`}>
                                  <div className="portfolio-style-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setActiveProject(project)}>
                                      <div className="thumbnail mb-30">
                                          <a href="#">
                                              <img src={project.image} alt={project.title} />
                                          </a>
                                      </div>
                                      <div className="content">
                                          <a href="#" aria-label={project.displayCategory} className="tmp-card-cat mb-4 d-block">{project.displayCategory}</a>
                                          <h3 className="h4 tmp-card-title mb-0">
                                              <a className="invers-hover-link" href="#" aria-label={project.title}>{project.title} <i className="fa-light fa-arrow-up-right"></i></a>
                                          </h3>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* React js */}
                  <div className="tab-pane fade" id="react" role="tabpanel" aria-labelledby="react">
                      <div className="row gx-5 gy-60">
                          {portfolioData.filter(p => p.categories.includes('react')).map((project, idx) => (
                              <div key={project.id || idx} className={`col-lg-6 col-md-6 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`}>
                                  <div className="portfolio-style-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setActiveProject(project)}>
                                      <div className="thumbnail mb-30">
                                          <a href="#">
                                              <img src={project.image} alt={project.title} />
                                          </a>
                                      </div>
                                      <div className="content">
                                          <a href="#" aria-label={project.displayCategory} className="tmp-card-cat mb-4 d-block">{project.displayCategory}</a>
                                          <h3 className="h4 tmp-card-title mb-0">
                                              <a className="invers-hover-link" href="#" aria-label={project.title}>{project.title} <i className="fa-light fa-arrow-up-right"></i></a>
                                          </h3>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>
      )}
      {/* work section end */}

      {/* skill section */}
      {hasSkillsSection && (
      <div className="tmp-section tmp-section-gapBottom" id="skill">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="tmp-section-content mb--60 text-center">
                          <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <div className="border-left"></div>
                              <div className="border-right"></div>
                              <h2 className="h6 subtitle">Technical Skills</h2>
                          </div>
                          <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">
                              Technical Skills
                          </h2>
                      </div>
                  </div>
              </div>
              {hasSkillsList && (
              <div className="row mb--60 g-5">
                  {skillsData.map((skill, idx) => (
                      <div key={idx} className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`}>
                          <div className="tmp-skill-card text-center">
                              <div className="tmp-skill-card-box mb-4 text-center">
                                  <div className="tmp-skill-shape">
                                      <div className="tmp-siback">
                                          <img src="assets/images/technician/skill/skill-shape.svg" alt="" />
                                      </div>
                                      <div className="tmp-shover"></div>
                                  </div>
                                  <div className="tmp-skill-card-icon mb-4">
                                      <img src={skill.icon} alt={skill.name} />
                                  </div>
                                  <h3 className="h5 tmp-skill-card-counter text-white mb-0 fw-bold">{skill.percentage}</h3>
                              </div>
                              <h4 className="h6 tmp-skill-card-title">{skill.name}</h4>
                          </div>
                      </div>
                  ))}
              </div>
              )}
              {(hasEducation || hasExperience) && (
              <div className="row g-5 invers-arrange-container">
                  {hasEducation && (
                  <div className={`col-lg-${hasExperience ? "6" : "12"} invers-arrange-item`}>
                      <div className="tmp-skill-full">
                          <div className="tmp-skill-shape"></div>
                          <div className="tmp-skill-full-inner">
                              <h3 className="tmp-card-title">Educational Experience</h3>
                              {resumeData.education.map((edu, idx) => (
                                  <div key={idx} className="tmp-skill-single position-relative">
                                      <span className="tmp-skill-year">{edu.year}</span>
                                      <h4 className="h5 tmp-skill-name fw-bold">{edu.name}</h4>
                                      <p className="tmp-skill-program text-small mb-0">{edu.program}</p>
                                      {edu.grade && <span className="tmp-skill-grade">{edu.grade}</span>}
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
                  )}
                  {hasExperience && (
                  <div className={`col-lg-${hasEducation ? "6" : "12"} invers-arrange-item`}>
                      <div className="tmp-skill-full">
                          <div className="tmp-skill-shape"></div>
                          <div className="tmp-skill-full-inner">
                              <h3 className="tmp-card-title">Job Experience</h3>
                              {resumeData.experience.map((exp, idx) => (
                                  <div key={idx} className="tmp-skill-single position-relative">
                                      <span className="tmp-skill-year">{exp.year}</span>
                                      <h4 className="h5 tmp-skill-name fw-bold">{exp.name}</h4>
                                      <p className="tmp-skill-program text-small mb-0">{exp.program}</p>
                                      {exp.grade && <span className="tmp-skill-grade">{exp.grade}</span>}
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
                  )}
              </div>
              )}
          </div>
      </div>
      )}
      {/* skill section end */}

      {/* testimonial section */}
      {hasTestimonials && (
      <section className="tmp-section" id="testimonial">
          <div className="ps-100 ps_sm--20">
              <div className="container-fluid">
                  <div className="row justify-content-center">
                      <div className="col-lg-12">
                          <div className="tmp-section-content mb--60 text-center">
                              <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                                  <div className="border-left"></div>
                                  <div className="border-right"></div>
                                  <h2 className="h6 subtitle">My Clients Review</h2>
                              </div>
                              <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">
                                  My Clients Review
                              </h2>
                          </div>
                      </div>
                  </div>
                  <div className="row g-5">
                      <div className="col-lg-12 col-xl-6 col-xxl-4 col-md-12">
                          <div className="testimonial-modern-left-card">
                              <div className="image">
                                  <figure>
                                      <img src={testimonialsData.summary?.image} width="515" alt="" />
                                  </figure>
                              </div>
                              <div className="content">
                                  <h3 className="h5 rating">{testimonialsData.summary?.rating}</h3>
                                  <p className="desc" dangerouslySetInnerHTML={{ __html: (testimonialsData.summary?.description || '').replace('\n', '<br />') }} />
                                  <div className="tmp-slider-control mt-4">
                                      <div className="tmp-prev">
                                          <i className="fa-light fa-chevron-left"></i>
                                      </div>
                                      <div className="tmp-next">
                                          <i className="fa-light fa-chevron-right"></i>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12 col-xl-6 col-xxl-8">
                          <div className="modern-testimonial-activation overflow-hidden">
                              <div className="swiper-wrapper">
                                  {testimonialsData.reviews.map((review, idx) => (
                                      <div key={idx} className="swiper-slide">
                                          <div className="testimonial-style-3">
                                              <div className="quote">
                                                  <i className="fa-solid fa-quote-left"></i>
                                              </div>
                                              <div className="rating-wrapper">
                                                  <span className="rating-count">{review.rating}</span>
                                                  <span className="rating-star">
                                                      {Array.from({ length: 5 }).map((_, i) => (
                                                          <i key={i} className="fa-solid fa-star"></i>
                                                      ))}
                                                  </span>
                                              </div>
                                              <p className="description">
                                                  {review.quote}
                                              </p>
                                              <div className="tmp-testimonial-author">
                                                  <div className="author-image">
                                                      <figure>
                                                          <img src={review.author?.image} alt="" />
                                                      </figure>
                                                  </div>
                                                  <div className="author-content">
                                                      <h4 className="h6 author-name fw-bold">{review.author?.name}</h4>
                                                      <span className="author-job">{review.author?.designation}</span>
                                                  </div>
                                              </div>
                                              <div className="tmp-right-shadow"></div>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* client section */}
          {Array.isArray(testimonialsData.brands) && testimonialsData.brands.length > 0 && (
          <div className="tmp-section pt--60">
              <div className="container">
                  <div className="row g-5">
                      {testimonialsData.brands.map((brand, idx) => (
                          <div key={idx} className={`col-xl-3 col-lg-3 col-md-4 col-sm-6 tmp-scroll-trigger tmp-fade-in animation-order-${idx + 1}`}>
                              <div className="tmp-client-card text-center">
                                  <a href="/#" aria-label="client">
                                      <img src={brand} alt="" />
                                  </a>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
          )}
          {/* client section end */}
      </section>
      )}
      {/* testimonial section end */}

      {/* blog section */}
      {hasBlogs && (
      <section className="tmp-section tmp-section-gap" id="blog">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="tmp-section-content mb--60 text-center">
                          <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <div className="border-left"></div>
                              <div className="border-right"></div>
                              <h2 className="h6 subtitle">My Recent Blog</h2>
                          </div>
                          <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">
                              My Recent Blog
                          </h2>
                      </div>
                  </div>
              </div>
              <div className="row gx-5 gy-60 invers-arrange-container">
                  {blogsData.map((blog, idx) => (
                      <div key={idx} className="col-lg-6 col-md-6 invers-arrange-item">
                          <div className="blog-style-3 inv-hover-item" data-bs-toggle="modal" data-bs-target="#blogModal" onClick={() => setActiveBlog(blog)}>
                              <div className="thumbnail">
                                  <a href="#" className="inv-hover-img" data-displacement="/assets/images/main/fluid.webp" data-intensity="0.2" data-speedin="1" data-speedout="1">
                                      <img src={blog.image} alt="blog Images" />
                                  </a>
                              </div>
                              <div className="content">
                                  <div className="d-flex flex-wrap justify-content-between align-items-center mb-5 gap-4">
                                      <div className="d-flex gap-3">
                                          {Array.isArray(blog.categories) && blog.categories.map((cat, catIdx) => (
                                              <a key={catIdx} href="#" aria-label={cat} className={`tmp-badge-cat ${catIdx === 1 ? 'cat-two' : ''}`}>{cat}</a>
                                          ))}
                                      </div>
                                      <div className="content">
                                          <span className="tmp-blog-time"><i className="fa-light fa-clock"></i> {blog.readTime}</span>
                                      </div>
                                  </div>
                                  <h3 className="title">
                                      <a className="invers-hover-link" href="#" aria-label={blog.title}>{blog.title} <i className="fa-light fa-arrow-up-right"></i></a>
                                  </h3>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      )}
      {/* blog section end */}

      {/* contact section */}
      <section className="tmp-section tmp-section-gapBottom" id="contact">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                      <div className="tmp-section-content mb--60 text-center">
                          <div className="tmp-fsb tmp-scroll-trigger tmp-fade-in animation-order-1">
                              <div className="border-left"></div>
                              <div className="border-right"></div>
                              <h2 className="h6 subtitle">Contact with me</h2>
                          </div>
                          <h2 className="tmp-section-title fw-bold mt-4 mb-4 tmp-scroll-trigger tmp-fade-in animation-order-2">
                              Contact with me
                          </h2>
                      </div>
                  </div>
              </div>
              <div className="row g-5">
                  <div className="col-lg-7 col-xl-8 tmp-scroll-trigger tmp-fade-in animation-order-2">
                      <div className="contact-form-style-1 variation-3">
                          <div className="tmp-contact-form">
                              <h3 className="tmp-contact-title fw-bold mb-5">Send me a message</h3>
                              <div className="tmp-contact-form-shape"></div>
                              <div id="form-messages" className="error"></div>
                              <form id="contact-form" className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                  <div className="row">
                                      <div className="col-lg-6 mb--35">
                                          <div className="form-group">
                                              <label htmlFor="contact-name" className="visually-hidden">Your Name</label>
                                              <input type="text" name="name" id="contact-name" className="form-control" placeholder="Your Name" aria-label="Your Name" required />
                                          </div>
                                      </div>
                                      <div className="col-lg-6 mb--35">
                                          <div className="form-group">
                                              <label htmlFor="phone" className="visually-hidden">Your Phone</label>
                                              <input type="tel" id="phone" className="form-control" placeholder="Your Phone" aria-label="Your Phone" required />
                                          </div>
                                      </div>
                                      <div className="col-lg-12 mb--35">
                                          <div className="form-group">
                                              <label htmlFor="contact-email" className="visually-hidden">Your Email</label>
                                              <input type="email" id="contact-email" name="email" className="form-control" placeholder="Your Email" aria-label="Your Email" required />
                                          </div>
                                      </div>
                                      <div className="col-lg-12 mb--35">
                                          <div className="form-group">
                                              <label htmlFor="subject" className="visually-hidden">Subject</label>
                                              <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject" aria-label="Subject" required />
                                          </div>
                                      </div>
                                      <div className="col-lg-12 mb--40">
                                          <div className="form-group">
                                              <label htmlFor="contact-message" className="visually-hidden">Your Message</label>
                                              <textarea name="message" id="contact-message" rows="10" className="form-control" placeholder="Your Message" aria-label="Your Message" required></textarea>
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
                  <div className="col-lg-5 col-xl-4">
                      <div className="tmp-contact-info tmp-scroll-trigger tmp-fade-in animation-order-2">
                          <div className="single-contact-info">
                              <div className="tmp-icon mb-4">
                                  <i className="fa-solid fa-headset"></i>
                              </div>
                              <h4 className="h5 tmp-contact-info-title fw-bold mb-3">Get Support</h4>
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
                                  <i className="fa-solid fa-headset"></i>
                              </div>
                              <h4 className="h5 tmp-contact-info-title fw-bold mb-3">Communication With Mail</h4>
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
                                  <i className="fa-solid fa-headset"></i>
                              </div>
                              <h4 className="h5 tmp-contact-info-title fw-bold mb-3">Want to chat now</h4>
                              <p className="text-small">Chat with me its more experts of find out more and more informative way to learn about me.</p>
                              <button className="tmp-btn btn-sm mt--15 icon-hover radius-round">
                                  <span className="btn-text">Open Chat With Me</span>
                                  <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* contact section end */}

      {/* footer section */}
      <section className="footer-developer-style-1 pb--70">
          <div className="container-developer">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="footer-style-box">
                          <div className="container">
                              <div className="row">
                                  <div className="col-lg-12">
                                      <div className="top-footer-area">
                                          <div className="left-area">
                                              <h3 className="title">Subscribe Newsletters</h3>
                                          </div>
                                          <form className="right-area" onSubmit={(e) => e.preventDefault()}>
                                              <input type="text" placeholder="Enter your email" required />
                                              <button type="submit" className="like-button tmp-btn btn-md hover-icon-reverse radius-round">
                                                  <span className="icon-reverse-wrapper">
                                                  <span className="btn-text">Subscribe Me</span>
                                                  <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                  <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                  </span>
                                              </button>
                                          </form>
                                      </div>
                                      <div className="footer-bottom-area">
                                          <div className="top-nav-social-area-wrapper">
                                              <nav className="left-area">
                                                  <ul>
                                                      <li><a className="hover-moving-primary" href="/#">About us</a></li>
                                                      <li><a className="hover-moving-primary" href="/#">Discover</a></li>
                                                      <li><a className="hover-moving-primary" href="/#">Explore</a></li>
                                                      <li><a className="hover-moving-primary" href="/#">Books</a></li>
                                                  </ul>
                                              </nav>
                                              <div className="right-social-footer">
                                                  <ul>
                                                      <li><a href="/#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                                      <li><a href="/#"><i className="fa-brands fa-twitter"></i></a></li>
                                                      <li><a href="/#"><i className="fa-brands fa-tiktok"></i></a></li>
                                                      <li><a href="/#"><i className="fa-brands fa-youtube"></i></a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div className="bottom-footer-area">
                                              <p>© <span id="year" suppressHydrationWarning={true}>{new Date().getFullYear()}</span> <a className="hover-moving-primary" href="/#">{heroData?.name}</a> All rights reserved.</p>
                                              <div className="logo">
                                                  <a href="/">
                                                      <img className="logo-dark" src="/assets/images/logo/main-logo.svg" alt="logo" />
                                                      <img className="logo-white" src="/assets/images/logo/main-logo.svg" alt="logo" />
                                                  </a>
                                              </div>
                                              <div className="small-nav">
                                                  <ul>
                                                      <li><a className="hover-moving-primary" href="/#">Terms of Service</a></li>
                                                      <li><a className="hover-moving-primary" href="/#">Privacy Policy</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* footer section end */}

      {/* offcanvase */}
      <div className="tech-offcanvase tmp-offcanvas if-developer offcanvas offcanvas-start" id="offcanvaseMenu">
          <div className="offcanvas-header p-0">
              <div className="tmp-header-logo">
                  <a href="/">
                      <img className="tmp-logo-class" width="100" height="40" src="assets/images/logo/main-logo.svg" alt="logo" />
                  </a>
              </div>
              <button type="button" className="tmp-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa fa-xmark"></i></button>
          </div>
          <p className="tmp-offcanvas-desc">
              {heroData?.description}
          </p>
          <div className="hr my-3"></div>
          <div className="offcanvas-body p-0">
              <div className="offcanvas-nav">
                  <nav className="navigation-menu onepagenav">
                      <ul>
                          <li className="navigation-menu--item">
                              <a href="#home" className="navigation-menu--item-link">Home</a>
                          </li>
                          {hasServices && (
                              <li className="navigation-menu--item">
                                  <a href="#service" className="navigation-menu--item-link">Services</a>
                              </li>
                          )}
                          {hasPortfolio && (
                              <li className="navigation-menu--item">
                                  <a href="#portfolio" className="navigation-menu--item-link">Portfolio</a>
                              </li>
                          )}
                          {hasSkillsSection && (
                              <li className="navigation-menu--item">
                                  <a href="#skill" className="navigation-menu--item-link">My Skill</a>
                              </li>
                          )}
                          {hasTestimonials && (
                              <li className="navigation-menu--item">
                                  <a href="#testimonial" className="navigation-menu--item-link">Testimonial</a>
                              </li>
                          )}
                          {hasBlogs && (
                              <li className="navigation-menu--item">
                                  <a href="#blog" className="navigation-menu--item-link">blog</a>
                              </li>
                          )}
                          <li className="navigation-menu--item">
                              <a href="#contact" className="navigation-menu--item-link">Contact</a>
                          </li>
                      </ul>
                  </nav>
              </div>
              <div className="tmp-header-hiring mt-5">
                  <a href="/#" className="tmp-header-hiring-link w-100 text-center">Lets Talk </a>
                  <a href="/#" className="tmp-header-hiring-link w-100 text-center">Buy Now </a>
              </div>
          </div>
      </div>
      {/* offcanvase end */}

      {/* Portfolio Detail Modal */}
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
                                      <h3 className="mb--30">
                                          {activeProject.title}
                                      </h3>
                                      <p className="mb--20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, numquam omnis itaque officia magni nisi ullam minima, sed molestiae cum facilis ipsam voluptatum expedita esse odit vero? Porro, aliquam voluptate.</p>
                                      <p>Fuga tenetur repellendus ipsam corporis dicta nesciunt similique deserunt alias inventore tempore, pariatur odit aut, quasi delectus? Nam repellendus molestias possimus, totam blanditiis mollitia, consequatur, rem ratione voluptatum perspiciatis maxime nulla ut aliquid officia fugit consequuntur quia libero magnam! Obcaecati laudantium voluptatibus itaque voluptatem omnis. Numquam eveniet voluptas quibusdam blanditiis, quia eaque, molestiae libero, laboriosam tempora provident neque! Eligendi nostrum aut reprehenderit! Quod quo, repellat libero cum earum dolor illum dolorem, reiciendis expedita, ea itaque sunt numquam sit?</p>
                                      <div className="button-group-modal-bottom mt--40">
                                          <div className="button-group service-more-btn">
                                              <a className="tmp-btn icon-hover radius-round btn-sm" href={activeProject.previewLink || "#contact"} target="_blank">
                                                  <span className="btn-text">VIEW PROJECT</span>
                                                  <span className="btn-icon"><i className="fa-light fa-arrow-right"></i></span>
                                              </a>
                                          </div>
                                          <div className="social-share-with-text">
                                              <span>Share :</span>
                                              <div className="tmp-social-default sm-size justify-content-start">
                                                  {socials.map((social, idx) => (
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

      {/* Blog Details Modal */}
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
                              <p>
                                  In a world increasingly driven by innovation, cutting-edge technology is not just a buzzword—it's a
                                  catalyst for change, shaping the way we live, work, and learn. As we navigate the 21st century, the
                                  intersection of technology and education is becoming increasingly pivotal, influencing the methods,
                                  speed, and effectiveness of learning. This blog explores some of the most impactful technologies
                                  transforming education and how they are shaping the future of learning and, ultimately, our society.
                              </p>
                              <h4 className="fw-bold mb-4 mt--25">1. Artificial Intelligence: Personalizing Education</h4>
                              <p>
                                  Artificial Intelligence (AI) is revolutionizing the educational landscape by enabling personalized
                                  learning experiences. AI-powered systems can adapt to the individual learning styles and paces of
                                  students, providing customized resources and feedback. Platforms like Duolingo and Khan Academy
                                  already use AI to tailor lessons to the needs of each learner, ensuring that students engage with
                                  material that is neither too easy nor too difficult.
                                  <span className="d-block fw-bold mb-3 mt-4">Impact on the Future:</span>
                                  AI has the potential to democratize education by providing access to quality resources for students
                                  around the world, regardless of geographical location. As AI continues to evolve, we can expect more
                                  sophisticated systems that offer deeper insights into a student’s strengths and weaknesses, enabling
                                  educators to better support their learning journeys.
                              </p>
                          </>
                      )}
                      
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
                                      <input type="url" name="phone" className="form-control" required placeholder="Your Website" />
                                  </div>
                                  <div className="form-group">
                                      <textarea name="msg" className="form-control" required id="msg" placeholder="Enter Your Message"></textarea>
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
                  </div>
              </div>
          </div>
      </div>
      {/* Modal End */}

      {/* Service Details Modal */}
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
                                          <img className="w-100" src="assets/images/services/service-detials-popup.webp" alt="slide" />
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-12">
                                  <div className="text-content-pd">
                                      <span className="category">Development</span>
                                      <h3 className="mb--30">
                                          {activeService.title}
                                      </h3>
                                      <p className="mb--20">{activeService.description}</p>
                                      <div className="service-details-list-wrapper">
                                          <div className="single-details-method">
                                              <h4 className="title">Process of method</h4>
                                              <ul className="single-list">
                                                  <li>Yet this above sewed flirted opened ouch</li>
                                                  <li>Goldfinch realistic sporadic ingenuous</li>
                                                  <li>Abominable this abidin far successfully then like piquan</li>
                                                  <li>Risus commodo viverra</li>
                                                  <li>Sit amet, consectetur adipiscing</li>
                                              </ul>
                                          </div>
                                      </div>
                                      <p>Fuga tenetur repellendus ipsam corporis dicta nesciunt similique deserunt alias inventore tempore, pariatur odit aut, quasi delectus? Nam repellendus molestias possimus, totam blanditiis mollitia, consequatur, rem ratione voluptatum perspiciatis maxime nulla ut aliquid officia fugit consequuntur quia libero magnam! Obcaecati laudantium voluptatibus itaque voluptatem omnis. Numquam eveniet voluptas quibusdam blanditiis, quia eaque, molestiae libero.</p>
                                      <div className="button-group-modal-bottom mt--40">
                                          <div className="button-group service-more-btn">
                                              <a className="tmp-btn icon-hover radius-round btn-sm" href={activeService.previewLink || "#contact"}>
                                                  <span className="btn-text">GET STARTED</span>
                                                  <span className="btn-icon"><i className="fa-light fa-arrow-right"></i></span>
                                              </a>
                                          </div>
                                          <div className="social-share-with-text">
                                              <span>Share :</span>
                                              <div className="tmp-social-default sm-size justify-content-start">
                                                  {socials.map((social, idx) => (
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

      <div className="tmp-progress-parent">
          <svg className="tmp-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
      </div>

      <div className="invers-call-area-sticky like-button">
          <a href="tel:+8801234567890">
              <i className="fa-regular fa-phone"></i>
          </a>
      </div>
    </>
  );
}
