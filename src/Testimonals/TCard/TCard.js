import React from 'react'
import "./card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
const TCard = ({para,user,user_company,type,logo}) => {
    return (
        <div className="tcard">
            <div className="quotes">
            <img src="data:image/svg+xml,%3Csvg fill='none' height='31' viewBox='0 0 33 31' width='33' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m32.4 24.1002c0-3.7-2.5-6-6.3-6h-2c.3-7.2 4.1-10.5 8.8-11.30001v-6.599995c-9.3.999995-14.3 7.499995-14.3 18.400005 0 8.6 2.9 11.7 7.5 11.7 3.9 0 6.3-2.7 6.3-6.2zm-18.5 0c0-3.7-2.5-6-6.29999-6h-2c.3-7.2 4.1-10.5 8.79999-11.30001v-6.599995c-9.29999.999995-14.299994 7.499995-14.299994 18.400005 0 8.6 2.900004 11.7 7.500004 11.7 3.89999 0 6.29999-2.7 6.29999-6.2z' fill='%2300a3bf'/%3E%3C/svg%3E" alt="commas"/>
                <p>{para}</p>
            </div>
            <div className="bottom_card">
           <p><strong>{user}</strong>- {user_company}</p>
            <p>Industry:<strong>{type}</strong> </p>
                <div className="company_logo">
                <img src={logo} alt="logo" width="300" height="120" loading="lazy" className="logo_company"/>
                </div>
            </div>
        </div>
    )
}

export default TCard
