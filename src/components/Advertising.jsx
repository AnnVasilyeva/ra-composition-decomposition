import React from 'react';
import '../App.css';

export default function Advertising(props) {
    return (
        <div className='advertising'>
            <img src={props.item.icon}/>
            <div>{props.item.title}</div>
            <div>{props.item.text}</div>
        </div>
    )

}