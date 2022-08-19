import React from 'react'
import "./hero.css";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import {Link} from "react-router-dom"
const Hero = () => {
    return (
        <div className="hero">
            <div className="left_container">
                <p className="title">Trello helps teams move work forward.</p>
                <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
                <div className="email">
                    <form action="">
                        <input type="email" name="" id="" placeholder="Email"/>
                        <Link className="signin" to="/">Sign up-it's free</Link>
                    </form>
                   <a href="https://www.youtube.com/watch?v=tVooja0Ta5I" target="_blank" rel="noopener noreferrer">
                       <div className="item">
                           <p style={{fontSize:"17px",marginTop:"1.5em",marginLeft:"6px",color:"#5483db",textDecorationColor:"#5483db"}}>Watch video</p>
                            <PlayCircleOutlinedIcon />
                       </div>
                   </a>
                </div>
            </div>
            <div className="right_container">
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/2MToLtZAVoBYDpz18IJKB8/11524ea94eb3e8ee425f39b78a7ed8af/01_Hero_2x.png?w=1200&fm=webp" alt=""/>
            </div>
            
        </div>
    )
}

export default Hero
