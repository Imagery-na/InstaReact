import React, {Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom'; //ccылка из библиотеки реакт с маршрутизацией

export default class Header extends Component { //название класса только с заглавной буквы!
   render() {
       return(
           <header>
               <div className="container h-flex">
                    <Link to='/' className="logo">
                        <img src={logo} alt="logo"></img> 
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to='/' className="menu__links">Лента</Link>
                            </li>
                            <li>
                                <Link to='/profile' className="menu__links">Профиль</Link>
                            </li>
                        </ul>
                    </nav>
               </div>          
           </header>
       )
   }
}