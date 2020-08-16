import React, { useEffect } from 'react'

// Jquery Library file 
// import $ from "./js/Jquery3.4.1.min.js"
import $ from 'jquery'
// --------- Owl-Carousel js ----------------- 
// import owlCarousel from "./js/owl.carousel.min.js"
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
// --------- AOS js Library  ----------------- 
// import AOS from "./js/aos.js"
import AOS from 'aos'
import 'aos/dist/aos.css'
// import main from "./js/main.js"

// Font Awesome Icons
import './css/all.css'
// Owl-Carousel
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
// AOS Library
import './css/aos.css'
// Custom Style
import './css/Style.css'

const Blogger = () => {
    useEffect(() => {
        /*
        const scripts = (url) => {
            let script = document.createElement("script");
            script.async = false;
            script.type = 'text/jsx';
            script.src = url;
            document.body.appendChild(script);
        }
        // Custom Javascript file 
        scripts("./js/main.js");
        */

        // main();

        const responsive = {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            560: {
                items: 2
            },
            960: {
                items: 3
            }
        }


        let $nav = $('.nav');
        let $toggleCollapse = $('.toggle-collapse');

        /** click event on toggle menu */
        $toggleCollapse.click(function () {
            $nav.toggleClass('collapse');
        })

        // owl-crousel for blog
        // $('.owl-carousel').owlCarousel({
        //     loop: true,
        //     autoplay: false,
        //     autoplayTimeout: 3000,
        //     dots: false,
        //     nav: true,
        //     navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        //     responsive: responsive
        // });


        // click to scroll top
        $('.move-up span').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        })

        // AOS Instance
        AOS.init();

    })

    return (
        <div className=".body">

            {/* ----------------------------  Navigation ---------------------------------------------- */}

            <nav className="nav">
                <div className="nav-menu flex-row">
                    <div className="nav-brand">
                        <a href="#" className="text-gray">Blooger</a>
                    </div>
                    <div className="toggle-collapse">
                        <div className="toggle-icons">
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                    <div>
                        <ul className="nav-items">
                            <li className="nav-link">
                                <a href="#">Home</a>
                            </li>
                            <li className="nav-link">
                                <a href="#">Category</a>
                            </li>
                            <li className="nav-link">
                                <a href="#">Archive</a>
                            </li>
                            <li className="nav-link">
                                <a href="#">Pages</a>
                            </li>
                            <li className="nav-link">
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="social text-gray">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </nav>

            {/* ------------x---------------  Navigation --------------------------x------------------- */}

            {/*--------------------------- Main Site Section ----------------------------*/}

            <main>

                {/*---------------------- Site Title --------------------*/}

                <section className="site-title">
                    <div className="site-background" data-aos="fade-up" data-aos-delay="100">
                        <h3>Tours & Travels</h3>
                        <h1>Amazing Place on Earth</h1>
                        <button className="btn">Explore</button>
                    </div>
                </section>

                {/*----------x----------- Site Title ----------x---------*/}

                {/* --------------------- Blog Carousel ----------------- */}

                <section>
                    <div className="blog">
                        <div className="container">
                            <OwlCarousel className="owl-carousel owl-theme blog-post"
                                loop
                                autoplay={false}
                                autoplayTimeout={3000}
                                dots={false}
                                nav
                                navText={[<i className="fas fa-long-arrow-alt-left"></i>, <i className="fas fa-long-arrow-alt-right"></i>]}
                                responsive
                            >
                                <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                    <img src="./assets/Blog-post/post-1.jpg" alt="post-1" />
                                    <div className="blog-title">
                                        <h3>London Fashion week's continued the evolution</h3>
                                        <button className="btn btn-blog">Fashion</button>
                                        <span>2 minutes</span>
                                    </div>
                                </div>
                                <div className="blog-content" data-aos="fade-in" data-aos-delay="200">
                                    <img src="./assets/Blog-post/post-3.jpg" alt="post-1" />
                                    <div className="blog-title">
                                        <h3>London Fashion week's continued the evolution</h3>
                                        <button className="btn btn-blog">Fashion</button>
                                        <span>2 minutes</span>
                                    </div>
                                </div>
                                <div className="blog-content" data-aos="fade-left" data-aos-delay="200">
                                    <img src="./assets/Blog-post/post-2.jpg" alt="post-1" />
                                    <div className="blog-title">
                                        <h3>London Fashion week's continued the evolution</h3>
                                        <button className="btn btn-blog">Fashion</button>
                                        <span>2 minutes</span>
                                    </div>
                                </div>
                                <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                    <img src="./assets/Blog-post/post-5.png" alt="post-1" />
                                    <div className="blog-title">
                                        <h3>London Fashion week's continued the evolution</h3>
                                        <button className="btn btn-blog">Fashion</button>
                                        <span>2 minutes</span>
                                    </div>
                                </div>
                            </OwlCarousel>
                            <div className="owl-navigation">
                                <span className="owl-nav-prev"><i className="fas fa-long-arrow-alt-left"></i></span>
                                <span className="owl-nav-next"><i className="fas fa-long-arrow-alt-right"></i></span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ----------x---------- Blog Carousel --------x-------- */}

                {/* ---------------------- Site Content ------------------------*/}

                <section className="container">
                    <div className="site-content">
                        <div className="posts">
                            <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                                <div className="post-image">
                                    <div>
                                        <img src="./assets/Blog-post/blog1.png" className="img" alt="blog1" />
                                    </div>
                                    <div className="post-info flex-row">
                                        <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                        <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                                        <span>2 Commets</span>
                                    </div>
                                </div>
                                <div className="post-title">
                                    <a href="#">Why should boys have all the fun? it's the women who are making india an
                                alcohol-loving contry</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                    illum similique veniam tempore unde?
                            </p>
                                    <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
                                </div>
                            </div>
                            <hr />
                            <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                                <div className="post-image">
                                    <div>
                                        <img src="./assets/Blog-post/blog2.png" className="img" alt="blog1" />
                                    </div>
                                    <div className="post-info flex-row">
                                        <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                        <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 16, 2019</span>
                                        <span>7 Commets</span>
                                    </div>
                                </div>
                                <div className="post-title">
                                    <a href="#">Why should boys have all the fun? it's the women who are making india an
                                alcohol-loving contry</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                    illum similique veniam tempore unde?
                            </p>
                                    <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
                                </div>
                            </div>
                            <hr />
                            <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                                <div className="post-image">
                                    <div>
                                        <img src="./assets/Blog-post/blog3.png" className="img" alt="blog1" />
                                    </div>
                                    <div className="post-info flex-row">
                                        <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                        <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 19, 2019</span>
                                        <span>5 Commets</span>
                                    </div>
                                </div>
                                <div className="post-title">
                                    <a href="#">New data recording system to better analyse road accidents</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                    illum similique veniam tempore unde?
                            </p>
                                    <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
                                </div>
                            </div>
                            <hr />
                            <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                                <div className="post-image">
                                    <div>
                                        <img src="./assets/Blog-post/blog4.png" className="img" alt="blog1" />
                                    </div>
                                    <div className="post-info flex-row">
                                        <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                        <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 21, 2019</span>
                                        <span>12 Commets</span>
                                    </div>
                                </div>
                                <div className="post-title">
                                    <a href="#">New data recording system to better analyse road accidents</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                    illum similique veniam tempore unde?
                            </p>
                                    <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
                                </div>
                            </div>
                            <div className="pagination flex-row">
                                <a href="#"><i className="fas fa-chevron-left"></i></a>
                                <a href="#" className="pages">1</a>
                                <a href="#" className="pages">2</a>
                                <a href="#" className="pages">3</a>
                                <a href="#"><i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <aside className="sidebar">
                            <div className="category">
                                <h2>Category</h2>
                                <ul className="category-list">
                                    <li className="list-items" data-aos="fade-left" data-aos-delay="100">
                                        <a href="#">Software</a>
                                        <span>(05)</span>
                                    </li>
                                    <li className="list-items" data-aos="fade-left" data-aos-delay="200">
                                        <a href="#">Techonlogy</a>
                                        <span>(02)</span>
                                    </li>
                                    <li className="list-items" data-aos="fade-left" data-aos-delay="300">
                                        <a href="#">Lifestyle</a>
                                        <span>(07)</span>
                                    </li>
                                    <li className="list-items" data-aos="fade-left" data-aos-delay="400">
                                        <a href="#">Shopping</a>
                                        <span>(01)</span>
                                    </li>
                                    <li className="list-items" data-aos="fade-left" data-aos-delay="500">
                                        <a href="#">Food</a>
                                        <span>(08)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="popular-post">
                                <h2>Popular Post</h2>
                                <div className="post-content" data-aos="flip-up" data-aos-delay="200">
                                    <div className="post-image">
                                        <div>
                                            <img src="./assets/popular-post/m-blog-1.jpg" className="img" alt="blog1" />
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>
                                            <span>2 Commets</span>
                                        </div>
                                    </div>
                                    <div className="post-title">
                                        <a href="#">New data recording system to better analyse road accidents</a>
                                    </div>
                                </div>
                                <div className="post-content" data-aos="flip-up" data-aos-delay="300">
                                    <div className="post-image">
                                        <div>
                                            <img src="./assets/popular-post/m-blog-2.jpg" className="img" alt="blog1" />
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>
                                            <span>2 Commets</span>
                                        </div>
                                    </div>
                                    <div className="post-title">
                                        <a href="#">New data recording system to better analyse road accidents</a>
                                    </div>
                                </div>
                                <div className="post-content" data-aos="flip-up" data-aos-delay="400">
                                    <div className="post-image">
                                        <div>
                                            <img src="./assets/popular-post/m-blog-3.jpg" className="img" alt="blog1" />
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>
                                            <span>2 Commets</span>
                                        </div>
                                    </div>
                                    <div className="post-title">
                                        <a href="#">New data recording system to better analyse road accidents</a>
                                    </div>
                                </div>
                                <div className="post-content" data-aos="flip-up" data-aos-delay="500">
                                    <div className="post-image">
                                        <div>
                                            <img src="./assets/popular-post/m-blog-4.jpg" className="img" alt="blog1" />
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>
                                            <span>2 Commets</span>
                                        </div>
                                    </div>
                                    <div className="post-title">
                                        <a href="#">New data recording system to better analyse road accidents</a>
                                    </div>
                                </div>
                                <div className="post-content" data-aos="flip-up" data-aos-delay="600">
                                    <div className="post-image">
                                        <div>
                                            <img src="./assets/popular-post/m-blog-5.jpg" className="img" alt="blog1" />
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,
                                        2019</span>
                                            <span>2 Commets</span>
                                        </div>
                                    </div>
                                    <div className="post-title">
                                        <a href="#">New data recording system to better analyse road accidents</a>
                                    </div>
                                </div>
                            </div>
                            <div className="newsletter" data-aos="fade-up" data-aos-delay="300">
                                <h2>Newsletter</h2>
                                <div className="form-element">
                                    <input type="text" className="input-element" placeholder="Email" />
                                    <button className="btn form-btn">Subscribe</button>
                                </div>
                            </div>
                            <div className="popular-tags">
                                <h2>Popular Tags</h2>
                                <div className="tags flex-row">
                                    <span className="tag" data-aos="flip-up" data-aos-delay="100">Software</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="200">technology</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="300">travel</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="400">illustration</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="500">design</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="600">lifestyle</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="700">love</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="800">project</span>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* -----------x---------- Site Content -------------x----------*/}

            </main>

            {/*-------------x------------- Main Site Section ---------------x------------*/}


            {/* --------------------------- Footer ---------------------------------------- */}

            <footer className="footer">
                <div className="container">
                    <div className="about-us" data-aos="fade-right" data-aos-delay="200">
                        <h2>About us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis
                    iure, autem nulla tenetur repellendus.</p>
                    </div>
                    <div className="newsletter" data-aos="fade-right" data-aos-delay="200">
                        <h2>Newsletter</h2>
                        <p>Stay update with our latest</p>
                        <div className="form-element">
                            <input type="text" placeholder="Email" /><span><i className="fas fa-chevron-right"></i></span>
                        </div>
                    </div>
                    <div className="instagram" data-aos="fade-left" data-aos-delay="200">
                        <h2>Instagram</h2>
                        <div className="flex-row">
                            <img src="./assets/instagram/thumb-card3.png" alt="insta1" />
                            <img src="./assets/instagram/thumb-card4.png" alt="insta2" />
                            <img src="./assets/instagram/thumb-card5.png" alt="insta3" />
                        </div>
                        <div className="flex-row">
                            <img src="./assets/instagram/thumb-card6.png" alt="insta4" />
                            <img src="./assets/instagram/thumb-card7.png" alt="insta5" />
                            <img src="./assets/instagram/thumb-card8.png" alt="insta6" />
                        </div>
                    </div>
                    <div className="follow" data-aos="fade-left" data-aos-delay="200">
                        <h2>Follow us</h2>
                        <p>Let us be Social</p>
                        <div>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="rights flex-row">
                    <h4 className="text-gray">
                        Copyright ©2019 All rights reserved | made by
                <a href="www.youtube.com/c/dailytuition" target="_black">Daily Tuition <i className="fab fa-youtube"></i>
                    Channel</a>
                    </h4>
                </div>
                <div className="move-up">
                    <span><i className="fas fa-arrow-circle-up fa-2x"></i></span>
                </div>
            </footer>

            {/* -------------x------------- Footer --------------------x------------------- */}
        </div>
    )
}

export default Blogger