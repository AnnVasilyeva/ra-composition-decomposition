import React from 'react';
import '../App.css';

export default function WidgetList(props) {
    return (
        <ul className='widget-list'>{props.children}</ul>
    )

}