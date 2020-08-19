import React from 'react'
import './buttonNeon.css'

const ButtonNeon = ({ name }) => {
    return (
        <div className="buttonNeon">
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {name}
            </a>
        </div>
    )
}

export default ButtonNeon