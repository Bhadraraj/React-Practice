import React, { useState } from 'react';

function FormObject() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const changeFirstName = (e) => {
        setForm({
            ...form,   // copying the existing states 
            firstName: e.target.value, //updating only the necessary property 
        });
    };

    const changeLastName = (e) => {
        setForm({
            // ...form,
            lastName: e.target.value,
        });
    };

    const changeEmail = (e) => {
        setForm({
            // ...form,
            email: e.target.value,
        });
    };

    return (
        <div>
            <form>
                <label htmlFor="name">Name : </label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => changeFirstName(e)}
                    value={form.firstName}
                />
                <br />
                <label htmlFor="lname">Last Name : </label>
                <input
                    type="text"
                    id="lname"
                    onChange={(e) => changeLastName(e)}
                    value={form.lastName}
                />
                <br />
                <label htmlFor="email">Email : </label>
                <input
                    type="text"
                    id="email"
                    onChange={(e) => changeEmail(e)}
                    value={form.email}
                />
                <br />

                <h3>User Details</h3>
                <ul>
                    <li>
                        {form.firstName.length === 0 ? (
                            <p>Please Enter First Name</p>
                        ) : (
                            form.firstName
                        )}
                    </li>
                    <li>
                        {form.lastName.length === 0 ? (
                            <p>Please Enter Last Name</p>
                        ) : (
                            form.lastName
                        )}
                    </li>


                    <li>
                        {form.email.length === 0 ? (<p> Please Enter Email </p>): (form.email)}
                    </li>
                  
                </ul>
            </form>
        </div>
    );
}

export default FormObject;
