import React from 'react';
import { Link, Outlet } from 'react-router-dom'

function NewProduct() {
    return (
        <div>
            <h4>NewProduct </h4>
            <ul>
                <li> <Link to='/NewProduct/1'> Product 1 </Link></li>
                <li> <Link to='/NewProduct/2'> Product 2 </Link></li>
            
            <li> <Link to='/NewProduct/3'> Product 3 </Link></li>
         
            {/* <Outlet/>   */}
               </ul>
        </div>
    )
}

export default NewProduct;