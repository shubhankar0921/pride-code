import React from 'react'
import "./CampaignDescription_style.css"

export default function CampaignDescription() {
    let description = localStorage.getItem("description")
    let campaign_name = localStorage.getItem("campaign_name")
    let campaign_location = localStorage.getItem("campaign_location")
    let campaign_link = localStorage.getItem("campaign_link")
    setTimeout(() => {
        localStorage.removeItem("description")
        localStorage.removeItem("campaign_name")
        localStorage.removeItem("campaign_location")
        localStorage.removeItem("campaign_link")
    }, 1000);
  return (
    <div className='description_div'>
        <h1 className="name">{campaign_name}</h1>
        <h2 className="location">{campaign_location}</h2>
        <p className="description">{description}</p>
        
        <a className='link' target="_blank" href={campaign_link}>Important Link</a>
    </div>
  )
}


