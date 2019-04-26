import React, { Component } from 'react';
// import List from './List';
// import Aux from './hoc/Aux';
// import classes from './App.module.css'
import Apps from './Apps';
import Layout from './layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <div><Apps /></div>
      </Layout>
    )
  }
}




export default App;