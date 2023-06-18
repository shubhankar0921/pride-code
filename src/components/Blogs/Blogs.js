import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { db } from '../../config'
import "./blog_style.css"
import { useNavigate } from "react-router-dom";



export default function Blog() {
    const navigate = useNavigate();
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"blog")
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
                    <p>{post.tagline}</p>
                    <h3>{post.author}</h3>
                    {authenticated?
                    <button className="ask" onClick={()=>{
                        localStorage.setItem("description",post.description)
                        localStorage.setItem("campaign_name",post.name)
                        localStorage.setItem("campaign_author",post.author)
                        localStorage.setItem("campaign_image_url",post.image_url)
                        navigate("/blog-description");
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
            <Link to="/add-blog" className="add_teacher">ADD BLOG</Link>
            <img src="" alt="" />
        </div>
    )
}
