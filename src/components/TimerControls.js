import React, { Component } from 'react'

export default class TimerControls extends Component {
    render() {
        return (
            <div className ="timer-controls container">
                <button onClick ={this.props.play}><i className="fa fa-play"></i></button>
                <button onClick ={this.props.pause}><i className="fa fa-pause"></i></button>
                <button onClick ={this.props.reset}><i className="fa fa-refresh"></i></button>
            </div>
        )
    }
}
