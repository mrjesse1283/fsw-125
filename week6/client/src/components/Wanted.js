import React, { useState } from 'react'
import Form from './form'

export default function Wanted(props) {
    const { firstName, lastName, _id, editBounty } = props
    const [editing, setEditing] = useState({ id: 0, toggle: false, })

    const editToggle = (e) => {
        setEditing({ id: e.target.id, toggle: true, })
    }
    const submitEdit = (updates) => {
        editBounty(editing.id, updates)
        setEditing({ id: 0, toggle: false, })
    }
    return (
        <div className="bounty">
            <h3>Name:</h3>
            <h1> {firstName} {lastName}</h1>

            <div className="bountyBtn">
                <button className="editBtn"
                    id={_id}
                    onClick={editToggle} >edit</button>
                <button 
                    // id={_id}
                    className="delBtn"
                    onClick={() => props.deleteBounty(_id)} >Delete</button>
            </div>

            { editing.toggle ? <Form sendBounty={submitEdit} /> : " "
            }
        </div>
    )

}