import React, { Component } from 'react';
import Level from  "./level";
import Sliders from "./slider";
import Graph from './graph'
import firebase from './firebase';

class App extends Component {
  constructor()
  {
    super()
    this.state={
      level: false,
      slider: true,
      graph: false,

    }
  }
  componentDidMount(){
    firebase.database().ref('color/').once('value').then((snap)=>{
      console.log(snap.val().col , "@@@@@")
    })
  }
  Graph1 = ()=>{
    this.setState({
      level: false,
      slider: false,
      graph: true,

    })
  }
  Level1= ()=>{
    this.setState({
      level: true,
      slider: false,
      graph: false,

    })
  }
  Slider1 = ()=>{
    this.setState({
      level: false,
      slider: true,
      graph: false,

    })
  }

  render()
   {
    return (
      <div className="App" >
        {/* <Sliders/> */}
        <Level/>
         </div>
    )
  }
}

export default App;
