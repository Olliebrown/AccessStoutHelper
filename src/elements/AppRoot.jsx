import React from 'react'

import { CssBaseline } from '@mui/material'

import HelperButton from './HelperButton.jsx'

export default function AppRoot () {
  // Manage state of the helper dialog and button
  const [showHelper, setShowHelper] = React.useState(false)
  const onShowHelper = () => { setShowHelper(true) }
  // const onHideHelper = () => { setShowHelper(false) }

  return (
    <React.Fragment>
      <CssBaseline />
      <HelperButton
        showButton={!showHelper}
        onClickCallback={onShowHelper}
      />
    </React.Fragment>
  )
}
