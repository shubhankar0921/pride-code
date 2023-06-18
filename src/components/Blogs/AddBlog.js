import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../config'
import { useNavigate } from "react-router-dom";
import "./add_blog_style.css"


export default function AddBlog() {
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [description, setdescription] = useState("")
    const [author, setauthor] = useState("")
    const [tagline, settagline] = useState("")
    

    const email = localStorage.getItem("email")
    const owner_mail = localStorage.getItem("owner_mail")
    const authenticated = localStorage.getItem("Authenticated")
    // const name = localStorage.getItem("name")
    

    const Login_redirect = () => {
        navigate("/profile")
        window.location.reload()
    }

    const collection_ref = collection(db,"blog")
    const Sumbit =  async() =>{
        if ( name !== "" & description!=="" & author!=="" & tagline!=="" ) {
            await addDoc(collection_ref, {  name, description,author, email, tagline})
            navigate("/blog")
            window.location.reload()
        }else{
            alert("all fields are mandatory")
        }
    }

    return (
        <div className="Add">
            <div className="Container">
                <h1 className="maintitle">Write A Blog</h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5">Name of Blog : </h5>
                            <input className="input_form" type="text" placeholder="Name" onChange={(event)=>{setName(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5">Your Name : </h5>
                            <input className="input_form" type="text" placeholder="Author"  onChange={(event)=>{setauthor(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5">TagLine : </h5>
                            <input className="input_form" type="text" placeholder="Tagline for your blog" onChange={(event)=>{settagline(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5">Your Blog : </h5>
                            <textarea name="" id="textarea" placeholder='# Heading level 1
                                                                        ## Heading level 2
                                                                        ### Heading level 3
                                                                        #### Heading level 4
                                                                        ##### Heading level 5
                                                                        ###### Heading level 6
                                                                        
                                                                        **bold text**
                                                                        
                                                                        *italic text*' 
                            cols="30" rows="10" onChange={(event)=>{setdescription(event.target.value)}}></textarea>
                        </label>      
                        <a href="https://www.markdownguide.org/basic-syntax/" className='markdownlink' target="_blank">For More Information  ON Markdown Visit Here</a>

                </div>
                        {authenticated? <button id="submit-btn" onClick={Sumbit}name="action">Submit
                        </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
                        </button>}
            </div>
        </div>
    )
}