import React from 'react'
import './InputOptions.css'


function InputOptions({Icon, title, color}) {
    return (
        <div className='inputOptions'>
           <Icon className='inputoptions_icon' />
           {/* style={{color:color}} u can add this insid for the color 
           you want in icons */}
           <h4>{title}</h4>
        </div>
    )
}

export default InputOptions
