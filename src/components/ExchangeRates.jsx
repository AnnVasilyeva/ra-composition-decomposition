import React from 'react';
import '../App.css';

export default function ExchangeRates(props) {
    return (
        <div className='exchangeRates-list'>
            {props.items.map(item =>
                <div className='exchangeRates-item'>
                    <div className='exchangeRates-name'>{item.name}</div>
                    <div>{item.value}</div>
                    <div className='changes'>{item.changes}</div>
                </div>
            )}
        </div>
    )

}