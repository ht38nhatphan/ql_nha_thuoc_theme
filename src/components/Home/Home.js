
import React from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/animate.min.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/fontawesome-all.min.css';
import '../../assets/css/owl.carousel.min.css';
import '../../assets/css/nice-select.css';
import '../../assets/css/jquery-ui.css';
import '../../assets/css/odometer.css';
import '../../assets/css/aos.css';
import '../../assets/css/slick.css';
import '../../assets/css/default.css';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Slider from '../../components/Home/Slider';
import Features from '../../components/Home/Features';
import Discount from '../../components/Home/Discount';
import Dealweek from '../../components/Home/Deal-week';
import Shop from '../../components/Home/Shop';
import Testimonial from '../../components/Home/Testimonial';
import Blog from '../../components/Home/Blog';
import CoreFeatures from '../../components/Home/Core-features';


function Home() {
    return (
        <div>
            {/* Preloader-end */}
            {/* Scroll-top */}
            <button className="scroll-top scroll-to-target" data-target="html">
                <i className="fas fa-angle-up" />
            </button>
            {/* Scroll-top-end*/}
            {/* header-area */}
            <Header />
            {/* header-area-end */}
            {/* main-area */}
            <main>
                {/* slider-area */}
                <Slider />
                {/* slider-area-end*/}
                {/* Features-area */}
                <Features />
                {/* Features-area-end */}
                {/* categories-area */}

                {/* categories-area-end */}
                {/* discount-area */}
                <Discount />
                {/* discount-area-end */}
                {/* deal-week-area */}
                <Dealweek />
                {/* deal-week-area-end */}
                {/* shop-area */}
                <Shop />
                {/* shop-area-end */}
                {/* testimonial-area */}
                <Testimonial />
                {/* testimonial-area-end */}
                {/* blog-area */}
                <Blog />
                {/* blog-area-end */}
                {/* core-features-area */}
                <CoreFeatures />
                {/* core-features-area-end */}
            </main>
            {/* main-area-end */}
            {/* footer-area */}
            <Footer />
            {/* footer-area-end */}
        </div>
    );
}

export default Home;