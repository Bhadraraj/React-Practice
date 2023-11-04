import React from 'react';


 function SeachItem({search,setSearch}){
   return(
    <>
    <form action="" className='searchForm'  onSubmit={(e)=> e.preventDefault()}>

        <input type="text"  id='search'
         value={search} onChange={(e)=> 
         setSearch(e.target.value)}/>

        {/* <button onChange={setSearch}>Search</button>  */}
      
    </form>
    </>
   )
 }
 export default SeachItem ;