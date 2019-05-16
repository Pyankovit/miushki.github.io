import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './BlockTitle.scss'
import left from './left.png'
import right from './right.png'




export default class BlockTitle extends Component {

  render() {
    return (
      <div className="blocktitle">
      <img src={left} alt="" />
      <h2>{this.props.label}</h2>
      <img src={right} alt="" />
      </div>
    )
  }
}

BlockTitle.propTypes={
  label: PropTypes.string,
}