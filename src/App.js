import React, { Component, useState } from 'react';
//import logo from './logo.svg';
import './App.css';



export default class Origin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  uid: props.match.params.uid,
      getcategory: [],

    }
  }

  componentDidMount() {
    const api012 = "https://backtst.herokuapp.com/api/getcategory/Vxgia2VqxUY8Tt7Xycg3yIhSzSP2"
    console.log('api ' + api012)

    fetch(api012)
      .then(res => res.json())
      .then(data => {
        this.setState({ getcategory: data })
      }).catch((error) => { console.log('erro: ' + error) });

  }

  render() {
    console.log(this.state.getcategory)
    return (
      <div className="App">
        <div className="App-header">
          API
          <br />
          {this.state.getcategory.map(get =>  (get.name))}
        </div>
      </div>

    )
  }

}

