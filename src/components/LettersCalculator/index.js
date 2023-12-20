/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    console.log(inputPhrase)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="para" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="input-text"
            value={inputPhrase}
            onChange={this.onChangeInputPhrase}
            id="phraseText"
          />

          <p className="letter-count">No.of letters: {inputPhrase.length}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="calcuator-img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
