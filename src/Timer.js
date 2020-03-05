import React, { Component } from 'react'

function Milliseconds(number) {
    let hr = number / 3600;
    let heures = Math.trunc(hr);
    let restHr = number % 3600;
  
    let mn = restHr / 60;
    let minutes = Math.trunc(mn);
    let restMn = restHr % 60;
  
    let second = restMn % 60;
    return { heures, minutes, second };
  }


 class Timer extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
          timer: 0,
          intervalOutput: null
        };
      }

      startTimer = () => {
        const interval = setInterval(() => {
          this.setState({
            timer: this.state.timer + 1
          });
        }, 1000);
        this.setState({
          intervalOutput: interval
        });
      };

      pauseTimer = () => {
        clearInterval(this.state.intervalOutput);
        this.setState({
          intervalOutput: null
        });
      };
    
      testTimer = () => {
        this.state.intervalOutput == null ? this.startTimer() : this.pauseTimer();
      };
      resetTimer = () => {
        this.setState({
          timer: 0
        });
        clearInterval(this.state.intervalOutput);
      };





    
    render() {
        return (
            <div>
                <div className="bloc-times">
                <div className="sous-bloc">
            <div className="hour">
              {Milliseconds(this.state.timer)
                .heures.toString()
                .padStart(2, "0")}
              :
            </div>
            <span>Hour</span>
            </div>
            <div className="sous-bloc">
            <div className="minute">
              {Milliseconds(this.state.timer)
                .minutes.toString()
                .padStart(2, "0")}
              :
            </div>
            <span>Minute</span>
            </div>

            <div className="sous-bloc">
            <div className="second">
              {Milliseconds(this.state.timer)
                .second.toString()
                .padStart(2, "0")}
            </div>
            <span>Second</span>
            </div>

                 
                 
                </div>
                
                <button className="btn" onClick={this.testTimer}>
          {this.state.intervalOutput == null ? "Start " : "Pause"}
        </button>
        <button className="btn" onClick={this.resetTimer}>Reset</button>
        


            </div>
        )
    }
}




export default Timer 