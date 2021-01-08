import React from 'react';

export default (props) => {

    const text = props.text.split('');
    let wrongLetter = new Array(text.length - 1).fill(false)

    return (
        <div className="border rounded p-3 mb-4">
            {
                text.map((s, i) => {
                    let color, borderColor;
                    if (i < props.userInput.length) {
                        color = s === props.userInput[i] ? '#dfffa0' : '#fcbea4'
                        wrongLetter[i] = s === props.userInput[i] ? false : true
                        borderColor = wrongLetter.indexOf(true) !== -1 ? '#fcbea4' : '#ffffff'
                    }
                    return <span key={i} style={{ backgroundColor: color, borderBottom: `2px solid ${borderColor}` }} yep={wrongLetter[i]}>{s}</span>
                })
            }
        </div>
    )
}