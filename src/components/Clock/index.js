import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  componentDidMount() {
    console.log('Component did mount called')
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log(`ComponentWillUnMount called`)
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log(`Render called ${date}`)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
