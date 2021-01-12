import React, { Component } from 'react'

export default class SetTimer extends Component {
    render() {
        return (
            <div>
                <div className="break-control">
                    <div>Break Time</div>
                    <div>
                        <button onClick ={this.props.click} id = "break-up">Up</button> 
                        {this.props.break} 
                        <button onClick ={this.props.click} id = 'break-down'>Down</button>
                    </div>
                </div>
                <div className="session-control">
                    <div>Session Time</div>
                    <div>
                        <button onClick ={this.props.click} id = "session-up">Up</button>
                        {this.props.session}
                        <button onClick ={this.props.click} id = "session-down">Down</button>
                    </div>
                </div>
            </div>
        )
    }
}
