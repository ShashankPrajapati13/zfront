import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 pt-8">
            <div className="container mx-auto px-4 pb-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-red-400">Zomato clone</h1>
                    <div className="flex space-x-4">
                        <select className="text-gray-600 bg-white border border-gray-300 rounded-md p-2">
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                        </select>
                        <select className="text-gray-600 bg-white border border-gray-300 rounded-md p-2">
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Spanish</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full max-w-screen-xl">
                        <div>
                            <h5 className="text-lg font-bold mb-4">About Zomato</h5>
                            <ul>
                                <li>
                                    <Link to="/about" className="text-gray-600 hover:text-black">Who We Are</Link>
                                </li>
                                <li>
                                    <Link to="/blog" className="text-gray-600 hover:text-black">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/work-with-us" className="text-gray-600 hover:text-black">Work With Us</Link>
                                </li>
                                <li>
                                    <Link to="/investor-relations" className="text-gray-600 hover:text-black">Investor Relations</Link>
                                </li>
                                <li>
                                    <Link to="/report-fraud" className="text-gray-600 hover:text-black">Report Fraud</Link>
                                </li>
                                <li>
                                    <Link to="/press-kit" className="text-gray-600 hover:text-black">Press Kit</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="text-gray-600 hover:text-black">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold mb-4">Zomaverse</h5>
                            <ul>
                                <li>
                                    <Link to="/zomato" className="text-gray-600 hover:text-black">Zomato</Link>
                                </li>
                                <li>
                                    <Link to="/blinkit" className="text-gray-600 hover:text-black">Blinkit</Link>
                                </li>
                                <li>
                                    <Link to="/feeding-india" className="text-gray-600 hover:text-black">Feeding India</Link>
                                </li>
                                <li>
                                    <Link to="/hyperpure" className="text-gray-600 hover:text-black">Hyperpure</Link>
                                </li>
                                <li>
                                    <Link to="/zomaland" className="text-gray-600 hover:text-black">Zomaland</Link>
                                </li>
                                <li>
                                    <Link to="/weather-union" className="text-gray-600 hover:text-black">Weather Union</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold mb-4">For Restaurants</h5>
                            <ul>
                                <li>
                                    <Link to="/partner-with-us" className="text-gray-600 hover:text-black">Partner With Us</Link>
                                </li>
                                <li>
                                    <Link to="/apps-for-you" className="text-gray-600 hover:text-black">Apps For You</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold mb-4">Learn More</h5>
                            <ul>
                                <li>
                                    <Link to="/privacy" className="text-gray-600 hover:text-black">Privacy</Link>
                                </li>
                                <li>
                                    <Link to="/security" className="text-gray-600 hover:text-black">Security</Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="text-gray-600 hover:text-black">Terms</Link>
                                </li>
                                <li>
                                    <Link to="/sitemap" className="text-gray-600 hover:text-black">Sitemap</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold mb-4">Social Links</h5>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black"
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black"
                                >
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black"
                                >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </div>
                            <div className="flex flex-col space-y-2 mt-4">
                                <a
                                    href="https://apps.apple.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
                                        alt="App Store"
                                        className="w-5"
                                    />
                                </a>
                                <a
                                    href="https://play.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-play-store-icon.png"
                                        alt="Google Play"
                                        className="w-5"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 text-white text-center py-4">
                    <p className="text-sm">
                        By continuing past this page, you agree to our Terms of Service,
                        Cookie Policy, Privacy Policy and Content Policies. All trademarks
                        are properties of their respective owners. 2008-2024 © Zomato™ Ltd.
                        All rights reserved.
                    </p>
                </div>
        </footer>
    );
}

export default Footer;
