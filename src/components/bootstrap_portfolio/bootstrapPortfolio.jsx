import React from 'react'

import './scss/main.scss'

// Icons
import envelope_fill from '../../../node_modules/bootstrap-icons/icons/envelope-fill.svg'
import house_fill from '../../../node_modules/bootstrap-icons/icons/house-fill.svg'
import phone_fill from '../../../node_modules/bootstrap-icons/icons/phone-fill.svg'

// Images
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import ui_face2 from './assets/ui-face2.jpg'

const BootstrapPortfolio = () => {
    return (
        <div className="bootstrapPortfolio">
            {/* Header */}
            <header id="bp-header">
                <div className="fixed text-center ">
                    <img alt="" src={ui_face2} className="img-fluid rounded-circle" />
                    <h3 className="pb-4 pt-2 roboto fs-2 text-white">Daily Tuition</h3>
                </div>
            </header>
            {/* Main */}
            <main id="bp-site-main">
                <div className="container-fluid">
                    <div className="row ">
                        {/* col */}
                        <div id="info" className="offset-md-4 col px-5">
                            <div className="row">
                                {/* first Section */}
                                <div className="col-12">
                                    <h1 className="ipt-8 roboto text-dark">Simple & Creative Portfolio Website <br /> Design With Bootstrap 5</h1>

                                    <p className="roboto fs-1_5 py-4 w-75 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis error rerum voluptatum atque?
                                    Eum a iste repellendus voluptatibus totam aperiam voluptates fugit nemo, accusamus quidem sint quisquam cum, itaque eius pariatur in, veritatis veniam eaque voluptatem.
                                    Molestiae reiciendis, earum repudiandae vel eaque facilis eum aliquam, harum aliquid architecto impedit!
                                </p>

                                    <button className="btn fs-1_5 border text-secondary px-4">Download CV</button>

                                    <hr className="border my-5" />
                                </div>
                                {/* second Section */}
                                <div className="col-12">
                                    <h1 className="mt-5 fs-2 roboto text-dark px-1 py-5">Recent Work</h1>

                                    <div className="row">
                                        <div className="col-md-6 pb-5">
                                            <img alt="" src={img1} className="img-fluid" />
                                            <h5 className="py-2 loto text-dark">Lorem ipsum dolor sit amet.</h5>
                                            <p className="lato text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nihil!</p>
                                        </div>
                                        <div className="col-md-6 pb-5">
                                            <img alt="" src={img2} className="img-fluid" />
                                            <h5 className="py-2 loto text-dark">Lorem ipsum dolor sit amet.</h5>
                                            <p className="lato text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nihil!</p>
                                        </div>
                                        <div className="col-md-6 pb-5">
                                            <img alt="" src={img3} className="img-fluid" />
                                            <h5 className="py-2 loto text-dark">Lorem ipsum dolor sit amet.</h5>
                                            <p className="lato text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nihil!</p>
                                        </div>
                                        <div className="col-md-6 pb-5">
                                            <img alt="" src={img4} className="img-fluid" />
                                            <h5 className="py-2 loto text-dark">Lorem ipsum dolor sit amet.</h5>
                                            <p className="lato text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nihil!</p>
                                        </div>
                                        <div className="col-md-6 pb-5">
                                            <img alt="" src={img5} className="img-fluid" />
                                            <h5 className="py-2 loto text-dark">Lorem ipsum dolor sit amet.</h5>
                                            <p className="lato text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nihil!</p>
                                        </div>
                                        <div className="col-md-6 pb-5">
                                            <img alt="" src={img6} className="img-fluid" />
                                            <h5 className="py-2 loto text-dark">Lorem ipsum dolor sit amet.</h5>
                                            <p className="lato text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nihil!</p>
                                        </div>
                                        <div className="col">
                                            <button className="btn fs-1_5 border text-secondary px-4">Full Portfolio</button>
                                        </div>
                                    </div>
                                    <hr className="border my-5" />
                                </div>
                                {/* third Section */}
                                <div className="row">
                                    <div className="col">
                                        <h1 className="mt-5 fs-2 roboto text-dark px-1 py-5">Get In Touch</h1>

                                        <p className="lato text-secondary fs-1 w-75 pb-3">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sit, accusamus sint laborum,
                                            natus perspiciatis modi dolor asperiores facilis ex quia animi illum debitis quae adipisci dolorum qui itaque soluta?
                                    </p>

                                        <div className="row">
                                            <div className="col-md-8">
                                                <form>
                                                    <div className="row">
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="Name" />
                                                        </div>
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="row py-3">
                                                        <div className="col-12">
                                                            <textarea className="form-control" rows="6" placeholder="Message"></textarea>
                                                        </div>
                                                        <div className="col-12 py-3">
                                                            <button className="btn fs-1 border text-secondary px-4">Send Message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="d-flex flex-row pb-4">
                                                    <img alt="" src={house_fill} style={{ width: '10%' }} />
                                                    <span className="px-2 w-75 fs-1 roboto">1234 Somewhere Rd.
                                                    Nashville, TN 00000
                                                    United States</span>
                                                </div>
                                                <div className="d-flex flex-row pb-4">
                                                    <img alt="" src={phone_fill} style={{ width: '10%' }} />
                                                    <span className="px-2 w-75 fs-1 roboto">000-000-0000</span>
                                                </div>
                                                <div className="d-flex flex-row pb-4">
                                                    <img alt="" src={envelope_fill} style={{ width: '10%' }} />
                                                    <span className="px-2 w-75 fs-1 roboto">example@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="bg-light text-center text-dark py-2">
                                <span className="roboto">Design By Daily Tuition</span>
                            </footer>
                        </div>
                    </div>
                </div>
            </main>



        </div>
    )
}

export default BootstrapPortfolio