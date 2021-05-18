import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase/config';

function Header() {
    const [{ basket, user }] = useStateValue();
     
    const login =() => {
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
           <Link to="/">
           <img 
                className="header__img" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
            /> 
           </Link>
            <div className="header__search">
                <input className="header__input" type="text" />
                <SearchIcon className="header__searchicon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionone">Hello User</span>
                        <span className="header__optiontwo">{user ? "signout" : "signin"}</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionone">return</span>
                        <span className="header__optiontwo">& order</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionone">your</span>
                        <span className="header__optiontwo">prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionbasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optiontwo header__basketcount">{basket.length}</span>
                    </div>
                </Link>
            </div>
           
        </nav>
    )
}

export default Header
