import React, { useState } from 'react'
import AddItemForm from './form'

export default function Item(props) {
    const { name, type, flavors, _id, editItem } = props
    console.log(props)
    // const [editing, setEditing] = useState({ id: 0, toggle: false, })
    const [editToggle, setEditToggle] = useState()

    // const editToggle = (e) => {
    //     setEditing({ id: e.target.id, toggle: true, })
    // }
    // const submitEdit = (updates) => {
    //     editItem(editing.id, updates)
    //     setEditing({ id: 0, toggle: false, })
    // }
    return (

        
            <div className="menu">
                {!editToggle ? (
                    <div key={_id}>

                        <h3>Name:</h3>
                        <h1 id="nameOfItem"> {name}</h1>
                        <h2>{type}</h2>
                        {console.log(flavors)}
                        <h4>{flavors.map(flavs => {
                            return <p>{flavs}</p>
                        })}</h4>
                        <div className="itemBtn">
                            <button className="editBtn"
                                id={_id}
                                onClick={() => {
                                    setEditToggle((prevToggle) => !prevToggle)
                                }} >edit</button>
                            <button
                                // id={_id}
                                className="delBtn"
                                onClick={() => props.deleteItem(_id)} >Delete</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <AddItemForm
                            name={name}
                            flavors={flavors}
                        />
                        <button onClick={() => {
                            setEditToggle((prevToggle) => !prevToggle)
                        }}></button>


                    </div>)}
            </div>
        
    )

}
// {editing.toggle ? <addItemForm sendItem={submitEdit} /> : " "