import React from 'react';
import User from './User';

export default function Users(){
    return(
        <div className="fight">
            <User 
                src="https://images.boardriders.com/global/billabong-products/all/default/hi-res/q3dr02bif9_billabong,wg_0019_frt6.jpg" 
                alt="user1" 
                name="Juliet"/>
            <div className="users__block">
                <User 
                src="https://images.boardriders.com/global/billabong-products/all/default/hi-res/q3dr02bif9_billabong,wg_0019_frt6.jpg" 
                alt="user1" 
                name="Juliet"
                min/>
                <User 
                src="https://images.boardriders.com/global/billabong-products/all/default/hi-res/q3dr02bif9_billabong,wg_0019_frt6.jpg" 
                alt="user1" 
                name="Juliet"
                min/>
                <User 
                src="https://images.boardriders.com/global/billabong-products/all/default/hi-res/q3dr02bif9_billabong,wg_0019_frt6.jpg" 
                alt="user1" 
                name="Juliet"
                min/>
                <User 
                src="https://images.boardriders.com/global/billabong-products/all/default/hi-res/q3dr02bif9_billabong,wg_0019_frt6.jpg" 
                alt="user1" 
                name="Juliet"
                min/>                                
            </div>
        </div>
    )
}