import './App.css';
import React, { Component } from 'react'
import Pomodoro from './components/Pomodoro';
import SetTimer from './components/SetTimer';
import Timer from './components/Timer';
import TimerControls from './components/TimerControls';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      session:45,
      break:10,
      totalTime:0,
      timeLeft:0,
      displayTime:{
        m:"45",
        s:"00"
      },
      timerName:'Session',
      status: 'off',
      startTime:new Date(),
      pauseTime:new Date()
    }
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    this.click = this.click.bind(this);
    // this.click = this.click.bind(this);
  }
  zeroPad(num,size){
    num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
  }
  getTimeDiff(t){
    var timeDiff={};
    timeDiff.s = this.zeroPad(Math.floor(((t)%60000)/1000),2);
    timeDiff.m = this.zeroPad(Math.floor((t)/60000),2);
    return timeDiff;
  }
  play(){
    console.log(this.state);
    if(this.state.status === 'off'){
      console.log('from play')
      const t = this.state.session*1000*60;
      this.setState({
        startTime: new Date(),
        status:'on',
        totalTime: t,
        displayTime: this.getTimeDiff(t)
      })
      this.updateInterval = setInterval(() => {
        this.updateTimer();
      }, 1000);    
    }else if(this.state.status==='paused'){
      this.setState({
        status:'on',
        startTime: new Date()
      })
      this.updateInterval = setInterval(() => {
        this.updateTimer();
      }, 1000);
    }
    // console.log(this.state);
  }
  pause(){
    if(this.state.status ==='on'){
      console.log('from pause')
      this.setState(state=>({
        status:'paused',
        pauseTime: new Date(),
        timeLeft : state.totalTime-(new Date() -  state.startTime),
        totalTime: state.totalTime-(new Date() -  state.startTime)
      }))
      clearInterval(this.updateInterval);
    }
  }
  reset(){
    const t = this.state.session*1000*60;
    this.setState({
      timeLeft:0,
      totalTime:0,
      status: 'off',
      timerName:'Session',
      displayTime: this.getTimeDiff(t)
    })
    clearInterval(this.updateInterval);
  }
  updateTimer(){
    console.log('from updateTimer')
    if(this.state.totalTime - (new Date() - this.state.startTime) <= 0){
      this.audioBeep.play();
      switch(this.state.timerName){
        case 'Session':
          this.setState(state=>({
            totalTime: state.break*1000*60,
            startTime: new Date(),
            timerName:'Break',
            displayTime:this.getTimeDiff(state.session*1000*60)
          }));
          break;
        case 'Break':
          this.setState(state=>({
            totalTime: state.session*1000*60,
            startTime: new Date(),
            timerName:'Session',
            displayTime:this.getTimeDiff(state.session*1000*60)
          }));
          break;
        default:
          break;
      }
    }else{
      const t = this.state.totalTime - (new Date() - this.state.startTime);
      const td = this.getTimeDiff(t);
      this.setState({
        displayTime : td,
        timeLeft: t
      })
    }
  }

  click(e){
    // console.log(e.target.parentElement.id)
    switch(e.target.parentElement.id){
      case 'break-up':
        this.setState(state=>({
          break: state.break + 1
        }));
        break;
      case 'break-down':
        this.setState(state=>({
          break: Math.max(state.break - 1,1)
        }));
        break;
      case 'session-up':
        this.setState(state=>({
          session: state.session + 1,
          displayTime:this.getTimeDiff((state.session+1)*1000*60)
        }));
        break;
      case 'session-down':
        this.setState(state=>({
          session: Math.max(state.session - 1,1),
          displayTime:this.getTimeDiff((state.session -1) *1000*60)
        }));
        break;
      default:
        break;
      
    }
  }
  render() {
    return (
      <div className ="main-app container">
        {/* <Pomodoro time = {this.state} play ={this.play} pause = {this.pause} reset ={this.reset} click={this.click}/> */}
        <Timer timerName = {this.state.timerName} displayTime = {this.state.displayTime}/>
        <TimerControls play ={this.play} pause ={this.pause} reset={this.reset}/>
        <SetTimer break = {this.state.break} session= {this.state.session} click ={this.click}/>
        <audio
          id="beep"
          preload="auto"
          ref={(audio) => {
              this.audioBeep = audio;
          }}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
    )
  }
}