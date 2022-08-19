import React from 'react'
import Cards from './Cards/Cards'
import "./introduction.css"
const Introduction = () => {
    return (
        <div className="introduction">
          <div className="border"></div>  
          <div className="cards_container">
          <Cards image="https://images.ctfassets.net/rz1oowkt5gyp/2ozLp25HsHeANpiNqAwzGI/d60a017d2f214c28f774b35d03499782/tag.svg" title="See Trello pricing" desc="Whether you’re a team of 2 or 2,000, Trello can be customized for your organization. Explore which option is best for you." button="Compare pricing" link="/pricing" />
          <Cards image="https://images.ctfassets.net/rz1oowkt5gyp/6rRWTcHzPKupQ3ZDqBaxu6/aecd045f4b31a92288a85bdb4a9dfe2c/compass.svg" title="What is Trello?" desc="Trello is the visual tool that empowers your team to manage any type of project, workflow, or task tracking." button="Tour Trello" link="/tour"/>
          <Cards image="https://images.ctfassets.net/rz1oowkt5gyp/5AE4nXLOennRxmmUMcgMLM/747e96bdd16cf4113e4ef867bd85fd29/solutions.svg" title="Discover Trello Enterprise" desc="The productivity tool teams love, paired with the features and security needed for scale." button="Learn More" link="/learn" />

          </div>
          
        </div>
    )
}

export default Introduction
