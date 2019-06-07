import React, { Component } from 'react'
import chris from './images/chris.jpg'

class Chris extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div className="artist-container">
            <div className="artist-name">
              <img src={chris} alt="chris" />
            </div>
          </div>
        )
    }
}

export default Chris
