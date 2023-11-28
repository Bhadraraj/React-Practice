import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (    
        <div>
            <ul>
               
                <li>  <Link to='/About'>About</Link> </li>
                 <li>   <Link to='/Contact'>Contact</Link></li>
                 <li>   <Link to='/Product'>Product</Link></li>
                 <li>   <Link to='/NewProduct'>New Product</Link></li>
                
                {/* 
                 <li>
                    <Link to='/'>Home</Link>
                  

                </li> */}
            </ul>


        </div>
    )
}

export default Nav;