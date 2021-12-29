import React from 'react';
import './index.scss'

export default function LargeCard(props) {
    return (
        <div className='large-card col-12 col-md-6'>
            <div className="container m-2  py-3 d-flex flex-column justify-content-between">
            <h6>{props.header}</h6>

            {props.children}



            </div>
            

        </div>
    )
}
