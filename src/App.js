import React, { Component } from 'react';
import './App.css';
import ChartMain from './components/chartMain.js'
import 'aos/dist/aos.css'
import AOS from 'aos'
class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
    })
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header" data-aos="fade-right">
          <h1 className="App-title">Cryptocurrency Chart</h1>
          <p className='intro'> Welcome, my name is <j className='highlight'> Jordyn McGinnis </j> and this is a Cryptocurrency Chart that I built from scratch! Feel
           free to checkout code on <a href='www.github.com/jordynmcginnis' className='highlight'> GitHub </a>, or take a look at my <j className='highlight'> website </j>
          </p>
        </header>
        <div className="App-intro">
          <ChartMain className='chart-main'/>
        </div>
      </div>
    );
  }
}

export default App;
