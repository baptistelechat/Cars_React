import {React, Component} from 'react';
import './App.css';
import Cars from './components/Cars';

import MyCars from './components/MyCars'

class App extends Component {

  state = {
    titre : 'Mes Voitures :'
  }

  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre}/>
      </div>
    );
  }
}

export default App;
