

export default function Header() {
    return <>

      <div class="top_container">
  
          <header class="header_section">
              <div class="container-fluid">
                  <nav class="navbar navbar-expand-lg custom_nav-container ">
                      <a class="navbar-brand" href="index.html">
                          QB
                      </a>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                              <ul class="navbar-nav  ">
                                  <li class="nav-item active">
                                  <a class="nav-link" href="index.html"> Home <span class="sr-only">(current)</span></a>
                                  </li>
                                  <li class="nav-item ">
                                  <a class="nav-link" href="about.html"> About </a>
                                  </li>
                                  <li class="nav-item">
                                  <a class="nav-link" href="practice.html"> Skills </a>
                                  </li>
                                  <li class="nav-item">
                                  <a class="nav-link" href="portfolio.html"> Portfolio </a>
                                  </li>
                                  <li class="nav-item">
                                  <a class="nav-link" href="contact.html">Contact Us</a>
                                  </li>
                              </ul>
                              <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                  <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                              </form>    
                          </div>
                      </div>
                  </nav>
              </div>
          </header>
          
          <section class="hero_section position-relative">
              <div class="number-container d-none d-md-block">
                  <div class="number-box">
                      <span>
                          01
                      </span>
                      <hr/>
                      <span>
                          02
                      </span>
                  </div>
              </div>
              <div class="hero_section-container ">
                  <div class="hero_img-box">
                  <img src="./assets/images/lawyer.png" alt=""/>
                  </div>
                  <div class="hero_detail-box">
                      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                          <div class="carousel-inner">
                              <div class="carousel-item active">
                                  <div class="hero_detail-container">
                                      <h1>
                                          My Name Is Quyana <br />
                                          I’m a Software Engineer <br />
                                      </h1>
                                      <p>
                                          Welcome to my portfolio where I intend to dazzle you with my skills and projects.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>    
          </section>
      </div>
    </>
}
