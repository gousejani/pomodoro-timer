import React, { Component } from 'react'

export default class Timer extends Component {
    render() {
        return (
            <div className ="timer-section container">
                <div className="title">Pomodoro Clock</div>
                <div className="timer">
                    <div className="timer-name">
                        {this.props.timerName}
                    </div>
                    <div className="timer-display">
                        {this.props.displayTime.m}:{this.props.displayTime.s}
                    </div> 
                </div>   
                
            </div>
        )
    }
}
