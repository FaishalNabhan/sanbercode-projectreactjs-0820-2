import React, {Component} from "react"
import Clock from './time';

class Timer extends Component{
    constructor(props){
      super(props)
      this.state = {
        time: 100,
        showTime: true,
      }
    }
  
    tick() {
      this.setState({
        time: this.state.time - 1 
      });
    }
  
    componentDidMount(){
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    // componentDidUpdate(){
    //   if (this.state.buttonStopVisible === true){
    //     if (this.state.time > 5){
    //       this.setState({
    //         buttonStopVisible : false
    //       })
    //     }
    //   }
    // }
  
    // componentWillUnmount(){
    //   clearInterval(this.timerID);
    // }
  
    // stopTheTimer = ()=>{
    //   this.componentWillUnmount()
    // }
  
    deleteTheTimer = ()=>{
      if (this.state.time > 0){
      this.componentWillUnmount()
    }
}
  
    render(){
      return(
        <>
            <h1 style={{textAlign: "right"}}>
                Hitung mundur: {this.state.time}
            </h1>
            <h1 style={{textAlign: "left"}}>
                <Clock />
            </h1>
        </>
      )
    }
}
  
export default Timer