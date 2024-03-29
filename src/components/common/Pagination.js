import React from "react";
// import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from "lodash"; 
const Pagination = props => {

    const {itemsCount,pageSize,onPageChange,currentPage} = props;
    console.log(currentPage)

    const PagesCount = Math.ceil(itemsCount / pageSize);

    //console.log(PagesCount)

    const pages = _.range(1,PagesCount + 1)

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page =>(
<li key={page} className={page === currentPage ? 'page-item active':'page-item'} >
                <a className="page-link" onClick={()=>onPageChange(page)}  href="/#">
                {page}</a>
                </li>
                ))}
            </ul>
        </nav>
    )
}

// Pagination.propTypes = {
//     itemsCount:PropTypes.number.isRequired,
//     pageSize:PropTypes.number.isRequired,
//     onPageChange:PropTypes.func.isRequired,
//     currentPage:PropTypes.number.isRequired
// }


export default Pagination