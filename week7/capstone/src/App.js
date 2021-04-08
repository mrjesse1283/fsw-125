import React, { useState, useEffect } from 'react'
import "./index.css"
import axios from 'axios'
import Item from './components/menu.js'
import AddItemForm from './components/form.js'
// import { search } from '../../server/routes/router'



export default function App() {
  const [menu, setMenu] = useState([])
  const [searchKey, setSearchKey] = useState("")

  //get
  function getItem() {
    axios
      .get("/menu")
      .then(res => setMenu(res.data))
      .catch(err => console.log(err))
  }
  //post
  function addItem(newItem) {
    axios
      .post("/menu", newItem)
      .then(res => {
        setMenu(prevItems => [...prevItems, res.data])
      })
      .catch(err => console.log(err))
  }
  //put
  function editItem(id, updates) {
    console.log("in app ", id, updates)
    axios
      .put(`/menu/${id}`, updates)
      .then(res => {
        console.log(res.data)
        let newItem = menu.map(item => {
          return item._id === id ? Object.assign(item, updates) : menu
        })
        setMenu(() => [...newItem])
      })
      .catch()
  }

  // delete
  function deleteItem(menuId) {
    axios
      .delete(`./menu/${menuId}`)
      .then(res => {
        setMenu(prevItem => prevItem.filter(item => item._id !== menuId))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getItem()

  }, [])
  return (
    <div>
      <div className="container">
        <header className="header">
          <AddItemForm           
            sendItem={addItem}
          />
        </header>
      </div>
      <div id="searchBar">
        <input id="search"
          type="text"
          placeholder="key Word"
          onChange={(e) => {
            setSearchKey(e.target.value)
          }} />
      </div>
      <div className="newFood">

        {menu
        
          .filter((x) => {
            if (searchKey === "") {
              return x
            } else if
              (x.type.toLowerCase() === searchKey.toLowerCase()) {
              return x
            }

          })
          .map(menu =>
            <Item
              {...menu } 
              key={menu._id}
              editItem={editItem}
              deleteItem={deleteItem}
            />)

        }
      </div>
      
      <footer id="footer">
        <hr/>
        Thank you for choosing cafe de la Yo Momma house
      </footer>
    </div>
  );
}
