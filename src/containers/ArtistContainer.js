import React, { Component } from 'react'
import Artists from '../components/Artists.js'

class ArtistContainer extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div className="content">
          <Artists />
          </div>
        )
    }
}

export default ArtistContainer
