import React from "react"
import Header from "./components/Header/Header"
import ReviewList from "./components/ReviewList/ReviewList"

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main className='Main'>
          <ReviewList />
        </main>
      </div>
    )
  }
}

export default App
