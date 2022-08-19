import React from 'react'
import "./feature.css"
const Features = () => {
    
    return (
        <div className="feature">
            <div className="f_right">
                <h3>Explore the features that help your team succeed</h3>
            <div className="f_border"></div>
            <div className="f_list">
                <div className="f_card">
                    <p className="xl">Views</p>
                    <p className="s">View your team’s projects from every angle.</p>
                </div>
                <div className="f_card">
                    <p className="xl">Automation</p>
                    <p className="s">Automate tasks and workflows with Butler automation.</p>
                </div>
                <div className="f_card">
                    <p className="xl">Power-Ups</p>
                    <p className="s">Power up your teams by linking their favorite tools with Trello plugins.</p>
                </div>
                <div className="f_card">
                    <p className="xl">Templates</p>
                    <p className="s">Give your team a blueprint for success with easy-to-use templates from industry leaders and the Trello community.</p>
                </div>
                <div className="f_card">
                    <p className="xl">Integrations</p>
                    <p className="s">Find the apps your team is already using or discover new ways to get work done in Trello.</p>
                </div>
            </div>
            </div>
            <div className="f_left">
                <h3>Meet Trello</h3>
                <p className="s">Trello makes it easy for your team to get work done. No matter the project, workflow, or type of team, Trello can help keep things organized. It’s simple – sign-up, create a board, and you’re off! Productivity awaits.</p>
                <button>Check Trello</button>
            </div>

        </div>
    )
}

export default Features
