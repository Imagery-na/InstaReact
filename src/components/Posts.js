import React, {Component} from 'react';
import InstaService from '..//services/insta_Service';
import User from './User';
import ErrorMessage from './Error';
//import Post from './Post';
export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }
    componentDidMount(){ //хук, что компонент появился
        this.updatePosts();
    }
    updatePosts(){ //получаем посты из бд и обрабатываем
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }
    onPostsLoaded = (posts)=>{
        this.setState({
            posts, //идентично posts: posts
            error: false
        })
    }
    onError = (err) =>{
        this.setState({
            error: true
        })
    }

    renderItems(arr){ //вёрстка элементов массива arr
        return arr.map(item=> { //перебираем все элементы массива, преобразовывая его
            const {name, altname, photo, src, alt, descr, id} = item;//деструктуризация 
            return(
                <div key={id} className="post">
                    <User 
                    src={photo} 
                    alt={altname} 
                    name={name}
                    min/>
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        });
    }
    render(){
        const {error, posts} = this.state; //деструктуризация
        if(error){
            return <ErrorMessage/>
        }
        const items = this.renderItems(posts);
        return(
            <div className="left">
               {items}
            </div>
        )
    }
}