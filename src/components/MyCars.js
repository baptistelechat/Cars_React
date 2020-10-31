import {React, Component} from 'react'
import Car from './Cars'

class MyCars extends Component {
    
    state = {
        voitures: [
            {name: 'Renault', color: 'jaune', year: 2000},
            {name: 'Citroen', color: 'rouge', year: ''},
            {name: 'Peugeot', color: '', year: ''},
            {name: '', color: '', year: ''},
        ],

        titre : 'Mes Voitures'

    }

    noCopy = () => {
        alert('Merci de ne pas copier le texte');
    }

    addHoverEffect = (e) => {
        e.target.classList.toggle('hover');
    }

    addOneYear = () => {
        const updateState = this.state.voitures.map((param) => {
            
            if (param.year != '') {
                return param.year -= 1
            } else {
                return param.year -= 0
            }
        })
        
        this.setState({
            updateState
        })
    }


    render() {

        const year = new Date().getFullYear();

        return (
            <div>
                <h1 onMouseOver={this.addHoverEffect}>{this.state.titre}</h1>
                <p onCopy={this.noCopy}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                <button onClick={this.addOneYear}>+ 1 ans</button>

                {
                    this.state.voitures.map((voiture, index) => {
                        return(
                           <Car key={index} name={voiture.name} color={voiture.color} year={year - voiture.year}/>
                        )
                    })
                }

            </div> 
        )
    }
}

export default MyCars;