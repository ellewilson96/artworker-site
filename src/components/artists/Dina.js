import React, { Component } from 'react'
import dina from './images/dina.jpg'

class Dina extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div className="artist-container">
            <div className="artist-name">
              <img src={dina} alt="dina" />
            </div>
          </div>
        )
    }
}

export default Dina
