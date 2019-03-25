import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cls from './BlockTitle.scss'





export default class BlockTitle extends Component {

  render() {
    return (
      <div className={cls.blocktitle}>
        <h2>{this.props.label}</h2>
      </div>
    )
  }
}

BlockTitle.propTypes={
  label: PropTypes.string,
}