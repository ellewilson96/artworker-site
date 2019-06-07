import React, { Component } from 'react'
import heidi from './images/heidi.jpg'

class Heidi extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div className="artist-container">
            <div className="artist-name">
              <img src={heidi} alt="heidi" />
            </div>
          </div>
        )
    }
}

export default Heidi
