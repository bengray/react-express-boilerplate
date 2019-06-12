import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = async () => {
    const results = await fetch('/api/getList');
    const jsonResults = await results.json();
    this.setState({ list: jsonResults.filter(item => item.id === '1')[0] });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <h1>List of Items</h1>
        {this.state.list.description}
      </div>
    );
  }
}

export default List;