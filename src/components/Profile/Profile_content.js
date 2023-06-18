import React from 'react'
import "./profile_content.css"
import {signOut} from 'firebase/auth'
import {auth} from '../../config'

import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../config'
import { Link } from 'react-router-dom'

export default function Profile_content() {
    let name  = localStorage.getItem("name")
    let email  = localStorage.getItem("email")
    let authenticated = localStorage.getItem("Authenticated")
    let image = localStorage.getItem("image")

    const [list, setlist] = useState([])
    const [list_sec, setlist_sec] = useState([])
    const collection_ref = collection(db,"learn_request")

    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()

    })
 
  
  const signUserOut = () =>{
    signOut(auth).then(()=>{
    localStorage.clear()
    authenticated = false
    window.location.reload()
})}
  return (
    <div className='profile_content'>
      <div className="normal">
          <img className='user_image' src={image} alt="" />
          <h1 className='creator'>Hi  </h1>
          <h2 className='creator_details'>Name : {name}</h2>
          <h2 className='creator_details'>Your Email : {email}</h2>
          <div className="danger">
          <button className='danger_btn' onClick={signUserOut}>Log Out</button>
        </div>
      </div>
      <div className="anime"></div>
    </div>
  )
}