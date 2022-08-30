import React from 'react';
import './Header.css';
//import SearchIcon from '@mui/icons-material/Search';
//import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
                />
            </Link>

            <div
            className="header__search">
                <input
                className="header__searchInput"/>
                {/* logo */}
                {/* <SearchIcon
                className="header__searchIcon" /> */}
                {/* <i class="fas fa-search" id="fas__fa-searchIcon"></i> */}
                <FontAwesomeIcon 
                className="header__searchIcon" 
                icon={faSearch} />
            </div>

            <div
            className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionOne">
                            hello {!user ? 'Guest' : user.email}
                        </span>
                        <span className="header__optionTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionOne">
                        Returns
                    </span>
                    <span className="header__optionTwo">
                        Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionOne">
                        Your
                    </span>
                    <span className="header__optionTwo">
                        Price
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        {/* <ShoppingBasketIcon /> */}
                        {/* <i class="fas fa-shopping-basket"></i> */}
                        <FontAwesomeIcon 
                        icon={faShoppingCart} />
                        <span 
                            className="header__optionTwo header__basketCount">
                            {cart?.length}
                        </span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header
