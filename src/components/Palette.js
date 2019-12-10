import React, {Component} from 'react';
import InstaService from '..//services/insta_Service';
import ErrorMessage from './Error';

export default class Palette extends Component {//класс, который зависит от прототипа класса из Реакт
    InstaService = new InstaService();
    state = {
        photos: [],
        error: false,
    }
    componentDidMount(){ //хук, когда компонент появился на странице
        this.updatePhotos();
    }
    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded) //если ответ от сервера успешно получен
        .catch(this.onError) //если ошибка
    }
    onPhotosLoaded = (photos)=>{
        this.setState({
            photos, 
            error: false,
            loading: false
        })
    }
    onError = (err) =>{
        this.setState({
            error: true
        })
    }
    renderItems(arr){
        return arr.map(item => {
            const {src, alt} = item;
            return(
                <img src={src} alt={alt}></img>
            )
        })
    }
    render(){
        const {error, photos} = this.state;
        if(error){
            return <ErrorMessage/>
        }
        const items = this.renderItems(photos); //рендерящий метод прописан отдельно выше
        return(
            <div className="palette">
                {items}
            </div>
        )
    }
}