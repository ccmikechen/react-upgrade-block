import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.css'

export default class ReactUpgradeBlock extends Component {
  static propTypes = {
    size: PropTypes.number,
    image: PropTypes.any,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    buttonSize: PropTypes.number,
    buttonImage: PropTypes.string,
    buttonColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    buttonBorderRadius: PropTypes.number,
    buttonBorderWidth: PropTypes.number,
    buttonBorderColor: PropTypes.string,
    buttonShift: PropTypes.number,
    value: PropTypes.number,
    maxValue: PropTypes.number,
    showValue: PropTypes.bool,
    fontSize: PropTypes.number,
    textColor: PropTypes.string,
    textShift: PropTypes.number,
    onClick: PropTypes.func
  }

  static defaultProps = {
    size: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
    buttonSize: 15,
    buttonColor: '#000000',
    buttonBackgroundColor: '#FFFFFF',
    buttonBorderRadius: 3,
    buttonBorderWidth: 1,
    buttonBorderColor: '#000000',
    buttonShift: 3,
    value: 0,
    maxValue: 0,
    showValue: true,
    fontSize: 12,
    textColor: '#000000',
    textShift: 2,
    onClick: () => {}
  }

  render() {
    const {
      size,
      image,
      borderRadius,
      borderWidth,
      borderColor,
      buttonSize,
      buttonColor,
      buttonBorderRadius,
      buttonBorderWidth,
      buttonBorderColor,
      buttonBackgroundColor,
      buttonHoverBorderColor,
      buttonShift,
      value,
      maxValue,
      showValue,
      fontSize,
      textColor,
      textShift,
      onClick
    } = this.props

    const blockStyle = {
      height: size - buttonShift,
      width: size - buttonShift,
      borderWidth,
      borderColor,
      borderRadius,
      backgroundImage: `url(${image})`
    }

    const valueStyle = {
      fontSize: fontSize,
      color: textColor,
      marginLeft: textShift,
      marginTop: textShift
    }

    const buttonStyle = {
      bottom: -buttonShift,
      right: -buttonShift,
      height: buttonSize,
      width: buttonSize,
      color: buttonColor,
      backgroundColor: buttonBackgroundColor,
      borderWidth: buttonBorderWidth,
      borderColor: buttonBorderColor,
      borderRadius: buttonBorderRadius
    }

    return (
      <div className={styles.block}
           style={blockStyle}>
        {
          showValue ? (
            <div className={styles.value}
                 style={valueStyle}>
              {`${value} / ${maxValue}`}
            </div>
          ) : null
        }
        <FontAwesomeIcon icon={faPlus}
                         className={styles.button}
                         style={buttonStyle}
                         onClick={onClick} />
      </div>
    )
  }
}
