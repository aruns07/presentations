import React, { Component } from 'react';
import Navigation from './navigation/index.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    };
  }

  navButtonClicked(path) {
    console.log(path);
    fetch(path)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.setState(() => {return {content: data}});
      })
      .catch(()=>{
        this.setState(() => { return {content: "Can't load resources."}});
      })
  }

  render() {
    return (
      <div className="App">
        <Navigation navButtonClicked={this.navButtonClicked.bind(this)} value="2"></Navigation>
        <main  dangerouslySetInnerHTML={{__html: this.state.content}}>
        </main>
      </div>
    );
  }
}

export default App;
