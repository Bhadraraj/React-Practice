import React from 'react';
import '../style/userCard.css';

function UserCard() {
    const UserDetail = [
        {
            id: 1,
            userName: "Gopal Ram",
            age: 35,
            skill: "Php",
        },
        {
            id: 2,
            userName: "Vijay",
            age: 32,
            skill: "React Js ",
        },
        {
            id: 3,
            userName: "Siva Karthikeyan",
            age: 28,
            skill: "Angular",
        },
        {
            id: 4,
            userName: "Bhadri",
            age: 22,
            skill: "Vue Js",
        }
    ]
    return (
        <>
<div className="mainCard">
    {UserDetail.map(a=>(
       
  
    <div className="card" key={ a.id}>
        <p className="username"><b>Name : </b>{a.userName}</p>
        <p className="age"><b>Age :</b> {a.age}</p>
        <p className="skills"><b>Skills :</b> {a.skill}</p>
    </div>
      ))}

    
</div>
<button className="blue">Blue</button>

<button className="red">Red</button>
<button className="orange">Orange</button>
<button className="grey">Grey</button>
{/* <button className=""></button> */}
        </>
    )
}
export default UserCard;