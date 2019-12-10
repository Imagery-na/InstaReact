import React, {Component} from 'react';
import User from './User';
import Palette from './Palette';
const Profile = () => {
  return(
    <div className="container profile">
      <User 
      src="https://images.boardriders.com/global/billabong-products/all/default/hi-res/q3dr02bif9_billabong,wg_0019_frt6.jpg" 
      alt="user1" 
      name="Juliet"/>      
      <Palette/>
    </div>
  )
}
export default Profile; //чтобы по умолчанию экспортировать в App.js