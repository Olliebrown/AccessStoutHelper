import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@mui/material'

export default function HelperButton (props) {
  const { onClickCallback, showButton } = props

  return (
    <div style={{
      position: 'fixed',
      top: '150px',
      right: (showButton ? '-30px' : '-70px'),
      transform: 'rotate(-90deg)',
      transition: 'right 0.33s ease-in-out'
    }}>
      <Button
        onClick={onClickCallback}
        variant='contained'
        color='primary'
      >
        {'Helper'}
      </Button>
    </div>
  )
}

HelperButton.propTypes = {
  onClickCallback: PropTypes.func,
  showButton: PropTypes.bool
}

HelperButton.defaultProps = {
  onClickCallback: () => {},
  showButton: true
}
