import React from 'react'

export default function Cars({name, color, year}) {
    
    const colorInfo = color ? (<p>Couleur : {color}</p>) : (<p className='null'>Couleur : null</p>);
    
    const currentYear = new Date().getFullYear()
    const yearInfo = year !==  currentYear ? (<p>Age : {year}</p>) : (<p className='null'>Age : null</p>)
    
    if (name) {
        return (
            <tr>
                <td>{name}</td>
                <td>{colorInfo}</td>
                <td>{yearInfo}</td>
            </tr>
        ) 
    } else {
        return (
            <tr className='nullData'>
                <td colspan="3 " >Null data exception ...</td>
            </tr>
        )
    }

}

