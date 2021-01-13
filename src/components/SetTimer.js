import React, { Component } from 'react'

export default class SetTimer extends Component {
    render() {
        return (
            <div className ="set-timer container">
                
                <div className="session-control">
                    <div>Session Time</div>
                    <div>
                        <button onClick ={this.props.click} id = "session-up"><i className="fa fa-arrow-up"></i></button>
                        {this.props.session}
                        <button onClick ={this.props.click} id = "session-down"><i className="fa fa-arrow-down"></i></button>
                    </div>
                </div>
                <div className="break-control">
                    <div>Break Time</div>
                    <div>
                        <button onClick ={this.props.click} id = "break-up"><i className="fa fa-arrow-up"></i></button> 
                        {this.props.break} 
                        <button onClick ={this.props.click} id = 'break-down'><i className="fa fa-arrow-down"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}
