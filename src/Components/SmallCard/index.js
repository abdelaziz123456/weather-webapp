import React from 'react';
import './index.scss'

export default function SmallCard(props) {
    let tempUnit=props.tempUnit;
    return (
        <div className='small-card col-12 col-md-4 '>
            <div className="container m-3 py-3">
                <p>{props.date}</p>

                

                <img src={require('../../weather/64x64'+props.img)} alt="" />

                <div className='d-flex justify-content-between'>
                {tempUnit ? 
                <>
                <span>{props.maxtempc} <small><sup> o</sup>c</small></span> 

                <span>{props.mintempc} <small><sup> o</sup>c</small></span> 

                </>

                
                
                : 
                
                <>
                <span>{props.maxtempf} <small><sup> o</sup>f</small></span> 

                <span>{props.mintempf} <small><sup> o</sup>f</small></span> 

                </>
                }

                </div>

                


            </div>
        </div>
    )
}
