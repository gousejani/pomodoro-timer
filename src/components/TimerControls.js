import React, { Component } from 'react'

export default class TimerControls extends Component {
    render() {
        return (
            <div className ="timer-controls">
                <button onClick ={this.props.play}>Play</button>
                <button onClick ={this.props.pause}>Pause</button>
                <button onClick ={this.props.reset}>Reset</button>
            </div>
        )
    }
}
