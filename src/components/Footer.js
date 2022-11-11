import React from 'react';
function Footer() {
    return (
        <footer>
            <div className="footer-top-wrap">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Know Us</h4>
                                <div className="fw-link">
                                    <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="contact.html">Press Coverage</a></li>
                                        <li><a href="contact.html">Business Partnership</a></li>
                                        <li><a href="contact.html">Careers</a></li>
                                        <li><a href="contact.html">Sehat Ke Sathi</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Our Policies</h4>
                                <div className="fw-link">
                                    <ul>
                                        <li><a href="about-us.html">Privacy Policy</a></li>
                                        <li><a href="contact.html">Terms and Conditions</a></li>
                                        <li><a href="contact.html">Editorial Policy</a></li>
                                        <li><a href="contact.html">Return Policy</a></li>
                                        <li><a href="contact.html">IP Policy</a></li>
                                        <li><a href="contact.html">Grievance Redressal Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                            <div className="footer-widget">
                                <h4 className="fw-title">Our Services</h4>
                                <div className="fw-link">
                                    <ul>
                                        <li><a href="shop-details.html">Order Medicines</a></li>
                                        <li><a href="contact.html">Book Lab Tests</a></li>
                                        <li><a href="contact.html">Consult a Doctor</a></li>
                                        <li><a href="contact.html">Ayurveda Articles</a></li>
                                        <li><a href="contact.html">English Articles</a></li>
                                        <li><a href="contact.html">1mg Care Plan</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="footer-widget">
                                <h4 className="fw-title">Subscribe Our Newsletter</h4>
                                <div className="f-newsletter">
                                    <p>Get a free subscription to our health &amp; fitness</p>
                                    <form action="#" className="newsletter-form">
                                        <input type="text" placeholder="Enter Your Email Address" />
                                        <button><i className="fas fa-rocket" /></button>
                                    </form>
                                </div>
                                <div className="fw-download-btn">
                                    <a href="#"><img src="img/icon/download_btn01.png" alt="" /></a>
                                    <a href="#"><img src="img/icon/download_btn02.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-counter-wrap">
                    <div className="row">
                        <div className="col-12">
                            <div className="fcw-title text-center mb-45">
                                <h4 className="title">world LARGEST HEALTHCARE PLATFORM</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-3 col-sm-4">
                            <div className="counter-item mb-30">
                                <h2 className="count"><span className="odometer" data-count={160} />M+</h2>
                                <p>Visitors</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4">
                            <div className="counter-item mb-30">
                                <h2 className="count"><span className="odometer" data-count={27} />M+</h2>
                                <p>Orders Delivered</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4">
                            <div className="counter-item mb-30">
                                <h2 className="count"><span className="odometer" data-count={190} />K+</h2>
                                <p>Cities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="copyright-text">
                                <p>Copyright © 20221 Yed. All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="payment-method-img text-center text-md-right">
                                <img src="img/images/card.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;