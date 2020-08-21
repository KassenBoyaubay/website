import React, { useEffect, useState } from 'react'
import './clockNeumorphism.css'

const ClockNeumorphism = () => {

    const [style, setStyle] = useState({
        hr: '',
        mn: '',
        sc: ''
    })
    const deg = 6;

    useEffect(() => {
        const interval = setInterval(() => {
            currentTime()
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    function currentTime() {
        var day = new Date();
        var hour = day.getHours() * 30;
        var min = day.getMinutes() * deg;
        var sec = day.getSeconds() * deg;

        setStyle({
            hr: `rotateZ(${(hour) + (min / 12)}deg)`,
            mn: `rotateZ(${min}deg)`,
            sc: `rotateZ(${sec}deg)`
        })
    }

    return (
        <div className="clockNeumorphism">
            <div className="hour">
                <div className="hr" id="hr" style={{ transform: style.hr }}></div>
            </div>
            <div className="min">
                <div className="mn" id="mn" style={{ transform: style.mn }}></div>
            </div>
            <div className="sec">
                <div className="sc" id="sc" style={{ transform: style.sc }}></div>
            </div>
        </div>
    )
}

export default ClockNeumorphism