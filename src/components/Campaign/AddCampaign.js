import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../config'
import { useNavigate } from "react-router-dom";
import "./add_campaign_style.css"


export default function AddCampaign() {
    const navigate = useNavigate();

    const [Location, setLocation] = useState("")
    const [name, setName] = useState("")
    const [description, setdescription] = useState("")
    const [link, setlink] = useState("")
    

    const email = localStorage.getItem("email")
    const owner_mail = localStorage.getItem("owner_mail")
    const authenticated = localStorage.getItem("Authenticated")
    // const name = localStorage.getItem("name")
    

    const Login_redirect = () => {
        navigate("/profile")
        window.location.reload()
    }

    const collection_ref = collection(db,"campaign")
    const Sumbit =  async() =>{
        if (Location !=="" & name !== "" & description!=="" & link!=="" ) {
            await addDoc(collection_ref, { Location, name, description,link, email})
            navigate("/campaign")
            window.location.reload()
        }else{
            alert("all fields are mandatory")
        }
    }

    return (
        <div className="Add">
            <div className="Container">
                <h1 className="maintitle">Organise A Campaign!</h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5">Name of Campaign : </h5>
                            <input className="input_form" type="text" placeholder="Name" name="Location" id="Location" onChange={(event)=>{setName(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5">Location : </h5>
                            <input className="input_form" type="text" placeholder="Location or ONLINE" name="Location" id="Location" onChange={(event)=>{setLocation(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5">Important Links : </h5>
                            <input className="input_form" type="text" placeholder="Links" name="Location" id="Location" onChange={(event)=>{setlink(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5">Description : </h5>
                            <textarea name="" id="textarea" cols="30" rows="10" onChange={(event)=>{setdescription(event.target.value)}}></textarea>
                        </label>      
                </div>
                        {authenticated? <button id="submit-btn" onClick={Sumbit}name="action">Submit
                        </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
                        </button>}
            </div>
        </div>
    )
}