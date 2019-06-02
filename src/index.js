import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import PaletteComponent from './components/PaletteComponent';

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text, paletteInfo
    } = this.props

    // return (
    //   <div className={styles.test}>
    //     Example Component: {text}
    //   </div>
    // )
    return (
      <PaletteComponent paletteInfo={paletteInfo} />
    )
  }
}
