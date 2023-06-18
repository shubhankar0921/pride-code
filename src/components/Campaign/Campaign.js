import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { db } from '../../config'
import "./campaign_style.css"
import { useNavigate } from "react-router-dom";



export default function Campaign() {
    const navigate = useNavigate();
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"campaign")
    let authenticated = localStorage.getItem("Authenticated")
    let email = ""
    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })
    return (
        <div className="find">
            {list.map((post) =>{
                return <div className="post">
                    <h2>{post.name}</h2>
                    <p>Location : {post.Location}</p>
                    {authenticated?
                    <button className="ask" onClick={()=>{
                        localStorage.setItem("description",post.description)
                        localStorage.setItem("campaign_name",post.name)
                        localStorage.setItem("campaign_location",post.Location)
                        localStorage.setItem("campaign_link",post.link)
                        navigate("/description");
                        window.location.reload()
                    }}>MORE</button>
                    :
                    <button className="ask" onClick={()=>{
                        navigate("/profile");
                        window.location.reload()
                    }}>MORE</button>
                }
                </div>
            })}
            <Link to="/add-campaign" className="add_teacher">START CAMPAIGN</Link>
        </div>
    )
}