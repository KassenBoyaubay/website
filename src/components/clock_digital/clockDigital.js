import React, { useEffect, useState } from 'react'
import './clockDigital.css'

const ClockDigital = () => {

    const [hour, setHour] = useState()
    const [min, setMin] = useState()
    const [sec, setSec] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            currentTime()
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    function currentTime() {
        var date = new Date()
        var hour = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()
        setHour(updateTime(hour))
        setMin(updateTime(min))
        setSec(updateTime(sec))
    }

    function updateTime(k) {
        return k < 10 ? "0" + k : k
    }

    return (
        <div className="digitalClock">
            <div className="badge">
                Digital clock
            </div>
            <div className="clock">
                <span id="hours">{hour}</span>
                <span>:</span>
                <span id="minutes">{min}</span>
                <span>:</span>
                <span id="seconds">{sec}</span>
            </div>
        </div>
    )
}

export default ClockDigital