import React, { Component } from 'react'
import brandon from './images/brandon.jpg'

class Brandon extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div className="artist-container">
            <div className="artist-name">
              <img src={brandon} alt="brandon" />
            </div>
          </div>
        )
    }
}

export default Brandon
