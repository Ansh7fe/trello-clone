import React from 'react';
import {Link } from "react-router-dom"
import "./tour.css";
const Tour = () => {
    return (
        <div className="tour">
          <div className="border2"></div>  
          <div className="tour_container">
              <p className="tour_title">It’s more than work. It’s a way of working together.</p>
              <p className="tour_desc">Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
              <a href="https://trello.com/signup" target="_blank" rel="noopener noreferrer">Start doing</a>
              <img src="https://images.ctfassets.net/rz1oowkt5gyp/4uDAmFVJ3T5EL0VpoKxovF/683653bcbfe488938836e0de346dc1dd/02_Product-Hero_2x-compressed.png?w=1200&fm=webp" alt="tour"/>
          </div>
          <div className="companies_container">
              <p className="company_title">Join over 2,000,000 teams worldwide that are using Trello to get more done.</p>
              <div className="comapnies_logo">
                  <img src="https://images.ctfassets.net/rz1oowkt5gyp/7nR3kQlx8IP5mfCCBTatsy/0b3952a6be3ebb10116d62aa93be7bbb/coinbase.svg" alt=""/>
                  <img src="https://images.ctfassets.net/rz1oowkt5gyp/6VwRn7PI4zrZo84Uoa8rnt/b0ae3da34916a3ff02d26e2120efe9b8/johnDeere.svg" alt=""/>
                  <img src="https://images.ctfassets.net/rz1oowkt5gyp/5KdQPApAFJpLMv9AntiNLk/530cef2a4b56ad758c1e91fad5c3e7ac/Grand-Hyatt.svg" alt=""/>
                  <img src="https://images.ctfassets.net/rz1oowkt5gyp/2zdwHAyV1sdTRtu3VZWrnp/cdabf13fb68d433667812689add7cdc8/Google.svg" alt=""/>
                  <img src="https://images.ctfassets.net/rz1oowkt5gyp/1zdBcYqeqkDsLUfggfKFRO/a732e0001ca5153ef7195eea63ff6a3b/Visa.svg" alt=""/>
                  <img src="https://images.ctfassets.net/rz1oowkt5gyp/2Im844Kon73pvCD2ljoxeL/4073e041eb8eb961a0f9505965dec09b/Zoom.png?w=1200&fm=webp" alt=""/>
              </div>
          </div>

        </div>
    )
}

export default Tour
