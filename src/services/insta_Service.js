export default class InstaService{
    constructor(){
        this._apiBase = 'http://localhost:3000';//_ значит неизменяемое значение
    }//сначала json-server src/posts.json, затем во 2ом терминале npm start, в 3ем терминале npm i react-router-dom -save - библиотека для маршрутизации
    getResource = async (url)=>{
        const res = await fetch(`${this._apiBase}${url}`);//await - пока ждём ответ от сервера, дальнейший код не обрабатывается
        if(!res.ok){
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }
        return await res.json();
    }
    getAllPosts = async () => {
        const res = await this.getResource('/posts/'); //можно создать другой массив в том же json файле!
        return res;
    }
    getAllPhotos = async () =>{ //фотографии текущего пользователя
        const res = await this.getResource('/posts/');
        return res.map(this._transformPosts);
    }
    _transformPosts=(post) => { //трансформирующий метод, чтобы не загружать из бд лишние данные
        return{
            src: post.src,
            alt: post.alt
        }
    }
}
