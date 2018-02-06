import React from 'react';
import {Toggle} from './Part2/Toggle'

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date()};
  }

  componentDidMount() {
    this.start(this.props['interval'])
  }

  componentWillUnmount() {
    this.stop()
  }

  start(interval){
    console.log('start')
    this.timerID = setInterval(
      () => this.tick(),
      interval
    );
  }

  stop(){
    console.log('stop')
    clearInterval(this.timerID);
  }


  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.  
          <Toggle 
            doStart={this.start.bind(this)}
            doStop={this.stop.bind(this)}
           />
        </h2>
      </div>
    );
  }
}
