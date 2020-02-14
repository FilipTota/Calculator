import React, {Component} from 'react';
import Button from './components/Button';
import Input from './components/Input'
import ClearBtn from './components/ClearBtn'
import * as math from 'mathjs'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  addInput = (value) => {
    this.setState({
      input: this.state.input + value
    })
  }

  mathOperation = () => {
    if(this.state.input !== '') {
      this.setState({
        input: math.evaluate(this.state.input)
      })
    }
  }

  clearInput = () => {
    this.setState({
      input: ''
    })
  }


  render() {
    return(
      <div className="App">
        <div className="calculator">
          <Input input={this.state.input}/>
          <div className="row">
            <Button click={this.addInput}>7</Button>
            <Button click={this.addInput}>8</Button>
            <Button click={this.addInput}>9</Button>
            <Button click={this.addInput}>*</Button>
          </div>
          <div className="row">
            <Button click={this.addInput}>4</Button>
            <Button click={this.addInput}>5</Button>
            <Button click={this.addInput}>6</Button>
            <Button click={this.addInput}>/</Button>
          </div> 
          <div className="row">
            <Button click={this.addInput}>1</Button>
            <Button click={this.addInput}>2</Button>
            <Button click={this.addInput}>3</Button>
            <Button click={this.addInput}>+</Button>
          </div> 
          <div className="row">
            <Button click={this.addInput}>.</Button>
            <Button click={this.addInput}>0</Button>
            <Button click={this.mathOperation}>=</Button>
            <Button click={this.addInput}>-</Button>
          </div>
          <ClearBtn clear={this.clearInput}/>
        </div>
      </div>
    )
  }
}

export default App;