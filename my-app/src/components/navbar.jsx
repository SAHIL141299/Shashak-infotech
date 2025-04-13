import React from 'react'

const navbar = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" className="logo d-flex align-items-center me-auto">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        {/* <!-- <img src="assets/img/logo.webp" alt=""> --> */}
        <h1 className="sitename">Shashak</h1>
         {/* <!-- <img src='' alt="Shashak-Infotech"/> --> */}
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          {/* <!-- <li><a href="#team">Team</a></li> --> */}
          {/* <!-- <li><a href="#pricing">Pricing</a></li> --> */}
          <li><a href="blog.html">Blog</a></li>
      
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      {/* <!-- <a className="btn-getstarted" href="#about">Get Started</a> --> */}

    </div>
  </header>
  )
}

export default navbar
