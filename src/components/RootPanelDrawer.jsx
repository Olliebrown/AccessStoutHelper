import React from 'react'
import PropTypes from 'prop-types'

import { Paper, IconButton } from '@mui/material'
import { KeyboardDoubleArrowRight as HideIcon } from '@mui/icons-material'

export default function RootPanelDrawer (props) {
  const { onHideDrawer, showDrawer, children } = props

  return (
    <div
      style={{
        position: 'fixed',
        top: '90px',
        right: '10px',
        transform: showDrawer ? 'translateX(0%)' : 'translateX(120%)',
        transition: 'transform 0.66s ease-in-out',
        zIndex: 999
      }}
    >
      <Paper
        elevation={5}
        sx={{
          height: 'calc(100vh - 140px)',
          width: '80vw',
          padding: '20px'
        }}
      >
        <IconButton
          aria-label="hide summary"
          sx={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={onHideDrawer}
        >
          <HideIcon />
        </IconButton>
        {children}
      </Paper>
    </div>
  )
}

RootPanelDrawer.propTypes = {
  showDrawer: PropTypes.bool,
  onHideDrawer: PropTypes.func,
  children: PropTypes.node
}

RootPanelDrawer.defaultProps = {
  showDrawer: false,
  onHideDrawer: () => {}
}
