import './components/assets/styles/style.css'
import './components/assets/styles/bootstrap.css'
import './components/assets/styles/responsive.css'
// import '../components/assets/images/'

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
                                <a class="nav-link" href="about.html"> about </a>
                                </li>

                                <li class="nav-item">
                                <a class="nav-link" href="practice.html"> PRACTICE AREAS </a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="blog.html"> Blog </a>
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
                <img src="images/lawyer.png" alt=""/>
                </div>
            <div class="hero_detail-box">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="hero_detail-container">
                    <h1>
                        My Name Is Josh Du <br />
                        & I’m An Expert <br />
                        In Civil Law
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua
                    </p>

                    </div>
                </div>
                <div class="carousel-item">
                    <div class="hero_detail-container">
                    <h1>
                        My Name Is Josh Du <br/>
                        & I’m An Expert <br/>
                        In Civil Law
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua
                    </p>

                    </div>
                </div>
                <div class="carousel-item">
                    <div class="hero_detail-container">
                    <h1>
                        My Name Is Josh Du <br/>
                        & I’m An Expert <br/>
                        In Civil Law
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua
                    </p>

                    </div>
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">

                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">

                <span class="sr-only">Next</span>
                </a>
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
                About Me
                </h3>
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                the middle of text.There are many variations of passages of Lorem Ipsum available, but the majority have
                sufftext.
                </p>
            </div>
            </div>
            <div class="col-md-6">
            <div class="about_img-box">
            <img src={"./about.png"} alt=""/>
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
    <p class="heading-text">
        SKILLS
    </p>
    <h3 class="text-uppercase">
        SKILLS
    </h3>
        </div>
        <div class="practice_container">
        <div class="practice_box">
            <div class="practice_img-box">
    <img src="images/lawyer_icon1.png" alt=""/>
            </div>
            <h4>
                REACT

            </h4>
        </div>
        <div class="practice_box">
            <div class="practice_img-box">
    <img src="images/lawyer_icon2.png" alt=""/>
            </div>
            <h4>
                NODEJS
    
            </h4>
            </div>
            <div class="practice_box">
                <div class="practice_img-box">
        <img src="images/lawyer_icon3.png" alt=""/>
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
                    HTML

        
                </h4>
            </div>
            <div class="practice_box">
                <div class="practice_img-box">
        <img src="images/lawyer_icon5.png" alt=""/>
                </div>
                <h4>
                    HTML

        
                </h4>
            </div>
            <div class="practice_box">
                <div class="practice_img-box">
        <img src="images/lawyer_icon6.png" alt=""/>
                </div>
                <h4>
                    Sexual offences

        
                </h4>
                </div>
        </div> 
        <div class="practice_detail">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            </p>

        </div>

    </div>
    </section>


{/* end practice section */}

{/* welcome section */}


    <section class="welcome_section position-relative">
    <div class="container ">
    <div class="row">
        <div class="col-lg-6">
    <div class="welcome_container">
        <h3>
            WELCOME TO TRUST

        </h3>
        <div>
            <h4>
                Story & History
            </h4>
            <p>
                Trust started as a sole practitioner providing services to the area community. Our Office has now grown to five lawyers and provides expert legal representation.
            </p>
        </div>
        <div>
            <h4>
                Values  & Philosophy
            </h4>
            <p>
                Trust started as a sole practitioner providing services to the area community. Our Office has now grown to five lawyers and provides expert legal representation.
            </p>
            </div>
            <div class="d-flex justify-content-center justify-content-sm-start">
                <a href="" class="sub_call_to-btn ">
                <span>
                    Read More
                </span>
                <img src="images/right-arrow.png" alt=""/>
                </a>
            </div>
    </div>
        </div>
    </div>
    </div>
    </section>

{/* end welcome section */}

{/* contact section */}
{/* contact section */}

    <section class="contact_section layout_padding">

        <div class="container">
        <div class="d-flex justify-content-center d-md-block">
            <h2>
            Contact Us
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
            JD
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
        Copyright &copy; 2019 All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
        </p>
    </section>
{/* footer section */}

    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
{/* progreesbar script */}

    



  
</>
  
};
