import React, { Component } from 'react';
import firebase from './firebase';
var e;
var f;
var h;
class Level extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array1: ["EMPTY"],
      arrayh: [{ 1: 1 }],
      arrayf: [{ 1: 1 }],
      arraE: [{ 1: 1 }],
      array: ""
    }
  }
  getData1 = () => {
    if (this.state.array1[0] === "Full") {
      document.getElementById("h1").style.color = "red"
      document.getElementById("full").style.color = "red"
      document.getElementById("full1").style.backgroundColor = "red"
      document.getElementById("half1").style.backgroundColor = "yellow"
      document.getElementById("empty1").style.backgroundColor = "Green"
      document.getElementById("half").style.color = "black"
      document.getElementById("empty").style.color = "black"     

    }

    else if (this.state.array1[0] === "HALF") {
      document.getElementById("h1").style.color = "yellow"
      document.getElementById("half").style.color = "yellow"
      document.getElementById("half1").style.backgroundColor = "yellow"
      document.getElementById("empty1").style.backgroundColor = "Green"
      document.getElementById("full1").style.backgroundColor = "gray"
      document.getElementById("empty").style.color = "black"
      document.getElementById("full").style.color = "black"
     
    }

    else if (this.state.array1[0] === "EMPTY") {
      document.getElementById("h1").style.color = "Green"
      document.getElementById("empty").style.color = "Green"
      document.getElementById("empty1").style.backgroundColor = "Green"
      document.getElementById("full1").style.backgroundColor= "gray"
      document.getElementById("half1").style.backgroundColor= "gray"
      document.getElementById("half").style.color = "black"
      document.getElementById("full").style.color = "black"
    }
    else {
      console.log("not show")
    }
  }
  valueupdate = () => {
    var b = this.state.arrary1

    this.setState({
      array: b
    })
  }
  getData = () => {
    // checking level 

    const { array1, pic, arraE, arrayf, arrayh } = this.state
    firebase.database().ref('color/').once('value').then((snapshort) => {
      console.log("snapshort.val().col ", snapshort.val().col)
      array1.unshift(snapshort.val().col)
      var q=array1.splice(2,array1.length)
      console.log(this.state.array1, "ARRAY")
      if (this.state.array1[0] === "HALF") {
        console.log("if chal raha hai")
      }
      else
        console.log("nulllll")
      this.setState({
        //pic: true
      })

    })
    // get half Array


  }
  componentWillMount() {
    const { array1, pic, arraE, arrayf, arrayh } = this.state
    firebase.database().ref('color/').once('value').then((snapshort) => {
      console.log("snapshort.val().col ", snapshort.val().col)
      array1.unshift(snapshort.val().col)
      console.log(this.state.array1, "ARRAY")
    })
    // get half Array
    setInterval(this.getData, 5000);
    setInterval(this.deletedata, 86400000);
    this.state.array1.map((item, index) => {
      console.log(item, index, "item + index  ")
      return <li>{item}</li>
    })

    firebase.database().ref('message/half').once('value').then((snapshort) => {
      arrayh.push(snapshort.val())
      console.log(arrayh)

      var res = arrayh.map(function (v) {
        console.log(Object.keys(v).length);
        h = Object.keys(v).length
        return Object.keys(v).length;
      });
    })
    firebase.database().ref('message/full').once('value').then((snapshort) => {
      arrayf.push(snapshort.val())
      console.log(arrayf)
      var res = arrayf.map(function (v) {
        console.log(Object.keys(v).length);
        f = Object.keys(v).length
        return Object.keys(v).length;

      });
    })
    firebase.database().ref('message/empty').once('value').then((snapshort) => {
      arraE.push(snapshort.val())
      console.log(arraE)
      var res = arraE.map(function (v) {
        console.log(Object.keys(v).length);
        e = Object.keys(v).length
        return Object.keys(v).length;
      });
    })

    //    console.log(this.props,"this.props.arr[0]")
    setInterval(this.getData1, 2000);
    setInterval(this.valueupdate, 1000);

  }
  render() {
    const { array1 } = this.state
    return (
      <div className="App" style={{ position: "relative", left: "30%" }}>
        <h1 id="h1" style={{ color: "white" }}>
          Dusbin is    {array1[0]}
        </h1>
        <div >
          <h1 style={{ display: "inline-block" }} id="full">FULL</h1>
          <div  id="full1" style={{ width: "30px", height: "30px", borderRadius: "100%", border: "3px solid black", backgroundColor: "gray", display: "inline-block", position: "relative", left: "05%" }}></div>
        </div>
        <div >
          <h1 style={{ display: "inline-block" }} id="half">HALF</h1>
          <div id="half1"  style={{ width: "30px", height: "30px", borderRadius: "100%", border: "3px solid black", backgroundColor: "gray", display: "inline-block", position: "relative", left: "04.8%" }}>
          </div>
        </div>
        <div >
          <h1 style={{ display: "inline-block" }} id="empty">Empty</h1>
          <div   id="empty1" style={{ width: "30px", height: "30px", borderRadius: "100%", border: "3px solid black", backgroundColor: "gray", display: "inline-block", position: "relative", left: "04.2%" }}>

          </div>
        </div>
      </div>
    );
  }
}

export default Level;
