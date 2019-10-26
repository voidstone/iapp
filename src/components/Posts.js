import React, { Component } from 'react'
import Post from "../components/Post"

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://v1.popcornnews.ru/k2/news/970/upload/F34oN3.jpg" 
                alt="first" />
                <Post src="https://www.buro247.ru/thumb/670x830_0/images/anya/porter/jennifer-connelly-on-working-with-husband-paul-bettany-it-was-amazing-04.jpg" 
                alt="second" />
            </div>
        )
    }
}

