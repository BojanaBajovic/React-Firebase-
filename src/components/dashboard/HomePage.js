import React, { Component } from 'react'
import picture3 from '../../assets/picture3.gif'



class HomePage extends Component {
  render() {
    return (
      <div className="slika">
      <img src={picture3} alt="Slika" style={{width: '50%', height: '50%', alignSelf: 'center'}} />
      <img src={picture3} alt="Slika" style={{width: '50%', height: '50%', alignSelf: 'center'}} />
      </div>
    )
  }
}

export default HomePage