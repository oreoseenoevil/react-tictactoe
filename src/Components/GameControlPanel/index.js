import React from 'react'
import { Header } from '@Components/Header'

export const GameControlPanel = (props) => {
  return (
    <div className="gamecontrol">
      <Header
        players={props.players}
        status={props.status}
        settingsClickHandler={props.settingsClickHandler}
        switchModeHandler={props.switchModeHandler}
        newGameClickHandler={props.newGameClickHandler}
        resetClickHandler={props.resetClickHandler}
      />
    </div>
  )
}
