import React, { Component } from 'react'
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User src="https://www.kinogallery.com/images/469/kinogallery.com-469-0005847001468149528.jpg" 
                alt="girl" 
                name="Jennifer Connelly"
                min />
                <img src={this.props.src} alt= {this.props.alt} />
                <div className="post__name">
                    some account text
                </div>
                <div className="post__descr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        )
    }
}
