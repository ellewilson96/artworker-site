import React, { Component } from 'react'
import maya from './images/maya.jpg'

class Maya extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div className="artist-container">
            <div className="artist-name">
              <img src={maya} alt="maya" />
            </div>
          </div>
        )
    }
}

export default Maya
