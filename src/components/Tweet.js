import React from 'react'

const Tweets = (props) => (
    <div>
        <h3>{props.me}</h3>
        <h3>{props.age}</h3>
        <h3>{props.name}</h3>
        <h3>{props.tweet}</h3>
    </div>
)

export default Tweets