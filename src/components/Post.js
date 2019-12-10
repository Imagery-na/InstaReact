import React, {Component} from 'react';
import User from './User';

export default class Post extends Component{
    render(){
        return(
            <div className="post">
                <User 
                src="https://images.boardriders.com/global/billabong-products/all/default/hi-res/q3dr02bif9_billabong,wg_0019_frt6.jpg" 
                alt="user1" 
                name="Juliet"
                min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </div>
            </div>
        )
    }
}