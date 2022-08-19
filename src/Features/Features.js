import React from 'react';
import "./feature.css";
import FeaturesCard from './FeaturesCard/FeaturesCard';
const Features = () => {
    return (
        <div className="features">
            <div className="features_intro">
                <p className="feature_title">Features to help your team succeed</p>
                <p className="desc_feature">Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
            </div>
            <div className="features_lists">
                <FeaturesCard
                    classes="features_card"
                    img="https://images.ctfassets.net/rz1oowkt5gyp/5i3P7xLMafQInZA3Fjww0c/9ed4a03c1a0b56f6b9d2553379d82a58/03A_Views_2x.png?w=1200&fm=webp"
                    desc="Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more."
                    title="The board is just the beginning"
                    option="CHOOSE A VIEW"
                    desc1="You and your team can start up a Trello board in seconds. With the ability to view board data from many different angles, the entire team stays up-to-date in the way that suits them best:"
                    l1="Use a Timeline view for project planning"
                    l2="Calendar helps with time management"
                    l3="Table view connects work across boards"
                    l4="See board stats with Dashboard, and more!"
                    lin="Learn more about views"
                />
                <FeaturesCard
                    classes="reverse"
                    img="https://images.ctfassets.net/rz1oowkt5gyp/3EWimQPxcXpP1ZxKA7xcst/0558542d2fe5d85a064f63bd300ad69d/03B_Cardback_2x.png?w=1200&fm=webp"
                    desc="Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more."
                    title="Cards contain everything you need"
                    option="DIVE INTO THE DETAILS"
                    desc1="Spin up a Trello card with a click, then uncover everything it can hold. Break down bigger card tasks into steps with file attachment previews, reminders, checklists and comments—emoji reactions included! Plus, gain powerful perspective by seeing all cards by list and status at the board level."
                    l1="Manage deadlines"
                    l2="Provide and track feedback"
                    l3="Assign tasks and hand off work"
                    l4="Connect work across apps"
                    link=""
                />
                <FeaturesCard
                    classes="features_card"
                    img="https://images.ctfassets.net/rz1oowkt5gyp/5k2NSVC3iC4VArOAep2eoA/580382c4006b75e3c87653b031398cc7/03C_Automation_2x.png?w=1200&fm=webp"
                    desc="Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team."
                    title="No-code automation"
                    option="MEET YOUR NEW BUTLER"
                    desc1="Butler uses natural language commands to automate just about any task in Trello:"
                    l1="Automate common actions like moving lists"
                    l2="Create custom buttons to build process quickly"
                    l3="Surface upcoming deadlines to the team"
                    l4="Schedule teammate assignments, and more!"
                    link="Learn more about Butler Automation"
                />
                <FeaturesCard
                    classes="reverse"
                    img="https://images.ctfassets.net/rz1oowkt5gyp/6atZtLjJGIhicHwNn5TE8p/6770581624ca55977028cce2a09ca6d2/03D_Power-ups_2x.png?w=1200&fm=webp"
                    desc="Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered."
                    title="Integrate top work tools"
                    option="POWER-UPS"
                    desc1="From Reporting to Custom Fields to your beloved software integrations—we’ve got functionalities, your favorites, and more! Such as"
                    l1="Confluence"
                    l2="Slack"
                    l3="Dropbox"
                    l4="Google Drive"
                    link="Learn more about Power-Ups"

                />
            </div>
        </div>
    )
}

export default Features
