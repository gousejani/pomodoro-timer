import React, { Component } from 'react'

export default class Timer extends Component {
    render() {
        return (
            <div className ="timer-section">
                <div className="timer-name">
                    {this.props.timerName}
                </div>
                <div className="timer">
                {this.props.displayTime.m}:{this.props.displayTime.s}
                </div> 
            </div>
        )
    }
}
