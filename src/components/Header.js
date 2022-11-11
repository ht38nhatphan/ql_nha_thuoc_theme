
import React from 'react';

function Header() {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="header-top-area">
                                <div className="header-top-left-text">
                                    <p>We provides <span>Covid-19</span> medical accessories</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="header-top-right-text">
                                <ul>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="contact.html">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" className="menu-area">
                <div className="container">
                    <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
                    <div className="menu-wrap">
                        <nav className="menu-nav">
                            <div className="row align-items-center">
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            <li className="active"><a href="index-2.html">Home</a></li>
                                            <li className="menu-item-has-children"><a href="#">Pages</a>
                                                <ul className="sub-menu">
                                                    <li><a href="about-us.html">About Us</a></li>
                                                    <li><a href="blog.html">Our Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="contact.html">Contact Us</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="shop.html">Shop</a>
                                                <ul className="sub-menu">
                                                    <li><a href="shop.html">Our Shop</a></li>
                                                    <li><a href="shop-details.html">Shop Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="ask-doctor.html">ASK DOCTOR</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3">
                                    <div className="logo">
                                        <a href="index-2.html"><img src="img/logo/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-9">
                                    <div className="header-action">
                                        <ul>
                                            <li className="header-search">
                                                <form action="#">
                                                    <button><i className="fas fa-search" /></button>
                                                    <input type="text" placeholder="Search fre Medicines" />
                                                </form>
                                            </li>
                                            <li className="header-user d-none d-md-block">
                                                <a href="contact.html"><i className="far fa-user" /></a>
                                            </li>
                                            <li className="header-shop-cart d-none d-md-flex">
                                                <a href="#">
                                                    <img src="img/icon/shape-img.png" alt="" />
                                                    <span className="cart-count">0</span>
                                                </a>
                                                <span className="cart-price">$0.00</span>
                                                <ul className="minicart">
                                                    <li className="d-flex align-items-start">
                                                        <div className="cart-img">
                                                            <a href="#"><img src="img/products/cart_p01.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart-content">
                                                            <h4><a href="#">Exclusive Winter Jackets</a></h4>
                                                            <div className="cart-price">
                                                                <span className="new">$229.9</span>
                                                                <span><del>$229.9</del></span>
                                                            </div>
                                                        </div>
                                                        <div className="del-icon">
                                                            <a href="#"><i className="far fa-trash-alt" /></a>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex align-items-start">
                                                        <div className="cart-img">
                                                            <a href="#"><img src="img/products/cart_p02.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart-content">
                                                            <h4><a href="#">Winter Jackets For Women</a></h4>
                                                            <div className="cart-price">
                                                                <span className="new">$229.9</span>
                                                                <span><del>$229.9</del></span>
                                                            </div>
                                                        </div>
                                                        <div className="del-icon">
                                                            <a href="#"><i className="far fa-trash-alt" /></a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="total-price">
                                                            <span className="f-left">Total:</span>
                                                            <span className="f-right">$239.9</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="checkout-link">
                                                            <a href="#">Shopping Cart</a>
                                                            <a className="black-color" href="#">Checkout</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* Mobile Menu  */}
                    <div className="mobile-menu">
                        <nav className="menu-box">
                            <div className="close-btn"><i className="fas fa-times" /></div>
                            <div className="nav-logo"><a href="index-2.html"><img src="img/logo/logo.png" alt="" /></a>
                            </div>
                            <div className="menu-outer">
                                {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                            </div>
                            <div className="social-links">
                                <ul className="clearfix">
                                    <li><a href="#"><span className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><span className="fab fa-facebook-square" /></a></li>
                                    <li><a href="#"><span className="fab fa-pinterest-p" /></a></li>
                                    <li><a href="#"><span className="fab fa-instagram" /></a></li>
                                    <li><a href="#"><span className="fab fa-youtube" /></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="menu-backdrop" />
                    {/* End Mobile Menu */}
                </div>
            </div>
            <div className="header-category d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-category-wrap">
                                <div className="header-cat-list">
                                    <ul>
                                        <li><a href="shop.html">Health Store</a></li>
                                        <li><a href="shop.html">COLLECTIONS</a></li>
                                        <li><a href="shop.html">protein Store</a></li>
                                        <li><a href="shop.html">Pharmacy</a></li>
                                        <li><a href="shop.html">Tests</a></li>
                                        <li><a href="shop.html">MedPlus</a></li>
                                        <li><a href="shop.html">BEAUTY</a></li>
                                    </ul>
                                </div>
                                <div className="header-category-btn">
                                    <a href="shop.html">GET 5% OFF NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

}

export default Header;