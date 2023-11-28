import React, { useState } from 'react'

function NestedObject() {

    const [person, setPerson] = useState({
        name: 'Bhadri',
        artWork: {
            title: 'Nature',
            city: 'Nagercoil',
            image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg',
        }
    })

    const handleNameChange = (e) => {
        setPerson({
            ...person,
            name: e.target.value
        }
        )
    }
    const handleTitleChange = (e) => {
        setPerson({
            ...person,
            artWork: {
                ...person.artWork,
                title: e.target.value,
            }
        })

    }
    const handleCityChange = (e) => {
        setPerson({
            ...person,
            artWork: {
                ...person.artWork,
                city: e.target.value,
            }
        })
    }


    const handleImageChange = (e) => {

        setPerson({
            ...person,
            artWork: {
                ...person.artWork,
                image: e.target.value
            }

        })

    }
    return (
        <div>
            <form action="">

                <label htmlFor="">Name : </label>
                <input type="text" onChange={handleNameChange} value={person.name} />
                <br />
                <label htmlFor="">Title : </label>
                <input type="text" onChange={handleTitleChange} value={person.artWork.title} />
                <br />
                <label htmlFor="">City : </label>
                <input type="text" onChange={handleCityChange} value={person.artWork.city} />
                <br />
                <label htmlFor="">Image : </label>
                <input type="text" onChange={handleImageChange} value={person.artWork.image} />
                <br />


            </form>

            <h2>
                User Data
            </h2>
            <ul>
                <li>{person.name}</li>
                <li>{person.artWork.title}</li>
                <li>{person.artWork.city}</li>
                <li>
                    <img src={person.artWork.image} alt=""  style={{height:"100px"}}/>
                </li>
            </ul>
        </div>
    )
}

export default NestedObject
