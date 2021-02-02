import React from 'react'
import './buttonNeon.css'

const ButtonNeon = ({ name }) => {
    return (
        <div className="buttonNeon">
            <div className="button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {name}
            </div>
        </div>
    )
}

export default ButtonNeon