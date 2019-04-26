import React, { Component } from 'react';
import List from './List';
import Aux from './hoc/Aux';
import classes from './Apps.module.css'
import classes1 from './List.module.css';

class Apps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };    
  }

  OnChange = (event) => {
    this.setState({ term: event.target.value})
  }

  clear = (event) => {
    this.setState({term: ''})
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.term !=='') {
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
            
          })
    }
  }

//   removeItems = (nameofItem) => {
//       let state = this.state;
//       let newitems = [...state.todo.filter(i => {
//           return i !== nameofItem
//       } )];
//       state.items = newitems;
//       this.setState({ state })
//   }
  removeItem = index => {
      let newArray = this.state.items;
      newArray.splice(index,1);
      this.setState({items: newArray});
  };
  render () {
    return (
      <Aux>
      <div>
        <form className={classes.Apps} onSubmit={this.onSubmit}>
        <input className={classes.input} value={this.state.term} onChange={this.OnChange} />
        {/* <button><b>Submit</b></button> */}
        </form>
        <List items={this.state.items} removeItem={this.removeItem}/>
      </div>
      </Aux> 
    );
  }
}


export default Apps;