import React from 'react';
import Slider from "react-slick";
import TCard from './TCard/TCard';
import "./testimonals.css";
const Testimonals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="testimonals">
            <Slider {...settings}>
          <div>
           <TCard para="Everyone loves it; it has democratized our finance function. In some ways Trello shattered hierarchy and brought us together." logo="https://images.ctfassets.net/rz1oowkt5gyp/6fuM8z1xpeF4hbcwea2bVV/9307ee47c45122c399c33b7536024bd6/ebay.svg" user="BHARATH SUNDAR" user_company=" - Finance, eBay"   type="eCommerce"/>
          </div>
          <div>
          <TCard para="Very simple to use ,great automation and keeps me on track with all I need to do.I also like that it can be shared with others" logo="https://images.ctfassets.net/rz1oowkt5gyp/II3Kz8QYmBOB2hZw2OpWa/019c22804631400fc7ed850908c5829c/egencia.svg" user="KERRY PARKER-EVANS" user_company="IT Project Manager,Egencia"  type="Travel"/>
          </div>
          <div>
          <TCard para="Trello makes it easy to keep everyone on the same page. As changes happen, the real-time updates with email notifications have been key." logo="https://images.ctfassets.net/rz1oowkt5gyp/7lYMIrJ4C3qzbliMFrounD/42b0bd6e2a60c2685289b2fdb161f208/detroit-red-wings.svg" user="HAYDON DOTSON" user_company="Sales Manager,Detorite Red Wings"  type="Sport"/>
          </div>
          <div>
          <TCard para="Now that we've switched to a remote environment, with the use of Trello, we can now limit the number of meetings we have regarding specific projects and turn to Trello for updates instead." logo="https://images.ctfassets.net/rz1oowkt5gyp/7nXolb9JdcJnMUUnrq4HGO/79745cbc1df4920d6596db73d065897a/sprout-social.svg" user="HALEY ENNES" user_company="HR Manager,Sprout Social" industry="" type="Marketing"/>
          </div>
        </Slider>

        </div>
    )
}

export default Testimonals
