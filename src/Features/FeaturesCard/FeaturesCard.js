import React ,{useState}from 'react';
import "./index.css";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';



const FeaturesCard = ({classes,img,title,desc,option,desc1,l1,l2,l3,l4,link}) => {
    const [isReadMore, setIsReadMore] = useState(false);
    const handleClick=()=>{
        setIsReadMore(prevState=>!prevState);
    }
    return (
        <div className={classes}>
            <div className="features_right">
                <img src={img} alt="logo"/>
            </div>

            <div className="features_left">
                <p className="option">{option}</p>
                <h1>{title}</h1>
                <p className="feature_desc">{desc}</p>
                <button onClick={handleClick}>
                    <div className="item">
                        {isReadMore ?<RemoveOutlinedIcon /> :<AddOutlinedIcon />}
                        <h2>Learn More</h2>
                    </div>
                </button>
                
                {
                    isReadMore ? <div className="learn_more">
            <p className="intro_para">{desc1}</p>

            <div className="lists">
                <ul>
                <li>{l1}</li>
                <li>{l2}</li>
                <li>{l3}</li>
                <li>{l4}</li>
                </ul>
            </div>
            <a style={{color:"#1158ce",fontWeight:"500"}} href="https://trello.com/views" target="_blank" rel="noopener noreferrer">{link}</a>
            </div>
                     : ""
                }
                
            </div>
        </div>
    )
}

export default FeaturesCard
