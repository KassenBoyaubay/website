import React from 'react'
import Tweet from './Tweet'

const Tweets = (props) => {
    const tweets = [
        { name: 'deved', tweet: 'react I need something' },
        { name: 'traversy', tweet: 'Whats\'app I need a breal' },
        { name: 'simplify', tweet: 'I\'m simplifyingg the web!!' },
    ]
    return (
        <section>
            <h1>I have {tweets.length} tweets</h1>
            <h2>Tweet is</h2>
            <Tweet me={props.me} age={props.age} />
            {tweets.map((tweet, key) => (
                <div className="tweet">
                    <h2>Name and Tweet:</h2>
                    <Tweet key={key} name={tweet.name} tweet={tweet.tweet} />
                </div>
            ))}
        </section>
    )
}

export default Tweets