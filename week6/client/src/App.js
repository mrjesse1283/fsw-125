import React, { useState, useEffect } from 'react'
import "./index.css"
import axios from 'axios'
import Wanted from './components/Wanted.js'
import AddBountyForm from './components/form.js'



export default function App() {
  const [bounties, setBounties] = useState([])

  //get
  function getBounty() {
    axios
      .get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }
  //post
  function addBounty(newBounty) {
    axios
      .post("/bounties", newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }
  //put
  function editBounty(id, updates) {
    console.log("in app ", id, updates)
    axios
      .put(`/bounties/${id}`, updates)
      .then(res => {
        console.log(res.data)
        let newBounties = bounties.map(bounty => {
          return bounty._id === id ? Object.assign(bounty, updates) : bounty
        })
        setBounties(() => [...newBounties])
      })
      .catch()
  }

  // delete
  function deleteBounty(bountyId) {
    axios
      .delete(`./bounties/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }



  useEffect(() => {
    getBounty()

  }, [])
  return (
    <div>
      <div className="container">
        <header className="header">
          <AddBountyForm
            sendBounty={addBounty}
          />
        </header>
      </div>
      <div className="newB">
        {
          bounties.map(bounty =>
            <Wanted
              {...bounty}
              key={bounty._id}
              editBounty={editBounty}
              deleteBounty={deleteBounty}
            />)

        }
      </div>
      <footer id="footer">
        web Dev 2021
      </footer>
    </div>
  );
}
