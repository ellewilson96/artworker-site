import React, { Component } from 'react'
import Employees from './Employees';
import Employers from './Employers';
import '../styles/Contact.css';


class Contact extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <div className="content">
            <div>
              <Employees />
            </div>
            <div>
              <Employers />
              </div>
          </div>
        )
    }
}

export default Contact
