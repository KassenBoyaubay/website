import React from 'react'
import './bootstrapTemplate.css'

const BootstrapTemplate = () => {
    return (
        <div className="bootstrapTemplate">

            {/*<!--Nav top Social Media-->*/}
            <div className="social-bar lightblue pr-5">
                <i className="fab fa-facebook-f mr-3"></i>
                <i className="fab fa-twitter mr-3"></i>
                <i className="fab fa-instagram mr-3"></i>
                <i className="fab fa-youtube mr-3"></i>
                <i className="fab fa-pinterest mr-3"></i>
                <i className="fas fa-rss mr-3"></i>
                <i className="fab fa-google-plus-g mr-3"></i>
            </div>
            {/*<!--Logo text top-->*/}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 text-right pt-4">
                        <h1>Daily Tuituion</h1>
                        <p>Learn with Us</p>
                        <div className="col-1"></div>
                        <div className="col-8">
                            <img className="img-fluid pl-2 py-2" src="" alt="Image for add" />
                        </div>
                    </div>
                </div>
            </div>
            {/*<!--Navigation-->*/}
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand" href="#"><i className="fas fa-home"></i></a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a href="#" className="nav-link">Download Template<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a href="#" className="nav-link">Services </a>
                        </li>
                        <li className="nav-item ">
                            <a href="#" className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item ">
                            <a href="#" className="nav-link">Documentation</a>
                        </li>
                        <li className="nav-item ">
                            <a href="#" className="nav-link">Contact us</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/*<!--Main section-->*/}
            <div className="container">
                <div className="row py-3">
                    {/*<!--Left Sidebar-->*/}
                    <div className="col-3 broder border-white border-2 bcolor">
                        <div className="w-100 text-center p-4">
                            <h5 className="p-2 border-bt">Sponsor</h5>
                            <img className="image-fluid mt-3" src="" alt="image of sponsor 1" />
                            <img className="image-fluid mt-4" src="" alt="image of sponsor 1" />
                            <img className="image-fluid mt-5" src="" alt="image of sponsor 1" />
                        </div>
                    </div>
                    {/*<!--Main Content-->*/}
                    <div className="col-6">
                        {/*<!--Blog 1-->*/}
                        <div className="broder border-white border-2 p-2 px-4">
                            <h4>Top 3 Android Software for Windows</h4>
                            <p>Author: Daily Tuition</p>
                            <img className="img-fluid" src="" alt="thumbnail" />
                            <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime corrupti ducimus optio
                            labore, cum enim pariatur explicabo architecto accusantium, eum assumenda dolorem nulla ullam ab modi illo
            cupiditate laboriosam!</p>
                            <p>
                                <button type="button" className="btn btn-success">Read More</button>
                            </p>
                            <h6>Share it:
            <i className="fab fa-facebook-f mr-3"></i>
                                <i className="fab fa-twitter mr-3"></i>
                                <i className="fab fa-instagram mr-3"></i>
                                <i className="fab fa-youtube mr-3"></i>
                                <i className="fab fa-pinterest mr-3"></i>
                                <i className="fas fa-rss mr-3"></i>
                                <i className="fab fa-google-plus-g mr-3"></i>
                            </h6>

                        </div>
                        {/*<!--Blog 2-->*/}
                        <div className="broder border-white border-2 p-2 px-4 mt-4">
                            <h4>Top 10 Business Plan</h4>
                            <p>Author: Daily Tuition</p>
                            <img className="img-fluid" src="" alt="thumbnail" />
                            <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime corrupti ducimus optio
                            labore, cum enim pariatur explicabo architecto accusantium, eum assumenda dolorem nulla ullam ab modi illo
            cupiditate laboriosam!</p>
                            <p>
                                <button type="button" className="btn btn-success">Read More</button>
                            </p>
                            <h6>Share it:
            <i className="fab fa-facebook-f mr-3"></i>
                                <i className="fab fa-twitter mr-3"></i>
                                <i className="fab fa-instagram mr-3"></i>
                                <i className="fab fa-youtube mr-3"></i>
                                <i className="fab fa-pinterest mr-3"></i>
                                <i className="fas fa-rss mr-3"></i>
                                <i className="fab fa-google-plus-g mr-3"></i>
                            </h6>

                        </div>
                        {/*<!--Blog 3-->*/}
                        <div className="broder border-white border-2 p-2 px-4 mt-4">
                            <h4>Top 5 Travelling Place</h4>
                            <p>Author: Daily Tuition</p>
                            <img className="img-fluid" src="" alt="thumbnail" />
                            <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime corrupti ducimus optio
                            labore, cum enim pariatur explicabo architecto accusantium, eum assumenda dolorem nulla ullam ab modi illo
            cupiditate laboriosam!</p>
                            <p>
                                <button type="button" className="btn btn-success">Read More</button>
                            </p>
                            <h6>Share it:
            <i className="fab fa-facebook-f mr-3"></i>
                                <i className="fab fa-twitter mr-3"></i>
                                <i className="fab fa-instagram mr-3"></i>
                                <i className="fab fa-youtube mr-3"></i>
                                <i className="fab fa-pinterest mr-3"></i>
                                <i className="fas fa-rss mr-3"></i>
                                <i className="fab fa-google-plus-g mr-3"></i>
                            </h6>

                        </div>
                        {/*<!--Blog 4-->*/}
                        <div className="broder border-white border-2 p-2 px-4 mt-4">
                            <h4>Top 10 Desktop Software</h4>
                            <p>Author: Daily Tuition</p>
                            <img className="img-fluid" src="" alt="thumbnail" />
                            <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime corrupti ducimus optio
                            labore, cum enim pariatur explicabo architecto accusantium, eum assumenda dolorem nulla ullam ab modi illo
            cupiditate laboriosam!</p>
                            <p>
                                <button type="button" className="btn btn-success">Read More</button>
                            </p>
                            <h6>Share it:
            <i className="fab fa-facebook-f mr-3"></i>
                                <i className="fab fa-twitter mr-3"></i>
                                <i className="fab fa-instagram mr-3"></i>
                                <i className="fab fa-youtube mr-3"></i>
                                <i className="fab fa-pinterest mr-3"></i>
                                <i className="fas fa-rss mr-3"></i>
                                <i className="fab fa-google-plus-g mr-3"></i>
                            </h6>

                        </div>
                    </div>
                    {/*<!--Right sidebar-->*/}
                    <div className="col-3 border-2 bcolor broder border-white">
                        <div className="w-100 text-center p-4">
                            <h5 className="p-2 border-bt text-danger">Social</h5>
                            <div className="p-2">
                                <i className="fab fa-facebook-f mr-3"></i>Facebook
          </div>
                            <div className="p-2">
                                <i className="fab fa-twitter mr-3"></i>Twitter
          </div>
                            <div className="p-2">
                                <i className="fab fa-instagram mr-3"></i>Instagram
          </div>
                            <div className="p-2">
                                <i className="fab fa-youtube mr-3"></i>Youtube
          </div>
                            <div className="p-2">
                                <i className="fab fa-pinterest mr-3"></i>Pinterest
          </div>
                            <div className="p-2">
                                <i className="fab fa-google-plus-g mr-3"></i>Google +
          </div>
                            {/*<!--Recent-->*/}
                            <div className="mt-5">
                                <h5 className="broder border-white border-2 p-2">Recent</h5>
                                <div className="d-flex flex-column p-2 mt-3">
                                    <div className="d-flex flex-row">
                                        <img className="img-fluid w-50 h-50" src="" alt="corresponding image of main content" />
                                        <p>Top 3 Android Software...</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <img className="img-fluid w-50 h-50" src="" alt="corresponding image of main content" />
                                        <p>Top 10 Business Plan...</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <img className="img-fluid w-50 h-50" src="" alt="corresponding image of main content" />
                                        <p>Top 5 Traveling Place...</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <img className="img-fluid w-50 h-50" src="" alt="corresponding image of main content" />
                                        <p>Top 10 Desktop Software...</p>
                                    </div>
                                </div>
                            </div>
                            {/*<!--Ads-->*/}
                            <div className="mt-3">
                                <h5>Ads</h5>
                                <img src="" alt="image of ad" />
                                <img className="mt-3" src="" alt="image of ad" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!--Footer-->*/}
            <footer>
                <div className="container p-5 black border border-2 border-white">
                    <div className="row">
                        <div className="col-4">
                            <div className="d-flex flex-column">
                                <h5 className="text-white">NewsLatter</h5>
                                <p className="text-white">Enter your email to subscribe to this blog and get notification of every new blog post
            </p>
                                <input className="form-control" type="text" placeholder="Email" />
                                <button type="button" className="btn btn-info mt-3">Subscribe</button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-flex flex-column p-3 border border-2 border-white text-white">
                                <h5>Categories</h5>
                                <ul className="ul">
                                    <li>Traveling</li>
                                    <li>Recipes</li>
                                    <li>Technologies</li>
                                    <li>Mobile</li>
                                    <li>News</li>
                                    <li>Bollywood</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-flex flex-column text-white">
                                <h5>Contact us</h5>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                    <input type="email" className="form-control mt-2" placeholder="Email" />
                                    <textarea rows="3" className="form-control mt-1"></textarea>
                                    <button type="button" className="btn btn-info mt-2 float-right">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-bar lightblue pr-5">
                    <i className="fab fa-facebook-f mr-3"></i>
                    <i className="fab fa-twitter mr-3"></i>
                    <i className="fab fa-instagram mr-3"></i>
                    <i className="fab fa-youtube mr-3"></i>
                    <i className="fab fa-pinterest mr-3"></i>
                    <i className="fas fa-rss mr-3"></i>
                    <i className="fab fa-google-plus-g mr-3"></i>
                </div>
            </footer>
        </div>
    )
}

export default BootstrapTemplate