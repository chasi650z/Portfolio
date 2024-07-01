import React from "react";
import './SkillCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCard = ({title, iconUrl, isActive, onClick}) => {
    const color = "#7e61e7";
    
    return (
        <div 
            className={`skills-card ${isActive ? "active": " "}`}
            onClick = {() => onClick()}>

                <div className="skill-icon">
                    <FontAwesomeIcon icon={iconUrl} size="4x" style={{ color: color }}  />
                </div>

                <span>
                    {title}
                </span>
        </div>
    )
}

export default SkillCard