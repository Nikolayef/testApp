import React from "react"
import styles from "./Watch.module.css"

interface WatchState {
  time: Date
}

class Watch extends React.Component<object, WatchState> {
  private timerID?: NodeJS.Timeout

  constructor(props: object) {
    super(props)
    this.state = {
      time: new Date(),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID)
    }
  }

  tick() {
    this.setState({
      time: new Date(),
    })
  }

  formatTime = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    return `${hours}:${minutes}:${seconds}`
  }

  render() {
    return (
      <div className={styles.watch}>{this.formatTime(this.state.time)}</div>
    )
  }
}

export default Watch
