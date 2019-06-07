import React, { Component } from 'react'
import jermain from './images/jermain.jpg'

class Jermain extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div className="artist-container">
            <div className="artist-name">
              <img src={jermain} alt="jermain" />
            </div>
          </div>
        )
    }
}

export default Jermain
