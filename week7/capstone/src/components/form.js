import React, { useState } from 'react'



export default function AddItemForm(props) {
console.log(props)
const {sendItem} = props

    const initInputs = { name: props.name || "", type: props.type || "", flavors: props.flavors || [], flavor: "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handeSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        sendItem(inputs, props.id)
        setInputs(initInputs)

    }
    function handleFlavors(e) {
        e.preventDefault();
        setInputs((prevInputs) => ({
            ...prevInputs, flavors: [...prevInputs.flavors, prevInputs.flavor]
        }))
    }

    return (
        <div>
            <div className="header">
                <h2>Food Choices</h2>
                <h5>What are you craving</h5>
            </div>

            <form onSubmit={handeSubmit} className="form">
                <input
                    type="text"
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                    placeholder="Choose one"
                />
                <div>

                    <input
                        type="text"
                        name="flavor"
                        value={inputs.flavor}
                        onChange={handleChange}
                        placeholder="Pick a topping"
                    />
                    <button
                        className="addFlav"
                        onClick={handleFlavors}>Flavor</button>
                </div>
                <button className="addBtn">Submit</button>
            </form>

        </div>
    )

}