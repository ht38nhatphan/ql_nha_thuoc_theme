import React from 'react';
import '../../assets/login/css/bootstrap.min.css';
import '../../assets/login/css/styles.css';
function Signup() {
    return (
        <div>
            {/* // Preloader */}
            {/* <div id="nm-preloader" className="nm-aic nm-vh-md-100">
                <div className="nm-ripple">
                    <div />
                    <div />
                </div>
            </div> */}
            {/* Preloader // */}
            <main id="page-content" className="d-flex nm-aic nm-vh-md-100">
                <div className="overlay" />
                <div className="nm-tm-wr">
                    <div className="container">
                        <form>
                            <div className="nm-hr nm-up-rl-3">
                                <h2>Signup</h2>
                                <ul className="social-buttons">
                                    <li className="nm-hvr">
                                        <a href="http://google.com/">
                                            <i className="fab fa-google" />
                                        </a>
                                    </li>
                                    <li className="nm-hvr">
                                        <a href="https://twitter.com/">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="nm-hvr">
                                        <a href="https://www.facebook.com/">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="input-group nm-gp">
                                <span className="nm-gp-pp"><i className="fas fa-user" /></span>
                                <input type="text" className="form-control" id="inputUsername" tabIndex={1} placeholder="Username" required />
                            </div>
                            <div className="input-group nm-gp">
                                <span className="nm-gp-pp"><i className="fas fa-envelope-open" /></span>
                                <input type="email" className="form-control" id="inputEmail" tabIndex={2} placeholder="Email" required />
                            </div>
                            <div className="input-group nm-gp">
                                <span className="nm-gp-pp"><i className="fas fa-lock" /></span>
                                <input type="password" className="form-control" id="inputPassword" tabIndex={3} placeholder="Password" required />
                            </div>
                            <div className="input-group nm-gp">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label nm-check" htmlFor="rememberMe">I agree to the <a className="nm-fs-1 nm-fw-bd" href="#">Terms &amp; Conditions</a></label>
                                </div>
                            </div>
                            <div className="row nm-aic nm-mb-1">
                                <div className="col-sm-6 nm-mb-1 nm-mb-sm-0">
                                    <button type="submit" className="btn btn-primary nm-hvr nm-btn-2">Sign Up</button>
                                </div>
                            </div>
                            <footer style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.75rem', color: '#97a4af', fontWeight: 400 }}>Already have an account? <a className="nm-fs-1 nm-fw-bd" style={{ fontSize: '0.75rem' }} href="login">Login</a></footer>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Signup;