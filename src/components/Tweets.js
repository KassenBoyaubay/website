import React from 'react'
import Tweet from './Tweet'

const Tweets = (props) => {
    const tweets = [
        { name: 'deved', tweet: 'react I need something' },
        { name: 'traversy', tweet: 'Whats\'app I need a breal' },
        { name: 'simplify', tweet: 'I\'m simplifyingg the web!!' },
    ]

    const classes = []

    if (props.name === 'Kas') classes.push('KasClass')

    return (
        <section>
            <h1>I have {tweets.length} tweets</h1>
            <h2>Tweet is</h2>
            <Tweet me={props.me} age={props.age} className={classes.join(' ')} />
            {tweets.map((tweet, key) => (
                <div className="tweet" key={key}>
                    <h2>Name and Tweet:</h2>
                    <Tweet name={tweet.name} tweet={tweet.tweet} />
                </div>
            ))}
        </section>
    )
}

export default Tweets