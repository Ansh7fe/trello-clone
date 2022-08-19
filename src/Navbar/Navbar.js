import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Feature from './Feature/Feature';
import MenuIcon from '@mui/icons-material/Menu';
import "./navbar.css"
const Navbar = () => {
    const [styleClass, setStyleClass] = React.useState('nav_item')
    const [isClicked, setIsClicked] = React.useState(false);
    const handleClick = () => {
        setIsClicked(prevState => !prevState);
        setStyleClass('clicked_item')
    }

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);
    return (
        <div className="header">
            <div className="navbar">

                <div className="navbar_left">
                    <div className="logo_container">
                        <h1 style={{ fontSize: "35px", fontWeight: "600", marginLeft: "4px" }}>Trello</h1>
                    </div>
                    <div className="navbar_items">
                        <button onClick={handleClick} className={styleClass}>Features</button>
                        <button className="nav_item">Solutions</button>
                        <button className="nav_item">Plans</button>
                        <button className="nav_item">Pricing</button>
                        <button className="nav_item">Resources</button>
                    </div>
                </div>
                <div className="navbar_right">
                    <Link className="sign" to="/signin">Log In</Link>
                    <button>Get Trello for free</button>
                </div>
                <button className="mobile-menu" onClick={() => setActiveMenu(!activeMenu)}> <MenuIcon /> </button>

            </div>

            {activeMenu && (
                <div className="mobile-container">
                    <div className="navbar-links">
                        <button onClick={handleClick} className={styleClass}>Features</button>
                        <button className="nav_menu">Solutions</button>
                        <button className="nav_menu">Plans</button>
                        <button className="nav_menu">Pricing</button>
                        <button className="nav_menu">Resources</button>
                        <div className="bottom_mobile">
                            <button className="free_btn">Get Trello for free</button>
                            <Link style={{
                                color: "black",
                                border: "#0164ff",
                                padding: "0 4px",
                                textAlign: "center"
                            }} className="sign" to="/signin">Log In</Link>
                        </div>

                        {/* <button className="mobile-menu" onClick={() => setActiveMenu(!activeMenu)}> <MenuIcon /> </button> */}


                    </div>

                </div>)}

            {isClicked ? <Feature /> : ""}
        </div>

    )
}

export default Navbar
