
export default function Contact() {
    return <>
    
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
    </>    
}
