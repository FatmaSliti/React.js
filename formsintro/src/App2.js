import './App.css';
import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: "",
        }
    );

    // console.log(formData.favColor);

    function handleChange(event) {
        // setFormData(event.target.name);
        console.log(event.target)
        const { name, value, type, checked } = event.target;
        setFormData(prevState => {
            return {
                ...prevState,
                // [event.target.name]: event.target.value,
                // [name]: value,
                [name]: type === "checkbox" ? checked : value,
            }
        });
    }
    
    return (
        <form>
            <input
                type='text'
                placeholder='First Name'
                onChange={handleChange}
                name='firstName'
                value={formData.firstName}
            />
            <input
                type='text'
                placeholder='Last Name'
                onChange={handleChange}
                name='lastName'
                value={formData.lastName}
            />
            <input
                type='email'
                placeholder='email'
                onChange={handleChange}
                name='email'
                value={formData.email}
            />
            <textarea
                placeholder='comments'
                name="comments" onChange={handleChange}
                value={formData.comments}
            />
            <label htmlFor='isFriendly'>Are you friendly ?</label>
            <input
                type='checkbox'
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name='isFriendly'
            />
            <br />
            <br />

            <fieldset>
                <legend>current employment status</legend>
                <input
                    type='radio'
                    id="unemployed"
                    name='employment'
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor='unemployed'>unemployed</label>
                <br />

                <input
                    type='radio'
                    id="part-time"
                    name='employment'
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor='part-time'>Part-time</label>
                <br />

                <input
                    type='radio'
                    id="full-time"
                    name='employment'
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor='full-time'>Full-time</label>
            </fieldset>
            <br />

            <label htmlFor='favColor'>What is your favorite color?</label>
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name='favColor'
            >
                <option value="">-- Choose --</option>
                <option value="red">red</option>
                <option value="orange">orange</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="indigo">indigo</option>
                <option value="violet">violet</option>
            </select>
        </form>
    );
}

export default App;