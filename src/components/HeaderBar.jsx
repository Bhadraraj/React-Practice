import React from 'react';
import '../style/header.css';


const HeaderBar = () => {
    return (
        <>

            <header>
                <div className="logo"> Logo </div>
                <div className="location">
                    <p>Deliver to </p>
                    <h3>
                    Neyyoor 629802
                    </h3>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search' />
                </div>

                <div className="notifi"> 🔔</div>
                <div className="acc">
                    <p>Hello Login</p>
                    <h3>My Account </h3>
                </div>
                <div className="cart">
                    <h3> Cart</h3>
                </div>


            </header>



            <nav>
                <ul className='navBarList'>
                    <li>
                        <a href="#">Categories</a>
                    </li>
                    <li>
                        <a href="#">Hot Deals 🔥</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Shop</a>
                    </li>
                    <li>
                        <a href="#">Vendors</a>
                    </li>
                    <li>
                        <a href="#">Mega Menu</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Pages </a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>

        </>
    )
}


export default HeaderBar
