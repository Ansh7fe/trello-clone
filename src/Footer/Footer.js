import React from 'react';
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css"
const Footer = () => {
    const imgUrl= "data:image/svg+xml,%0A%3Csvg width='25px' height='24px' viewBox='0 0 25 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath d='M2.33514634,13.0909091 C2.80456741,17.1674997 5.87382928,20.4918664 9.91593939,21.5020963 C8.18760918,19.0069673 7.13798566,16.119686 6.87807529,13.0909091 L2.33514634,13.0909091 Z M2.33514634,10.9090909 L6.8751035,10.9090909 C7.12988231,7.89470494 8.18079774,5.00118821 9.91557751,2.49799419 C5.87364609,3.50833206 2.8045534,6.83262197 2.33514634,10.9090909 Z M22.6648537,10.9090909 C22.1954326,6.83250032 19.1261707,3.50813364 15.0840606,2.49790374 C16.8123908,4.99303266 17.8620143,7.88031403 18.1219247,10.9090909 L22.6648537,10.9090909 Z M22.6648537,13.0909091 L18.1248965,13.0909091 C17.8701177,16.1052951 16.8192023,18.9988118 15.0844225,21.5020058 C19.1263539,20.4916679 22.1954466,17.167378 22.6648537,13.0909091 Z M9.15315078,10.9090909 L15.843646,10.9090909 C15.5581939,7.94925479 14.3973512,5.12935736 12.4999751,2.78265622 C10.595448,5.13778492 9.43302782,7.96652031 9.15315078,10.9090909 Z M15.8468492,13.0909091 L9.15635402,13.0909091 C9.44180608,16.0507452 10.6026488,18.8706426 12.5000249,21.2173438 C14.404552,18.8622151 15.5669722,16.0334797 15.8468492,13.0909091 Z M12.5,24 C5.59644063,24 0,18.627417 0,12 C0,5.372583 5.59644063,0 12.5,0 C19.4035594,0 25,5.372583 25,12 C25,18.627417 19.4035594,24 12.5,24 Z' fill='white'%3E%3C/path%3E%3C/svg%3E%0A"
    const [language, setLanguage] = React.useState('');

    const handleChange = (event) => {
      setLanguage(event.target.value);
    };
    return (
        <div className="footer">
            <div className="download_container">
                <p className="download_title">Trello also works great on your smaller screen.</p>
                <div className="download_btn">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.ctfassets.net/rz1oowkt5gyp/1A08O96pP0xMdLEGWQsqFl/1bdabd473356ca3f47b6f2bc1c4dd710/app-store.svg" alt="" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.ctfassets.net/rz1oowkt5gyp/ySXuMiOD6CoFYE7olrufg/612dce982aca4bbe1218b703f8541544/play-store.svg" alt="" srcset="" />
                    </a>
                </div>
            </div>
            <div className="footer_main">
                <div className="footer_top">
                    <div className="logo footer_items">
                        <h1>Trello</h1>
                        <Link to="signup">Log In</Link>
                    </div>
                    <div className="footer_border items_border"></div>
                    <div className="about footer_items">
                        <p className="lg">About Trello</p>
                        <p className="xs">What’s behind the boards.</p>
                    </div>
                    <div className="footer_border items_border"></div>
                    <div className="jobs footer_items">
                        <p className="lg">Jobs</p>
                        <p className="xs">Learn about open roles on the Trello team.</p>
                    </div>
                    <div className="footer_border items_border"></div>
                    <div className="apps footer_items">
                        <p className="lg">Apps</p>
                        <p className="xs">Download the Trello App for your Desktop or Mobile devices.</p>
                    </div>
                    <div className="footer_border items_border"></div>
                    <div className="contact footer_items">
                        <p className="lg">Contact us</p>
                        <p className="xs">Need anything? Get in touch and we can help.</p>
                    </div>
                </div>
                <div className="footer_border"></div>
                <div className="footer_bottom">
                    <div className="footer_left">
                        <div className="language">
                        <img src={imgUrl} alt=""/>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" color="info">
                                <InputLabel id="demo-simple-select-label">English</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={language}
                                    label="Language"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>English</MenuItem>
                                    <MenuItem value={20}>English(AU)</MenuItem>
                                    <MenuItem value={30}>English(UK)</MenuItem>
                                    <MenuItem value={40}>English(Us)</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="site_settings">
                            <a href=""  target="_blank"  className="footer_item">Privacy Policy</a>
                            <a href=""  target="_blank"  className="footer_item">Terms</a>
                            <a href=""  target="_blank"  className="footer_item">Cookie Settings</a>
                            <p href=""  target="_blank"  className="footer_item">Copyright © 2022 Atlassian</p>
                        </div>
                    </div>
                    <div className="footer_right">
                        <div className="social_links">
                            <a href="" target="_blank"  className="link"><InstagramIcon /></a>
                            <a className="link"><FacebookIcon/></a>
                            <a className="link"><LinkedInIcon /></a>
                            <a className="link"><TwitterIcon /></a>
                            <a className="link"><YouTubeIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
