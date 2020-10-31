import React from 'react'

export default function Cars({children, color}) {
    
    const colorInfo = color ? (<p>Couleur : {color}</p>) : (<p style={{color:"firebrick", fontWeight:'bolder'}}>Couleur : null</p>);
    
    if (children) {
        return (
            <div style={{backgroundColor : 'lightblue', width : '400px', padding: '10px', margin : '5px auto'}}>
                <p>Marque : {children}</p>
                {colorInfo}
            </div>
        ) 
    } else {
        return (
            <div style={{backgroundColor : 'seashell', width : '400px', padding: '10px', margin : '5px auto'}}>
                <p>Null data exception</p>
            </div>
        )
    }

}

