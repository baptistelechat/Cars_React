import React from 'react'

export default function Cars({name, color, year}) {
    
    const colorInfo = color ? (<p>Couleur : {color}</p>) : (<p className='null'>Couleur : null</p>);
    
    const currentYear = new Date().getFullYear()
    const yearInfo = year !==  currentYear ? (<p>Age : {year}</p>) : (<p className='null'>Age : year null</p>)
    
    if (name) {
        return (
            <div style={{backgroundColor : 'lightblue', width : '400px', padding: '10px', margin : '5px auto'}}>
                <p>Marque : {name}</p>
                {colorInfo}
                {yearInfo}
            </div>
        ) 
    } else {
        return (
            <div style={{backgroundColor : 'antiquewhite', width : '400px', padding: '10px', margin : '5px auto'}}>
                <p>Null data exception ...</p>
            </div>
        )
    }

}

