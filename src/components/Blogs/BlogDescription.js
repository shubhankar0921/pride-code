import React from 'react'
import "./Blogdescription_style.css"
import ReactMarkdown from 'react-markdown'


export default function BlogDescription() {
    let description = localStorage.getItem("description")
    let campaign_name = localStorage.getItem("campaign_name")
    let campaign_author = localStorage.getItem("campaign_author")
    let campaign_photo_url = localStorage.getItem("campaign_photo_url")
    setTimeout(() => {
        localStorage.removeItem("description")
        localStorage.removeItem("campaign_name")
        localStorage.removeItem("campaign_author")
        localStorage.removeItem("campaign_photo_url")
    }, 1000);
  return (
    <div className='description_div'>
        <img src={campaign_photo_url} alt="" className="image_blog" />
        <h1 className="name">{campaign_name}</h1>
        <h2 className="location">{campaign_author}</h2>
        <p className="description"><ReactMarkdown>{description}</ReactMarkdown></p>
        
    </div>
  )
}
