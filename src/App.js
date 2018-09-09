import React, { Component } from 'react';
import Header from './components/header/index'
import TaskBar from './components/taskbar/index'
import TaskList from './components/tasklist/index'

class App extends Component {
  render() {
    return (
      <div>
         <Header/>
         <TaskBar/>
         <TaskList/>

      </div>
    );
  }
}

export default App;
