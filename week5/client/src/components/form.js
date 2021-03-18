import React, { useState } from 'react'



export default function AddBountyForm(props) {


    const initInputs = { firstName: "", lastName: "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handeSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        props.sendBounty(inputs)
        setInputs(initInputs)

    }

    return (
        <div>
            <div className="header">
                <h2>Wanted:</h2>
                <p>DEAD-OR-ALIVE</p>

            </div>

            <form onSubmit={handeSubmit} className="form">
                <input
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <button id="addBtn">Submit</button>
            </form>
        </div>
    )

}