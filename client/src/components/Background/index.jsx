import React from 'react';
import "./style.css";

export default function Background (props) {
    return (
        <div className="bookBg">
            {props.children}
            
        </div>
    )
}
