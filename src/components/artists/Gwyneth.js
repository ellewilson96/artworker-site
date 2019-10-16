import React, { Component } from 'react'
import gwyneth from './images/gwyneth.jpg'

class Gwyneth extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div className="artist-container">
            <div className="artist-name">
              <img src={gwyneth} alt="gwyneth" />
            </div>
          </div>
        )
    }
}

export default Gwyneth
