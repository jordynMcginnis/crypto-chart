import React, { Component } from 'react';
import './App.css';
import ChartMain from './components/chartMain.js';
import Projects from './components/projects.js';
import 'aos/dist/aos.css';
import AOS from 'aos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle () {
    console.log('this ran')
    if(this.state.render === false){
      this.setState(function(){
        return {
          render: true
        }
      })
    } else {
      this.setState(function(){
        return {
          render: false
        }
      })
    }
  }
  componentDidMount() {
    AOS.init({
      duration: 1200,
    })
  }
  render() {
    return (
      <div className="App" >
      {this.state.render === true
            ? <Projects toggleClick={this.handleToggle}/>
            :null
      }
        <div className='main'>

        <header className="App-header" data-aos="fade-right">
          <h1 className="App-title">Cryptocurrency Chart</h1>

          <p className='intro'> Welcome, my name is <j className='highlight'> Jordyn McGinnis </j> and this is a Cryptocurrency Chart that I built from scratch! Feel
           free to checkout code on <a href='www.github.com/jordynmcginnis' className='highlight'> GitHub </a>, or take a look at my <j className='highlight'> website </j>
          </p>
        </header>
        <div className="App-intro">
          <ChartMain className='chart-main' toggleClick={this.handleToggle}/>
        </div>
        </div>
        }
      </div>
    );
  }
}

export default App;
