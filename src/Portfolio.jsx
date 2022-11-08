import './components/assets/styles/style.css'
import './components/assets/styles/bootstrap.css'
import './components/assets/styles/responsive.css'
// import '/components/assets/images/lawyer_icon1.png'

export default function Portfolio() {
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
{/* end header section */}


{/* about section */}
    <section class="about_section layout_padding">
        <div class="container">
        <div class="row">
            <div class="col-md-6">
            <div class="about_detail-box">
                <h3 class="text-uppercase">
                About
                </h3>
                <p>
                Hi! I'm Quyana. You can call me Q. Computer Science used to scare me. Now I love it and I want to design software and app solutions for you. Keep reading to see my skills and a few of my projects. If you like what you see, contact me. I'd love to collaborate!
                </p>
            </div>
            </div>
            <div class="col-md-6">
                <div class="about_img-box">
                <img src="images/about.png" alt=""/>
                </div>
            </div>
        </div>
        </div>
    </section>

{/* end about section */}

{/* practice section */}
    <section class="practice_section layout_padding">
    <div class="container">
        <div class="d-flex flex-column align-items-center">
    <h3 class="text-uppercase">
        Developer Skills
    </h3>
        </div>
        <div class="practice_container">
        <div class="practice_box">
            <div class="practice_img-box">
    <img src={'/components/assets/images/lawyer_icon1'} alt=""/>
            </div>
                <h4>
                    React
                </h4>
        </div>
        <div class="practice_box">
            <div class="practice_img-box">
    <img src="images/lawyer_icon2.png" alt=""/>
            </div>
                <h4>
                    Nodejs
                </h4>
            </div>
            <div class="practice_box">
                <div class="practice_img-box">
        <img src="images/lawyer_icon3.png" alt=""/>
            </div>
                <h4>
                    Express        
                </h4>
            </div>
            <div class="practice_box">
                <div class="practice_img-box">
        <img src="images/lawyer_icon4.png" alt=""/>
            </div>
                <h4>
                   HTML
                </h4>
            </div>
            <div class="practice_box">
                <div class="practice_img-box">
        <img src="images/lawyer_icon4.png" alt=""/>
            </div>
                <h4>
                    JavaScript
                </h4>
            </div>
            <div class="practice_box">
                <div class="practice_img-box">
        <img src="images/lawyer_icon4.png" alt=""/>
            </div>
                <h4>
                    CSS
                </h4>
            </div>
            <div class="practice_box">
                <div class="practice_img-box">
        <img src="images/lawyer_icon4.png" alt=""/>
            </div>
                <h4>
                    Postgres
                </h4>
            </div>
            <div class="practice_box">
                <div class="practice_img-box">
        <img src="images/lawyer_icon4.png" alt=""/>
            </div>
                <h4>
                    Beekeeper
                </h4>
            </div>
            <div class="practice_box">
                <div class="practice_img-box">
        <img src="images/lawyer_icon4.png" alt=""/>
            </div>
                <h4>
                    CSS
                </h4>
            </div>
        </div> 
    </div>
    </section>


{/* end practice section */}


{/* contact section */}
{/* contact section */}

    <section class="contact_section layout_padding">

        <div class="container">
        <div class="d-flex justify-content-center d-md-block">
            <h2>
            Contact Me
            </h2>
        </div>
        <div class="row">
            <div class="col-md-6">
            <form action="">
                <div class="contact_form-container">
                <div>
                    <div>
                    <input type="text" placeholder="Name"/>
                    </div>
                    <div>
                    <input type="email" placeholder="Email"/>
                    </div>
                    <div>
                    <input type="text" placeholder="Phone Number"/>
                    </div>
                    <div class="mt-5">
                    <input type="text" placeholder="Message"/>
                    </div>
                    <div class="mt-5 d-flex justify-content-center justify-content-sm-start">
                    <button type="submit">
                        Send
                    </button>
                    </div>
                </div>

                </div>

            </form>
            </div>
            <div class="col-md-6">
            <div class="contact_img-box">
                <img src="images/contact.png" alt=""/>
            </div>
            </div>
        </div>
        </div>
    </section>
{/* end contact section */}
{/* info section */}
    <section class="info_section">
        <div class="container ">
        <div class="row custom_border-btm pb-4">
            <div class="col-md-4 info_logo">
            <h2>
            QB
            </h2>
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or 
            </p>
            </div>
            <div class="col-md-4 info_address">
            <h5>
                Address
            </h5>
            <p>
                passages of Lorem Ipsum available, but the majority have
            </p>
            <p>
                (+71) 1234567890
            </p>
            <p>
                demo@gmail.com
            </p>
            </div>
            <div class="col-md-4 info_news">
            <h5>
                Newsletter
            </h5>
            <form action="">
                <div>
                <input type="email" placeholder="Enter your email"/>
                </div>
                <div>
                <button type="submit">
                    Subscribe
                </button>
                </div>
            </form>
            </div>

        </div>
        
        <div>
            <div class="info_social">
            <div>
            <a href="">
                <img src="images/fb.png" alt=""/>
            </a>
            </div>
            <div>
            <a href="">
                <img src="images/twitter.png" alt=""/>
            </a>
            </div>
            <div>
            <a href="">
                <img src="images/linkedin.png" alt=""/>
            </a>
            </div>
            <div>
                <a href="">
                    <img src="images/insta.png" alt=""/>
                </a>
            </div>
            </div>
        </div>
        </div>
    </section>
{/* endsss info section */}

{/* end contact section */}

{/* footer section */}
    <section class="container-fluid footer_section">
        <p>
        Copyright &copy; 2022 All Rights Reserved By Quyana Barrow
        </p>
    </section>
{/* footer section */}

    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
{/* progreesbar script */}

    



  
</>
  
}
