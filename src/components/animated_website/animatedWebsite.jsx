import React from 'react'
import './animatedWebsite.css'
import Bubbles from './bubbles'

import img_logo from './images/logo.png'
import img_menu from './images/menu.png'
import img_fb from './images/fb.png'
import img_ig from './images/ig.png'
import img_tw from './images/tw.png'
import img_share from './images/share.png'
import img_info from './images/info.png'

const AnimatedWebsite = () => {
    return (
        <div class="hero">
            <div class="navbar">
                <img src={img_logo} class="logo" alt="" />
                <button type="button">Sign Up</button>
            </div>
            <div class="content">
                <small>Welcome to our</small>
                <h1>World's<br /> Creative Studio</h1>
                <button type="button">Take a tour</button>
            </div>
            <div class="side-bar">
                <img src={img_menu} class="menu" alt="" />
                <div class="social-links">
                    <img src={img_fb} alt="" />
                    <img src={img_ig} alt="" />
                    <img src={img_tw} alt="" />
                </div>
                <div class="useful-links">
                    <img src={img_share} alt="" />
                    <img src={img_info} alt="" />
                </div>
            </div>
            <Bubbles />
        </div>
    )
}

export default AnimatedWebsite