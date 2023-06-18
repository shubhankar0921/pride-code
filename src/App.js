import { Route, Routes } from "react-router-dom";
import './App.css';
import AddBlog from "./components/Blogs/AddBlog";
import BlogDescription from "./components/Blogs/BlogDescription";
import Blog from "./components/Blogs/Blogs";
import AddCampaign from "./components/Campaign/AddCampaign";
import Campaign from "./components/Campaign/Campaign";
import CampaignDescription from "./components/Campaign/CampaignDescription";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/campaign" element={<Campaign/>}/>
        <Route path="/add-campaign" element={<AddCampaign/>}/>
        <Route path="/description" element={<CampaignDescription/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/add-blog" element={<AddBlog/>}/>
        <Route path="/blog-description" element={<BlogDescription/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;