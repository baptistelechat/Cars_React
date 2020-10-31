import {React, Component} from 'react'
import Car from './Cars'

class MyCars extends Component {
    
    noCopy = () => {
        alert('Merci de ne pas copier le texte');
    }

    addHoverEffect = (e) => {
        e.target.classList.toggle('hover');
    }

    changeTitle = (e) => {

    }



    render() {
        return (
            <div>
                <h1 onMouseOver={this.addHoverEffect}>{this.props.title}</h1>
                <p onCopy={this.noCopy}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <Car color='red'>Citroën</Car>
                <Car color='yellow'>Renault</Car>
                <Car >Peugeot</Car>
                <Car ></Car>
                <Car color='white'>Toyota</Car>
                <button>Changer le titre "en dur"</button>
            </div> 
        )
    }
}

export default MyCars;