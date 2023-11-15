import React from 'react'

const Map = () => {
    let userList = [
        {
            id:1,
            userName: "Bhadri",

        },
        {
            id:2,
            userName: "Gopal Ram",

        },
        {
            id:3,
            userName: "Ramu",

        }
    ]
    return (
        <>
        <div className="mapList">
            {userList.map(user,index=>{
                <li key ={index}>
                    {user.userName}
                </li>
            })}
        </div>

        </>
    )
}

export default Map
