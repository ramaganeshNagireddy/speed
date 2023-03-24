// Write your code here
import {Component} from "react"
import "./index.css"

class Speedometer extends Component{
    state={speed:0}
    onIncrese=()=>{
       
        this.setState((preState)=>({speed:preState.speed+10}))
    }
     onDecrese=()=>{
        this.setState((preState)=>(if(preState.speed>0){
            {speed:preState.speed-10}}
            else{
                {speed:0}
            }))
    }
    render(){
        const {speed}=this.state
        return(
            <div className="bg-container">
                <h1 className="head">SPEEDOMETER</h1>
                <img className="pic" src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer"/>
                <h1 className="head2">Speed is <span>{speed}</span>mph</h1>
                <p className="para">Min limit is 0mph,Max limit is 200mph</p>
                <div className="btn-container">
                    <button className="btn1" onClick={this.onIncrese}>Accelerate </button>
                    <button className="btn2" onClick={this.onDecrese}>Apply Brake</button>
                </div>
            </div>
        )
    }
}
export default Speedometer