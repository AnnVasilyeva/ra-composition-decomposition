import React from 'react';

export default function Widget(props) {
    return (
        <li className={props.className}>
            <h5>{props.title}</h5>
            {props.children}
        </li>
    )

}