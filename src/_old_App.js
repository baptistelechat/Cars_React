import {React, Component} from 'react';
import './App.css';
import MyCars from './components/MyCars'

class App extends Component {

  state = {
    titre : 'Mes Voitures'
  }

  changeTitleDefault = () => {
    this.setState({
        titre : 'Mes Voitures'
    })
  }

  changeTitleSimple = () => {
    this.setState({
        titre : 'Mes Voitures (En dur)'
    })
  }

  changeTitleParam = (titre) => {
    this.setState({
      titre : titre
    })
  }

  changeTitleBind = (param) => {
    this.setState({
      titre : param
    })
  }

  changeTitleInput = (e) => {  
    this.setState({
      titre : e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre}/>

        <button onClick={this.changeTitleDefault}>Changer le titre (Défaut)</button>
        <button onClick={this.changeTitleSimple}>Changer le titre (En Dur)</button>
        <button onClick={() => this.changeTitleParam('Mes Voitures (Via Paramètre)')}>Changer le titre (Via Param)</button>
        <button onClick={this.changeTitleBind.bind(this, 'Mes Voitures (Via Bind)')}>Changer le titre (Via Bind)</button>

        <input type="text" onChange={this.changeTitleInput} value={this.state.titre}/>
      </div>
    );
  }
}

export default App;
